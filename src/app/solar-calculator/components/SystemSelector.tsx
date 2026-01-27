'use client';

import { motion } from 'framer-motion';
import { Sun, Star, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SystemSize } from '../types/calculator';
import { SYSTEM_OPTIONS } from '../utils/constants';
import { formatCurrencyRange } from '../utils/calculations';

interface SystemSelectorProps {
  value: SystemSize;
  onChange: (value: SystemSize) => void;
}

export function SystemSelector({ value, onChange }: SystemSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sun className="h-4 w-4 text-primary-500" />
        <label className="text-sm font-medium text-charcoal">
          Solar System Size
        </label>
        <span className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 max-w-xs text-center">
            Choose based on your roof space and energy needs
          </span>
        </span>
      </div>

      <div className="space-y-3">
        {SYSTEM_OPTIONS.map((option) => (
          <motion.button
            key={option.size}
            type="button"
            onClick={() => onChange(option.size)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={cn(
              "relative w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
              value === option.size
                ? "border-primary-500 bg-primary-50 shadow-md"
                : "border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50"
            )}
            aria-pressed={value === option.size}
            aria-label={`${option.label} system - ${option.description}`}
          >
            {/* Popular badge */}
            {option.popular && (
              <div className="absolute -top-2.5 left-4 px-3 py-0.5 bg-secondary-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <Star className="h-3 w-3" fill="currentColor" />
                Most Popular
              </div>
            )}

            {/* Selection indicator */}
            {value === option.size && (
              <motion.div
                layoutId="system-indicator"
                className="absolute top-4 right-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                initial={false}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-charcoal">
                    {option.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="space-y-0.5">
                  <div className="text-gray-500">Panels</div>
                  <div className="font-medium text-charcoal">{option.panels}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-gray-500">Roof Space</div>
                  <div className="font-medium text-charcoal">{option.roofSpace}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-gray-500">Daily Output</div>
                  <div className="font-medium text-primary-600">
                    ~{option.dailyGeneration} kWh
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-gray-500">Cost</div>
                  <div className="font-medium text-charcoal">
                    {formatCurrencyRange(option.costRange)}
                  </div>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default SystemSelector;
