'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Calculator,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { contactInfo } from '@/data/siteData';

import type { CalculatorInputs, HouseholdSize, RoofDirection, SystemSize, BatterySize } from './types/calculator';
import { calculateSolarSavings, getDefaultDailyUsage } from './utils/calculations';
import { QUARTERLY_BILL_RANGE } from './utils/constants';

import {
  BillSlider,
  HouseholdSelector,
  SystemSelector,
  BatterySelector,
  RoofDirectionSelector,
  UsageInput,
  CalculatorResults,
  SavingsChart,
  CumulativeSavingsChart,
  CalculatorQuoteForm,
  EmailReportForm,
  SourcesDisclaimer,
} from './components';

export default function SolarCalculatorPage() {
  // Calculator state
  const [inputs, setInputs] = useState<CalculatorInputs>({
    quarterlyBill: QUARTERLY_BILL_RANGE.default,
    householdSize: 'medium' as HouseholdSize,
    dailyUsage: 20,
    systemSize: 6.6 as SystemSize,
    roofDirection: 'north' as RoofDirection,
    includeBattery: false,
    batterySize: 13.5 as BatterySize,
  });

  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Update daily usage when household size changes
  useEffect(() => {
    const defaultUsage = getDefaultDailyUsage(inputs.householdSize);
    setInputs((prev) => ({ ...prev, dailyUsage: defaultUsage }));
  }, [inputs.householdSize]);

  // Calculate results with debouncing via useMemo
  const results = useMemo(() => {
    return calculateSolarSavings(inputs);
  }, [inputs]);

  // Input handlers
  const handleBillChange = useCallback((value: number) => {
    setInputs((prev) => ({ ...prev, quarterlyBill: value }));
    setHasInteracted(true);
  }, []);

  const handleHouseholdChange = useCallback((value: HouseholdSize) => {
    setInputs((prev) => ({ ...prev, householdSize: value }));
    setHasInteracted(true);
  }, []);

  const handleUsageChange = useCallback((value: number) => {
    setInputs((prev) => ({ ...prev, dailyUsage: value }));
    setHasInteracted(true);
  }, []);

  const handleSystemChange = useCallback((value: SystemSize) => {
    setInputs((prev) => ({ ...prev, systemSize: value }));
    setHasInteracted(true);
  }, []);

  const handleDirectionChange = useCallback((value: RoofDirection) => {
    setInputs((prev) => ({ ...prev, roofDirection: value }));
    setHasInteracted(true);
  }, []);

  const handleBatteryToggle = useCallback((include: boolean) => {
    setInputs((prev) => ({ ...prev, includeBattery: include }));
    setHasInteracted(true);
  }, []);

  const handleBatterySizeChange = useCallback((size: BatterySize) => {
    setInputs((prev) => ({ ...prev, batterySize: size }));
    setHasInteracted(true);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-charcoal via-charcoal to-gray-900 text-white py-16 md:py-24 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6"
              >
                <Calculator className="h-4 w-4 text-primary-400" />
                Solar & Battery Savings Calculator
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                How Much Could You{' '}
                <span className="text-primary-400">Save</span> with Solar?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                Use our calculator to estimate your potential savings with solar panels
                and battery storage. Get personalized results based on Adelaide electricity
                prices and your actual usage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 text-sm text-gray-300"
              >
                <span className="flex items-center gap-1">
                  <Sun className="h-4 w-4 text-secondary-400" />
                  Adelaide-specific data
                </span>
                <span className="flex items-center gap-1">
                  <ChevronRight className="h-4 w-4 text-secondary-400" />
                  Instant results
                </span>
                <span className="flex items-center gap-1">
                  <ChevronRight className="h-4 w-4 text-secondary-400" />
                  No login required
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="section -mt-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Inputs Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Section 1: Current Situation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="card p-6 space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Calculator className="h-5 w-5 text-primary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-charcoal">
                      Your Current Situation
                    </h2>
                  </div>

                  <BillSlider
                    value={inputs.quarterlyBill}
                    onChange={handleBillChange}
                  />

                  <HouseholdSelector
                    value={inputs.householdSize}
                    onChange={handleHouseholdChange}
                  />

                  <UsageInput
                    value={inputs.dailyUsage}
                    onChange={handleUsageChange}
                    defaultValue={getDefaultDailyUsage(inputs.householdSize)}
                  />
                </motion.div>

                {/* Section 2: Solar System */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="card p-6 space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-secondary-100 rounded-lg">
                      <Sun className="h-5 w-5 text-secondary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-charcoal">
                      Your Solar System
                    </h2>
                  </div>

                  <SystemSelector
                    value={inputs.systemSize}
                    onChange={handleSystemChange}
                  />

                  <RoofDirectionSelector
                    value={inputs.roofDirection}
                    onChange={handleDirectionChange}
                  />
                </motion.div>

                {/* Section 3: Battery Storage */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="card p-6"
                >
                  <BatterySelector
                    includeBattery={inputs.includeBattery}
                    batterySize={inputs.batterySize}
                    onToggleBattery={handleBatteryToggle}
                    onSizeChange={handleBatterySizeChange}
                  />
                </motion.div>
              </div>

              {/* Results Column */}
              <div className="lg:col-span-3 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-charcoal">
                      Your Estimated Savings
                    </h2>
                    {hasInteracted && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-gray-500"
                      >
                        Results update automatically
                      </motion.span>
                    )}
                  </div>

                  {/* Calculator Results */}
                  <CalculatorResults
                    results={results}
                    systemSize={inputs.systemSize}
                    includeBattery={inputs.includeBattery}
                  />
                </motion.div>

                {/* Charts */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <SavingsChart
                    currentBill={results.currentAnnualBill}
                    newBill={results.newAnnualBill}
                    annualSavings={results.annualSavings}
                  />
                  <CumulativeSavingsChart
                    annualSavings={results.annualSavings}
                    systemCost={results.totalSystemCost}
                  />
                </motion.div>

                {/* Email Report Option */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <EmailReportForm
                    calculatedSavings={results.annualSavings}
                    systemSize={inputs.systemSize}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-primary-500 to-primary-600">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to See Your Exact Savings?
                  </h2>
                  <p className="text-primary-100 mb-6">
                    Our team will visit your property, assess your roof, and provide
                    an accurate quote based on your specific situation.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-secondary-300" />
                      <span>Free site assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-secondary-300" />
                      <span>Accurate, no-obligation quote</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-secondary-300" />
                      <span>CEC accredited installers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-secondary-300" />
                      <span>Local Adelaide team</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => setShowQuoteForm(true)}
                      rightIcon={<ArrowRight className="h-5 w-5" />}
                    >
                      Get Your Free Quote
                    </Button>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="inline-flex items-center gap-2 px-6 py-3 text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Floating Quote Form */}
                <AnimatePresence>
                  {showQuoteForm && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <CalculatorQuoteForm
                        systemSize={inputs.systemSize}
                        includeBattery={inputs.includeBattery}
                        batterySize={inputs.batterySize}
                        estimatedAnnualBill={results.currentAnnualBill}
                        calculatedSavings={results.annualSavings}
                        onClose={() => setShowQuoteForm(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {!showQuoteForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hidden md:block"
                  >
                    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Your Calculator Summary
                      </h3>
                      <div className="space-y-3 text-white/90">
                        <div className="flex justify-between">
                          <span>System Size:</span>
                          <span className="font-medium">{inputs.systemSize}kW</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Battery:</span>
                          <span className="font-medium">
                            {inputs.includeBattery ? `${inputs.batterySize}kWh` : 'None'}
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-white/20 pt-3">
                          <span>Annual Savings:</span>
                          <span className="font-bold text-secondary-300">
                            ${Math.round(results.annualSavings).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>25-Year Savings:</span>
                          <span className="font-bold text-secondary-300">
                            ${Math.round(results.twentyFiveYearSavings.min).toLocaleString()}+
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sources & Disclaimer */}
        <section className="section bg-white">
          <div className="container-custom max-w-4xl">
            <SourcesDisclaimer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
