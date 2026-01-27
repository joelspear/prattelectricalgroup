// Solar Calculator - Calculation Logic
import type { CalculatorInputs, CalculatorResults, SystemSize, BatterySize } from '../types/calculator';
import {
  ELECTRICITY_RATE,
  DAILY_SUPPLY_CHARGE,
  FEED_IN_TARIFF,
  PEAK_SUN_HOURS,
  SELF_CONSUMPTION_NO_BATTERY,
  SELF_CONSUMPTION_WITH_BATTERY,
  CO2_OFFSET_PER_KW,
  TREES_PER_TONNE_CO2,
  CAR_CO2_PER_YEAR,
  getSystemOption,
  getBatteryOption,
  getDirectionMultiplier,
} from './constants';

/**
 * Calculate all solar savings results based on user inputs
 */
export function calculateSolarSavings(inputs: CalculatorInputs): CalculatorResults {
  const {
    quarterlyBill,
    systemSize,
    roofDirection,
    includeBattery,
    batterySize,
    dailyUsage,
  } = inputs;

  // Get system and battery options
  const systemOption = getSystemOption(systemSize);
  const batteryOption = getBatteryOption(includeBattery ? batterySize : 0);
  const directionMultiplier = getDirectionMultiplier(roofDirection);

  // ==========================================================================
  // CURRENT SITUATION
  // ==========================================================================

  const currentAnnualBill = quarterlyBill * 4;
  const currentDailyUsage = dailyUsage;
  const annualUsage = currentDailyUsage * 365;

  // ==========================================================================
  // SOLAR GENERATION
  // ==========================================================================

  // Daily generation adjusted for roof direction
  const dailyGeneration = systemSize * PEAK_SUN_HOURS * directionMultiplier;
  const annualGeneration = dailyGeneration * 365;

  // ==========================================================================
  // SELF-CONSUMPTION AND EXPORT
  // ==========================================================================

  // Self-consumption rate depends on battery
  const hasBattery = includeBattery && batterySize > 0;
  const selfConsumptionRate = hasBattery
    ? SELF_CONSUMPTION_WITH_BATTERY
    : SELF_CONSUMPTION_NO_BATTERY;

  // Calculate how much solar is used vs exported
  // Self-consumed = min(daily usage, daily generation * self-consumption rate)
  const maxSelfConsumed = dailyGeneration * selfConsumptionRate;
  const dailySelfConsumed = Math.min(currentDailyUsage, maxSelfConsumed);
  const selfConsumedKWh = dailySelfConsumed * 365;

  // Export = generation - self consumed
  const exportedKWh = Math.max(0, annualGeneration - selfConsumedKWh);

  // Remaining grid usage = total usage - self consumed solar
  const remainingGridUsage = Math.max(0, annualUsage - selfConsumedKWh);

  // ==========================================================================
  // FINANCIAL CALCULATIONS
  // ==========================================================================

  // Savings from using solar instead of grid power
  const savingsFromSelfConsumption = selfConsumedKWh * ELECTRICITY_RATE;

  // Income from exporting excess solar
  const feedInIncome = exportedKWh * FEED_IN_TARIFF;

  // New annual cost
  const annualSupplyCharge = DAILY_SUPPLY_CHARGE * 365;
  const gridEnergyCost = remainingGridUsage * ELECTRICITY_RATE;
  const newAnnualBill = gridEnergyCost + annualSupplyCharge - feedInIncome;

  // Total annual savings
  const annualSavings = currentAnnualBill - newAnnualBill;

  // ==========================================================================
  // SYSTEM COSTS
  // ==========================================================================

  const solarCost = systemOption?.costRange ?? { min: 0, max: 0 };
  const batteryCost = hasBattery && batteryOption?.costRange
    ? batteryOption.costRange
    : { min: 0, max: 0 };

  const totalSystemCost = {
    min: solarCost.min + batteryCost.min,
    max: solarCost.max + batteryCost.max,
  };

  // ==========================================================================
  // ROI CALCULATIONS
  // ==========================================================================

  // Payback period in years
  const paybackYears = {
    min: totalSystemCost.min / annualSavings,
    max: totalSystemCost.max / annualSavings,
  };

  // 10-year savings (savings * 10 - system cost)
  const tenYearSavings = {
    min: (annualSavings * 10) - totalSystemCost.max,
    max: (annualSavings * 10) - totalSystemCost.min,
  };

  // 25-year savings
  const twentyFiveYearSavings = {
    min: (annualSavings * 25) - totalSystemCost.max,
    max: (annualSavings * 25) - totalSystemCost.min,
  };

  // ==========================================================================
  // ENVIRONMENTAL IMPACT
  // ==========================================================================

  // CO2 offset based on system size
  const co2OffsetTonnes = systemSize * CO2_OFFSET_PER_KW;

  // Equivalent trees planted (based on CO2 offset)
  const treesEquivalent = Math.round(co2OffsetTonnes * TREES_PER_TONNE_CO2);

  // Cars off road equivalent
  const carsOffRoad = parseFloat((co2OffsetTonnes / CAR_CO2_PER_YEAR).toFixed(1));

  // ==========================================================================
  // BILL REDUCTION PERCENTAGE
  // ==========================================================================

  const billReductionPercent = Math.min(100, Math.round(
    ((currentAnnualBill - newAnnualBill) / currentAnnualBill) * 100
  ));

  return {
    // Current situation
    currentAnnualBill,
    currentDailyUsage,

    // Solar generation
    dailyGeneration,
    annualGeneration,

    // Self-consumption and export
    selfConsumptionRate,
    selfConsumedKWh,
    exportedKWh,
    remainingGridUsage,

    // Financial
    savingsFromSelfConsumption,
    feedInIncome,
    newAnnualBill: Math.max(0, newAnnualBill),
    annualSavings,

    // System costs
    solarCost,
    batteryCost,
    totalSystemCost,

    // ROI
    paybackYears,
    tenYearSavings,
    twentyFiveYearSavings,

    // Environmental
    co2OffsetTonnes,
    treesEquivalent,
    carsOffRoad,

    // Percentage
    billReductionPercent,
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, showCents = false): string {
  if (showCents) {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
    }).format(amount);
  }
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format currency range
 */
