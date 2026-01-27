'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Star, HelpCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BatterySize } from '../types/calculator';
import { BATTERY_OPTIONS } from '../utils/constants';
import { formatCurrencyRange } from '../utils/calculations';

interface BatterySelectorProps {
  includeBattery: boolean;
  batterySize: BatterySize;
  onToggleBattery: (include: boolean) => void;
  onSizeChange: (size: BatterySize) => void;
}

export function BatterySelector({
  includeBattery,
  batterySize,
  onToggleBattery,
  onSizeChange,
}: BatterySelectorProps) {
  return (
    <div className="space-y-4">
      {/* Toggle header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Battery className="h-4 w-4 text-primary-500" />
          <label className="text-sm font-medium text-charcoal">
            Include Battery Storage?
          </label>
          <span className="group relative">
            <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 max-w-xs text-center">
              Batteries store solar energy for use at night
            </span>
          </span>
        </div>

        {/* Toggle switch */}
        <button
          type="button"
          onClick={() => onToggleBattery(!includeBattery)}
          className={cn(
            "relative w-14 h-8 rounded-full transition-colors duration-200",
            includeBattery ? "bg-primary-500" : "bg-gray-300"
          )}
          role="switch"
          aria-checked={includeBattery}
          aria-label="Include battery storage"
        >
          <motion.div
            className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
            animate={{ left: includeBattery ? "calc(100% - 28px)" : "4px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
      </div>

      {/* Battery options */}
      <AnimatePresence>
        {includeBattery && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 overflow-hidden"
          >
            {/* Benefits banner */}
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-green-800">
                    With a battery, you can use 70-85% of your solar energy
                  </p>
                  <p className="text-green-700 mt-1">
                    Store excess daytime solar for evening and night use
                  </p>
                </div>
              </div>
            </div>

            {/* Battery options grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {BATTERY_OPTIONS.filter((opt) => opt.size > 0).map((option) => (
                <motion.button
                  key={option.size}
                  type="button"
                  onClick={() => onSizeChange(option.size)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "relative p-4 rounded-xl border-2 transition-all duration-200 text-left",
                    batterySize === option.size
                      ? "border-primary-500 bg-primary-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50"
                  )}
                  aria-pressed={batterySize === option.size}
                  aria-label={`${option.label} battery - ${option.description}`}
                >
                  {/* Popular badge */}
                  {option.popular && (
                    <div className="absolute -top-2.5 left-3 px-2 py-0.5 bg-secondary-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" fill="currentColor" />
                      Popular
                    </div>
                  )}

                  {/* Selection indicator */}
                  {batterySize === option.size && (
                    <motion.div
                      layoutId="battery-indicator"
                      className="absolute top-3 right-3 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
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

                  <div className="space-y-2">
                    <div className="text-lg font-bold text-charcoal">
                      {option.label}
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                    {option.backupHours && (
                      <p className="text-xs text-primary-600 font-medium">
                        ~{option.backupHours} backup
                      </p>
                    )}
                    {option.costRange && (
                      <p className="text-sm text-gray-500">
                        {formatCurrencyRange(option.costRange)}
                      </p>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No battery info */}
      {!includeBattery && (
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-600">
            Without a battery, excess solar is exported to the grid for a feed-in tariff
            of approximately 6c/kWh. You can add a battery later.
          </p>
        </div>
      )}
    </div>
  );
}

export default BatterySelector;
