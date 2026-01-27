'use client';

import { motion } from 'framer-motion';
import { Compass, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { RoofDirection } from '../types/calculator';
import { ROOF_DIRECTION_OPTIONS } from '../utils/constants';

interface RoofDirectionSelectorProps {
  value: RoofDirection;
  onChange: (value: RoofDirection) => void;
}

export function RoofDirectionSelector({ value, onChange }: RoofDirectionSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Compass className="h-4 w-4 text-primary-500" />
        <label className="text-sm font-medium text-charcoal">
          Roof Direction
        </label>
        <span className="text-xs text-gray-500">(Optional)</span>
        <span className="group relative">
          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            North-facing roofs generate the most power in Adelaide
          </span>
        </span>
      </div>

      {/* Visual compass selector */}
      <div className="relative mx-auto w-48 h-48">
        {/* Compass circle */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 bg-gray-50" />

        {/* Direction markers */}
        {ROOF_DIRECTION_OPTIONS.map((option) => {
          // Calculate position on compass
          const positions: Record<string, { top: string; left: string; transform: string }> = {
            north: { top: '0', left: '50%', transform: 'translateX(-50%)' },
            'north-east': { top: '15%', left: '85%', transform: 'translate(-50%, -50%)' },
            'north-west': { top: '15%', left: '15%', transform: 'translate(-50%, -50%)' },
            east: { top: '50%', left: '100%', transform: 'translate(-100%, -50%)' },
            west: { top: '50%', left: '0', transform: 'translateY(-50%)' },
          };

          const pos = positions[option.id];
          const isSelected = value === option.id;
          const efficiency = Math.round(option.multiplier * 100);

          return (
            <motion.button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "absolute z-10 flex flex-col items-center gap-0.5 p-2 rounded-lg transition-all duration-200",
                isSelected
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-charcoal border border-gray-200 hover:border-primary-300 hover:bg-primary-50"
              )}
              style={{
                top: pos.top,
                left: pos.left,
                transform: pos.transform,
              }}
              aria-pressed={isSelected}
              aria-label={`${option.label} - ${efficiency}% efficiency`}
            >
              <span className="text-xs font-bold whitespace-nowrap">
                {option.id === 'north' ? 'N' :
                 option.id === 'north-east' ? 'NE' :
                 option.id === 'north-west' ? 'NW' :
                 option.id === 'east' ? 'E' : 'W'}
              </span>
              <span className={cn(
                "text-xs",
                isSelected ? "text-white/80" : "text-gray-500"
              )}>
                {efficiency}%
              </span>
            </motion.button>
          );
        })}

        {/* Center sun icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-secondary-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        </div>
      </div>

      {/* Selected info */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Selected:{' '}
          <span className="font-medium text-charcoal">
            {ROOF_DIRECTION_OPTIONS.find((o) => o.id === value)?.label}
          </span>
        </p>
        {value !== 'north' && (
          <p className="text-xs text-gray-500 mt-1">
            {Math.round((1 - (ROOF_DIRECTION_OPTIONS.find((o) => o.id === value)?.multiplier ?? 1)) * 100)}% less
            generation than north-facing
          </p>
        )}
      </div>
    </div>
  );
}

export default RoofDirectionSelector;
