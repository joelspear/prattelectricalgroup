'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Home,
  Clock,
  Loader2,
  Award,
  HeadphonesIcon,
} from 'lucide-react';
import { cn, isValidAustralianPhone } from '@/lib/utils';
import { Button } from '@/components/ui';
import { contactInfo } from '@/data/siteData';
import type { SystemSize, BatterySize } from '../types/calculator';
import { formatCurrency } from '../utils/calculations';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .refine(isValidAustralianPhone, 'Please enter a valid Australian phone number'),
  email: z.string().email('Please enter a valid email address'),
  suburb: z.string().min(2, 'Please enter your suburb'),
  propertyType: z.enum(['house', 'townhouse', 'unit', 'commercial']),
  roofType: z.enum(['tile', 'colorbond', 'other']).optional(),
  bestTimeToCall: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface CalculatorQuoteFormProps {
  systemSize: SystemSize;
  includeBattery: boolean;
  batterySize: BatterySize;
  estimatedAnnualBill: number;
  calculatedSavings: number;
  onClose?: () => void;
}

export function CalculatorQuoteForm({
  systemSize,
  includeBattery,
  batterySize,
  estimatedAnnualBill,
  calculatedSavings,
  onClose,
}: CalculatorQuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      propertyType: 'house',
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Prepare form data with calculator values
    const formData = {
      ...data,
      systemSize: `${systemSize}kW`,
      includeBattery,
      batterySize: includeBattery ? `${batterySize}kWh` : 'None',
      estimatedAnnualBill: formatCurrency(estimatedAnnualBill),
      calculatedSavings: formatCurrency(calculatedSavings),
      source: 'Solar Calculator',
    };

    // TODO: Integrate with Go High Level or other CRM
    console.log('Quote form submitted:', formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmittedName(data.name.split(' ')[0]);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="card p-6 md:p-8">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500" />
            </motion.div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-charcoal">
                Thanks {submittedName}!
              </h3>
              <p className="text-gray-600">We&apos;ve received your solar enquiry.</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800">
                Based on your inputs, you could save approximately{' '}
                <span className="font-bold">{formatCurrency(calculatedSavings)}</span> per year.
              </p>
            </div>

            <p className="text-gray-600">
              We&apos;ll call you within 2 business hours to discuss your options and arrange
              a free site assessment.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-charcoal">James Pratt</p>
              <p className="text-gray-600">Pratt Electrical Group</p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                {contactInfo.phone}
              </a>
            </div>

            {onClose && (
              <Button onClick={onClose} variant="outline" className="mt-4">
                Close
              </Button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-charcoal">
                Get Your Free Custom Quote
              </h3>
              <p className="text-gray-600 mt-2">
                Our team will visit your property, assess your roof, and provide
                an accurate quote based on your specific situation.
              </p>
            </div>

            {/* Calculator Summary */}
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 mb-6">
              <p className="text-sm text-primary-700 mb-2">
                <strong>Your calculator results:</strong>
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>System: <span className="font-medium">{systemSize}kW</span></div>
                <div>Battery: <span className="font-medium">{includeBattery ? `${batterySize}kWh` : 'None'}</span></div>
                <div>Est. Savings: <span className="font-medium text-green-600">{formatCurrency(calculatedSavings)}/yr</span></div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  {...register('name')}
                  className={cn('form-input', errors.name && 'border-red-500')}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="form-label">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone *
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className={cn('form-input', errors.phone && 'border-red-500')}
                  placeholder="0412 345 678"
                />
                {errors.phone && (
                  <p className="form-error">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="form-label">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email *
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className={cn('form-input', errors.email && 'border-red-500')}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>

              {/* Suburb */}
              <div>
                <label className="form-label">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Suburb *
                </label>
                <input
                  type="text"
                  {...register('suburb')}
                  className={cn('form-input', errors.suburb && 'border-red-500')}
                  placeholder="e.g., Norwood"
                />
                {errors.suburb && (
                  <p className="form-error">{errors.suburb.message}</p>
                )}
              </div>

              {/* Property Type */}
              <div>
                <label className="form-label">
                  <Home className="inline h-4 w-4 mr-1" />
                  Property Type *
                </label>
                <select
                  {...register('propertyType')}
                  className="form-input"
                >
                  <option value="house">House</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="unit">Unit / Apartment</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              {/* Roof Type - Optional */}
              <div>
                <label className="form-label">
                  Roof Type <span className="text-gray-400">(optional)</span>
                </label>
                <select {...register('roofType')} className="form-input">
                  <option value="">Select roof type...</option>
                  <option value="tile">Tile</option>
                  <option value="colorbond">Colorbond / Metal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Best Time - Optional */}
              <div>
                <label className="form-label">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Best Time to Call <span className="text-gray-400">(optional)</span>
                </label>
                <select {...register('bestTimeToCall')} className="form-input">
                  <option value="">Anytime</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 8pm)</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
              </Button>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  CEC Accredited
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Free quotes
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Local Adelaide team
                </span>
                <span className="flex items-center gap-1">
                  <HeadphonesIcon className="h-4 w-4" />
                  24/7 support
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Email report form for optional email capture
interface EmailReportFormProps {
  calculatedSavings: number;
  systemSize: SystemSize;
}

export function EmailReportForm({ calculatedSavings, systemSize }: EmailReportFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // TODO: Integrate with email service
    console.log('Email report requested:', { email, calculatedSavings, systemSize });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 bg-green-50 rounded-lg border border-green-200 text-center"
      >
        <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
        <p className="text-green-800 font-medium">Report sent!</p>
        <p className="text-sm text-green-700">Check your inbox for your personalized savings report.</p>
      </motion.div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h4 className="font-medium text-charcoal mb-2">
        Want This Report Emailed to You?
      </h4>
      <p className="text-sm text-gray-600 mb-4">
        We&apos;ll send your personalized savings report plus info about current rebates and next steps.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={cn(
            'flex-1 px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            error && 'border-red-500'
          )}
        />
        <Button type="submit" size="sm" isLoading={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send'}
        </Button>
      </form>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default CalculatorQuoteForm;
