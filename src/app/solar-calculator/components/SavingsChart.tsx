'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/calculations';

interface SavingsChartProps {
  currentBill: number;
  newBill: number;
  annualSavings: number;
}

export function SavingsChart({ currentBill, newBill, annualSavings }: SavingsChartProps) {
  const maxBill = Math.max(currentBill, newBill);
  const currentPercent = (currentBill / maxBill) * 100;
  const newPercent = (newBill / maxBill) * 100;
  const savingsPercent = ((currentBill - newBill) / currentBill) * 100;

  return (
    <div className="card p-6 space-y-6">
      <h4 className="font-semibold text-charcoal">Before vs After Solar</h4>

      <div className="space-y-4">
        {/* Current Bill Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Current Annual Bill</span>
            <span className="font-semibold text-charcoal">{formatCurrency(currentBill)}</span>
          </div>
          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${currentPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg"
            />
          </div>
        </div>

        {/* New Bill Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">New Annual Bill (with Solar)</span>
            <span className="font-semibold text-green-600">{formatCurrency(newBill)}</span>
          </div>
          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${newPercent}%` }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg"
            />
            {/* Savings indicator */}
            <motion.div
              initial={{ width: 0, left: `${newPercent}%` }}
              animate={{ width: `${currentPercent - newPercent}%`, left: `${newPercent}%` }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="absolute inset-y-0 bg-green-200 rounded-r-lg flex items-center justify-center"
            >
              {savingsPercent > 20 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-xs font-medium text-green-700"
                >
                  Save {Math.round(savingsPercent)}%
                </motion.span>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Annual Savings Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200"
      >
        <div>
          <p className="text-sm text-green-700">Your Annual Savings</p>
          <p className="text-2xl font-bold text-green-600">{formatCurrency(annualSavings)}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-green-700">Monthly Savings</p>
          <p className="text-lg font-semibold text-green-600">
            {formatCurrency(annualSavings / 12)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

interface CumulativeSavingsChartProps {
  annualSavings: number;
  systemCost: { min: number; max: number };
}

export function CumulativeSavingsChart({
  annualSavings,
  systemCost,
}: CumulativeSavingsChartProps) {
  const avgSystemCost = (systemCost.min + systemCost.max) / 2;

  // Generate data points for 25 years
  const dataPoints = useMemo(() => {
    const points = [];
    for (let year = 0; year <= 25; year++) {
      const cumulativeSavings = annualSavings * year;
      const netSavings = cumulativeSavings - avgSystemCost;
      points.push({
        year,
        cumulativeSavings,
        netSavings,
      });
    }
    return points;
  }, [annualSavings, avgSystemCost]);

  // Find payback year
  const paybackYear = dataPoints.find((p) => p.netSavings >= 0)?.year ?? 25;

  // Calculate chart dimensions
  const maxSavings = dataPoints[25].cumulativeSavings;
  const chartHeight = 200;
  const chartWidth = 100; // Percentage

  return (
    <div className="card p-6 space-y-4">
      <h4 className="font-semibold text-charcoal">25-Year Cumulative Savings</h4>

      {/* Chart Container */}
      <div className="relative h-[250px] mt-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 w-16 flex flex-col justify-between text-xs text-gray-500">
          <span>{formatCurrency(maxSavings)}</span>
          <span>{formatCurrency(maxSavings / 2)}</span>
          <span>$0</span>
        </div>

        {/* Chart area */}
        <div className="absolute left-16 right-0 top-0 bottom-8 border-l border-b border-gray-200">
          {/* Grid lines */}
          <div className="absolute inset-0">
            <div className="absolute w-full border-t border-gray-100" style={{ top: '25%' }} />
            <div className="absolute w-full border-t border-gray-100" style={{ top: '50%' }} />
            <div className="absolute w-full border-t border-gray-100" style={{ top: '75%' }} />
          </div>

          {/* System cost line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute border-t-2 border-dashed border-red-400"
            style={{ top: `${(1 - avgSystemCost / maxSavings) * 100}%` }}
          >
            <span className="absolute right-0 -top-5 text-xs text-red-500 bg-white px-1">
              System Cost
            </span>
          </motion.div>

          {/* Payback point marker */}
          {paybackYear < 25 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg z-10"
              style={{
                left: `${(paybackYear / 25) * 100}%`,
                top: `${(1 - avgSystemCost / maxSavings) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-green-500 text-white text-xs px-2 py-1 rounded">
                Payback: ~{paybackYear} years
              </div>
            </motion.div>
          )}

          {/* Savings area */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="savingsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Area under curve */}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              d={`
                M 0 ${chartHeight}
                ${dataPoints
                  .map(
                    (p) =>
                      `L ${(p.year / 25) * chartWidth} ${
                        chartHeight - (p.cumulativeSavings / maxSavings) * chartHeight
                      }`
                  )
                  .join(' ')}
                L ${chartWidth} ${chartHeight}
                Z
              `}
              fill="url(#savingsGradient)"
            />

            {/* Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              d={`
                M 0 ${chartHeight}
                ${dataPoints
                  .map(
                    (p) =>
                      `L ${(p.year / 25) * chartWidth} ${
                        chartHeight - (p.cumulativeSavings / maxSavings) * chartHeight
                      }`
                  )
                  .join(' ')}
              `}
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute left-16 right-0 bottom-0 h-6 flex justify-between text-xs text-gray-500 px-1">
          <span>0</span>
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25 yrs</span>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-500">10-Year Net Savings</p>
          <p className="text-lg font-bold text-green-600">
            {formatCurrency(annualSavings * 10 - avgSystemCost)}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">25-Year Net Savings</p>
          <p className="text-lg font-bold text-green-600">
            {formatCurrency(annualSavings * 25 - avgSystemCost)}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center">
        * Based on current electricity prices. Actual savings typically higher due to rising energy costs.
      </p>
    </div>
  );
}

export default SavingsChart;
