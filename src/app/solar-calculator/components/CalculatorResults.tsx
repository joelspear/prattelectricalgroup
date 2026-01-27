'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign,
  Calendar,
  TrendingUp,
  Leaf,
  TreePine,
  Car,
  Sun,
  Battery,
  Zap,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CalculatorResults as Results } from '../types/calculator';
import {
  formatCurrency,
  formatCurrencyRange,
  formatPaybackRange,
  getSavingsBreakdown,
} from '../utils/calculations';

interface CalculatorResultsProps {
  results: Results;
  systemSize: number;
  includeBattery: boolean;
}

export function CalculatorResults({
  results,
  systemSize,
  includeBattery,
}: CalculatorResultsProps) {
  const [activeTab, setActiveTab] = useState<'savings' | 'system' | 'environment'>('savings');
  const [showDetails, setShowDetails] = useState(false);
  const savingsBreakdown = getSavingsBreakdown(results.annualSavings);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Primary Results Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Annual Savings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="card p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-green-500 rounded-lg">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-green-800">Annual Savings</span>
          </div>
          <motion.div
            key={results.annualSavings}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-3xl font-bold text-green-600"
          >
            {formatCurrency(results.annualSavings)}
          </motion.div>
          <p className="text-sm text-green-700 mt-1">
            {formatCurrency(savingsBreakdown.monthly)}/month
          </p>
        </motion.div>

        {/* Bill Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card p-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary-500 rounded-lg">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-600">Bill Reduction</span>
          </div>
          <motion.div
            key={results.billReductionPercent}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-3xl font-bold text-primary-600"
          >
            {results.billReductionPercent}%
          </motion.div>
          <div className="text-sm text-gray-500 mt-1">
            <span className="line-through">{formatCurrency(results.currentAnnualBill)}</span>
            {' → '}
            <span className="font-medium text-charcoal">
              {formatCurrency(results.newAnnualBill)}
            </span>
          </div>
        </motion.div>

        {/* Payback Period */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="card p-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-secondary-500 rounded-lg">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-600">Payback Period</span>
          </div>
          <div className="text-3xl font-bold text-secondary-600">
            {formatPaybackRange(results.paybackYears)}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Average Adelaide: 3-5 years
          </p>
        </motion.div>

        {/* 25-Year Savings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="card p-6 bg-gradient-to-br from-primary-50 to-blue-100 border-primary-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary-600 rounded-lg">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-primary-800">25-Year Savings</span>
          </div>
          <div className="text-3xl font-bold text-primary-700">
            {formatCurrencyRange(results.twentyFiveYearSavings)}
          </div>
          <p className="text-xs text-primary-600 mt-1">
            Based on current prices*
          </p>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {[
          { id: 'savings', label: 'Investment Details', icon: DollarSign },
          { id: 'system', label: 'System Details', icon: Sun },
          { id: 'environment', label: 'Environmental Impact', icon: Leaf },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={cn(
              "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === tab.id
                ? "text-primary-600 border-primary-500"
                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'savings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Investment Summary */}
              <div className="card p-6 space-y-4">
                <h4 className="font-semibold text-charcoal flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary-500" />
                  Investment Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Solar System Cost</span>
                    <span className="font-medium">{formatCurrencyRange(results.solarCost)}</span>
                  </div>
                  {includeBattery && results.batteryCost.max > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Battery Cost</span>
                      <span className="font-medium">{formatCurrencyRange(results.batteryCost)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Total Investment</span>
                    <span className="font-bold text-charcoal">
                      {formatCurrencyRange(results.totalSystemCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-green-50 -mx-2 px-2 rounded">
                    <span className="text-green-700 font-medium">10-Year Net Savings</span>
                    <span className="font-bold text-green-600">
                      {formatCurrencyRange(results.tenYearSavings)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Government rebates already included in system costs
                </p>
              </div>

              {/* Savings Breakdown */}
              <div className="card p-6 space-y-4">
                <h4 className="font-semibold text-charcoal flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Savings Breakdown
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">From Self-Consumption</span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(results.savingsFromSelfConsumption)}/yr
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Feed-in Tariff Income</span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(results.feedInIncome)}/yr
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Remaining Grid Cost</span>
                    <span className="font-medium">
                      {formatCurrency(results.newAnnualBill)}/yr
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-green-50 -mx-2 px-2 rounded">
                    <span className="text-green-700 font-medium">Total Annual Savings</span>
                    <span className="font-bold text-green-600">
                      {formatCurrency(results.annualSavings)}/yr
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Generation Details */}
              <div className="card p-6 space-y-4">
                <h4 className="font-semibold text-charcoal flex items-center gap-2">
                  <Sun className="h-5 w-5 text-secondary-500" />
                  Solar Generation
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">System Size</span>
                    <span className="font-medium">{systemSize}kW</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Daily Generation</span>
                    <span className="font-medium">{results.dailyGeneration.toFixed(1)} kWh</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Annual Generation</span>
                    <span className="font-medium">
                      {Math.round(results.annualGeneration).toLocaleString()} kWh
                    </span>
                  </div>
                </div>
              </div>

              {/* Usage Details */}
              <div className="card p-6 space-y-4">
                <h4 className="font-semibold text-charcoal flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary-500" />
                  Energy Usage
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Your Daily Usage</span>
                    <span className="font-medium">{results.currentDailyUsage} kWh</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Self-Consumption Rate</span>
                    <span className="font-medium">
                      {Math.round(results.selfConsumptionRate * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Solar Used Directly</span>
                    <span className="font-medium text-green-600">
                      {Math.round(results.selfConsumedKWh).toLocaleString()} kWh/yr
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Exported to Grid</span>
                    <span className="font-medium">
                      {Math.round(results.exportedKWh).toLocaleString()} kWh/yr
                    </span>
                  </div>
                  {includeBattery && (
                    <div className="flex items-center gap-2 py-2 text-sm text-primary-600 bg-primary-50 -mx-2 px-2 rounded">
                      <Battery className="h-4 w-4" />
                      Battery increases self-consumption to {Math.round(results.selfConsumptionRate * 100)}%
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'environment' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CO2 Offset */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card p-6 text-center bg-gradient-to-br from-green-50 to-emerald-100 border-green-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {results.co2OffsetTonnes.toFixed(1)}
                </div>
                <p className="text-sm text-green-700 font-medium">
                  Tonnes CO2 Offset/Year
                </p>
                <p className="text-xs text-green-600 mt-2">
                  Equivalent to {(results.co2OffsetTonnes * 25).toFixed(0)} tonnes over system lifetime
                </p>
              </motion.div>

              {/* Trees Equivalent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card p-6 text-center bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500 rounded-full flex items-center justify-center">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-emerald-600">
                  {results.treesEquivalent}
                </div>
                <p className="text-sm text-emerald-700 font-medium">
                  Trees Planted Equivalent
                </p>
                <p className="text-xs text-emerald-600 mt-2">
                  Based on annual CO2 absorption
                </p>
              </motion.div>

              {/* Cars Off Road */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {results.carsOffRoad}
                </div>
                <p className="text-sm text-blue-700 font-medium">
                  Cars Off Road/Year
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  Based on average vehicle emissions
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Expandable Note */}
      <div className="pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
        >
          <motion.div animate={{ rotate: showDetails ? 180 : 0 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
          Important notes about these estimates
        </button>
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 text-xs text-gray-500 space-y-1"
            >
              <p>* Based on current electricity prices. Actual savings likely higher as electricity prices typically increase 3-5% annually.</p>
              <p>* Self-consumption rates are estimates. Actual rates depend on your energy usage patterns.</p>
              <p>* System costs include government rebates (STC). Battery rebates may be available in some areas.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default CalculatorResults;
