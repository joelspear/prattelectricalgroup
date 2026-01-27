'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Calendar, ArrowRight, Battery, Sun } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { SystemSize, BatterySize } from '../types/calculator';
import { calculateSolarSavings, formatCurrency, formatPaybackRange } from '../utils/calculations';
import { QUARTERLY_BILL_RANGE } from '../utils/constants';

interface QuickCalculatorProps {
  className?: string;
}

export function QuickCalculator({ className }: QuickCalculatorProps) {
  // Simplified inputs
  const [quarterlyBill, setQuarterlyBill] = useState(400);
  const [systemSize, setSystemSize] = useState<SystemSize>(6.6);
  const [includeBattery, setIncludeBattery] = useState(false);

  // Calculate results
  const results = useMemo(() => {
    return calculateSolarSavings({
      quarterlyBill,
      householdSize: 'medium',
      dailyUsage: 20, // Default for quick calc
      systemSize,
      roofDirection: 'north',
      includeBattery,
      batterySize: 13.5 as BatterySize,
    });
  }, [quarterlyBill, systemSize, includeBattery]);

  const percentage = ((quarterlyBill - QUARTERLY_BILL_RANGE.min) /
    (QUARTERLY_BILL_RANGE.max - QUARTERLY_BILL_RANGE.min)) * 100;

  return (
    <div className={cn("card p-6 md:p-8", className)}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <Calculator className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal">Quick Solar Calculator</h3>
          <p className="text-sm text-gray-500">Estimate your savings in 30 seconds</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Bill Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              Quarterly Bill
            </label>
            <span className="text-lg font-bold text-primary-600">
              ${quarterlyBill}
            </span>
          </div>
          <div className="relative">
            <div className="absolute inset-0 h-2 bg-gray-200 rounded-full top-1/2 -translate-y-1/2" />
            <div
              className="absolute h-2 bg-primary-500 rounded-full top-1/2 -translate-y-1/2"
              style={{ width: `${percentage}%` }}
            />
            <input
              type="range"
              min={200}
              max={600}
              step={25}
              value={quarterlyBill}
              onChange={(e) => setQuarterlyBill(Number(e.target.value))}
              className="relative w-full h-2 appearance-none bg-transparent cursor-pointer z-10
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary-500
                [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>$200</span>
            <span>$600</span>
          </div>
        </div>

        {/* System Size */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Sun className="h-4 w-4 text-secondary-500" />
            System Size
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[6.6, 10].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSystemSize(size as SystemSize)}
                className={cn(
                  "py-2 px-4 rounded-lg text-sm font-medium transition-all",
                  systemSize === size
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {size}kW
              </button>
            ))}
          </div>
        </div>

        {/* Battery Toggle */}
        <div className="flex items-center justify-between py-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Battery className="h-4 w-4 text-primary-500" />
            Add Battery
          </label>
          <button
            type="button"
            onClick={() => setIncludeBattery(!includeBattery)}
            className={cn(
              "relative w-12 h-6 rounded-full transition-colors",
              includeBattery ? "bg-primary-500" : "bg-gray-300"
            )}
          >
            <motion.div
              className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow"
              animate={{ left: includeBattery ? "calc(100% - 22px)" : "2px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        {/* Results */}
        <div className="pt-4 border-t border-gray-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Annual Savings</span>
            </div>
            <motion.span
              key={results.annualSavings}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-2xl font-bold text-green-600"
            >
              {formatCurrency(results.annualSavings)}
            </motion.span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary-500" />
              <span className="text-sm text-gray-600">Payback Period</span>
            </div>
            <span className="text-lg font-semibold text-secondary-600">
              {formatPaybackRange(results.paybackYears)}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/solar-calculator"
          className="flex items-center justify-center gap-2 w-full py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
        >
          See Full Calculator
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default QuickCalculator;
