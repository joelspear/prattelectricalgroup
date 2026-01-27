'use client';

import { motion } from 'framer-motion';
import { Users, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HouseholdSize } from '../types/calculator';
import { HOUSEHOLD_OPTIONS } from '../utils/constants';

interface HouseholdSelectorProps {
  value: HouseholdSize;
  onChange: (value: HouseholdSize) => void;
}

export function HouseholdSelector({ value, onChange }: HouseholdSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-primary-500" />
        <label className="text-sm font-medium text-charcoal">
          Household Size
        </label>
        <span className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            This helps estimate your daily energy usage
          </span>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {HOUSEHOLD_OPTIONS.map((option) => (
          <motion.button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "relative p-4 rounded-xl border-2 transition-all duration-200 text-left",
              value === option.id
                ? "border-primary-500 bg-primary-50 shadow-md"
                : "border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50"
            )}
            aria-pressed={value === option.id}
            aria-label={`${option.label} - ${option.description}`}
          >
            {/* Selection indicator */}
            {value === option.id && (
              <motion.div
                layoutId="household-indicator"
                className="absolute top-2 right-2 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                initial={false}
              >
                <svg
                  className="w-3 h-3 text-white"
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

            <div className="space-y-1">
              <div className="text-lg font-semibold text-charcoal">
                {option.label}
              </div>
              <div className="text-sm text-gray-500">
                {option.description}
              </div>
              <div className="text-xs text-primary-600 font-medium mt-2">
                ~{option.defaultUsage} kWh/day
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default HouseholdSelector;
