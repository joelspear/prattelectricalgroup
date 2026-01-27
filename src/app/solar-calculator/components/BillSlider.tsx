'use client';

import { motion } from 'framer-motion';
import { DollarSign, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QUARTERLY_BILL_RANGE } from '../utils/constants';

interface BillSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function BillSlider({ value, onChange }: BillSliderProps) {
  const { min, max, step } = QUARTERLY_BILL_RANGE;
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-charcoal">
          <DollarSign className="h-4 w-4 text-primary-500" />
          Current Electricity Bill
          <span className="group relative">
            <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Check your latest electricity bill for your quarterly amount
            </span>
          </span>
        </label>
        <motion.span
          key={value}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-primary-500"
        >
          ${value}
        </motion.span>
      </div>

      <div className="relative">
        {/* Track background */}
        <div className="absolute inset-0 h-3 bg-gray-200 rounded-full top-1/2 -translate-y-1/2" />

        {/* Active track */}
        <div
          className="absolute h-3 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full top-1/2 -translate-y-1/2"
          style={{ width: `${percentage}%` }}
        />

        {/* Slider input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            "relative w-full h-3 appearance-none bg-transparent cursor-pointer z-10",
            "[&::-webkit-slider-thumb]:appearance-none",
            "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6",
            "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white",
            "[&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary-500",
            "[&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-grab",
            "[&::-webkit-slider-thumb]:active:cursor-grabbing",
            "[&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform",
            "[&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
            "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white",
            "[&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-primary-500",
            "[&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-grab"
          )}
          aria-label="Quarterly electricity bill"
        />
      </div>

      {/* Range labels */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>${min}/quarter</span>
        <span className="font-medium text-gray-600">per quarter</span>
        <span>${max}/quarter</span>
      </div>

      {/* Direct input option */}
      <div className="flex items-center gap-2 pt-2">
        <span className="text-sm text-gray-500">Or enter exact amount:</span>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(e) => {
              const newValue = Math.min(max, Math.max(min, Number(e.target.value)));
              onChange(newValue);
            }}
            className="w-24 pl-7 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            aria-label="Enter quarterly bill amount"
          />
        </div>
      </div>
    </div>
  );
}

export default BillSlider;
