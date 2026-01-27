'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, HelpCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UsageInputProps {
  value: number;
  onChange: (value: number) => void;
  defaultValue: number;
}

export function UsageInput({ value, onChange, defaultValue }: UsageInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [useCustom, setUseCustom] = useState(false);

  const handleToggleCustom = () => {
    setUseCustom(!useCustom);
    if (useCustom) {
      // Reset to default when turning off custom
      onChange(defaultValue);
    }
  };

  return (
    <div className="space-y-3">
      {/* Collapsible header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary-500" />
          <span className="text-sm font-medium text-charcoal">
            Advanced: Custom Daily Usage
          </span>
          <span className="text-xs text-gray-500">(Optional)</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-600">
                  Found on your electricity bill as &quot;average daily usage&quot;.
                  Leave this to use our estimate based on your household size.
                </p>
              </div>

              {/* Toggle for custom usage */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Use custom daily usage
                </span>
                <button
                  type="button"
                  onClick={handleToggleCustom}
                  className={cn(
                    "relative w-11 h-6 rounded-full transition-colors duration-200",
                    useCustom ? "bg-primary-500" : "bg-gray-300"
                  )}
                  role="switch"
                  aria-checked={useCustom}
                >
                  <motion.div
                    className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{ left: useCustom ? "calc(100% - 22px)" : "2px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* Custom input */}
              <AnimatePresence>
                {useCustom && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <input
                      type="number"
                      min={5}
                      max={80}
                      value={value}
                      onChange={(e) => {
                        const newValue = Math.min(80, Math.max(5, Number(e.target.value)));
                        onChange(newValue);
                      }}
                      className="w-24 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      aria-label="Daily energy usage in kWh"
                    />
                    <span className="text-sm text-gray-600">kWh per day</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Current value display */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  {useCustom ? 'Your daily usage:' : 'Estimated daily usage:'}
                </span>
                <span className="text-lg font-semibold text-primary-600">
                  {value} kWh/day
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UsageInput;