export function formatCurrencyRange(range: { min: number; max: number }): string {
  return `${formatCurrency(range.min)} - ${formatCurrency(range.max)}`;
}

/**
 * Format years for payback display
 */
export function formatPaybackYears(years: number): string {
  if (years < 1) {
    return `${Math.round(years * 12)} months`;
  }
  if (years < 10) {
    return `${years.toFixed(1)} years`;
  }
  return `${Math.round(years)} years`;
}

/**
 * Format payback range
 */
export function formatPaybackRange(range: { min: number; max: number }): string {
  return `${formatPaybackYears(range.min)} - ${formatPaybackYears(range.max)}`;
}

/**
 * Calculate daily/monthly savings from annual
 */
export function getSavingsBreakdown(annualSavings: number) {
  return {
    daily: annualSavings / 365,
    monthly: annualSavings / 12,
    quarterly: annualSavings / 4,
  };
}

/**
 * Get default daily usage based on household size
 */
export function getDefaultDailyUsage(householdSize: string): number {
  const usageMap: Record<string, number> = {
    small: 12,
    medium: 20,
    large: 30,
  };
  return usageMap[householdSize] ?? 20;
}

/**
 * Estimate daily usage from quarterly bill
 */
export function estimateDailyUsageFromBill(quarterlyBill: number): number {
  const annualBill = quarterlyBill * 4;
  const annualSupplyCharge = DAILY_SUPPLY_CHARGE * 365;
  const energyCost = annualBill - annualSupplyCharge;
  const annualUsage = energyCost / ELECTRICITY_RATE;
  return Math.max(5, Math.round(annualUsage / 365));
}

/**
 * Get recommended system size based on usage
 */
export function getRecommendedSystemSize(dailyUsage: number): SystemSize {
  if (dailyUsage <= 15) return 6.6;
  if (dailyUsage <= 30) return 10;
  return 13;
}

/**
 * Get recommended battery size based on usage and system
 */
export function getRecommendedBatterySize(
  dailyUsage: number
): BatterySize {
  // Evening usage typically 30-40% of daily usage
  const eveningUsage = dailyUsage * 0.35;

  if (eveningUsage <= 8) return 10;
  if (eveningUsage <= 12) return 13.5;
  return 20;
}
