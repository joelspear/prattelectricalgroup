// Solar Calculator TypeScript Types

export type HouseholdSize = 'small' | 'medium' | 'large';
export type RoofDirection = 'north' | 'north-east' | 'north-west' | 'east' | 'west';
export type SystemSize = 6.6 | 10 | 13;
export type BatterySize = 0 | 10 | 13.5 | 20;

export interface HouseholdOption {
  id: HouseholdSize;
  label: string;
  description: string;
  defaultUsage: number; // kWh/day
}

export interface SystemOption {
  size: SystemSize;
  label: string;
  description: string;
  panels: string;
  roofSpace: string;
  popular?: boolean;
  costRange: {
    min: number;
    max: number;
  };
  annualGeneration: number; // kWh
  dailyGeneration: number; // kWh average
}

export interface BatteryOption {
  size: BatterySize;
  label: string;
  description: string;
  backupHours?: string;
  costRange?: {
    min: number;
    max: number;
  };
  popular?: boolean;
}

export interface RoofDirectionOption {
  id: RoofDirection;
  label: string;
  multiplier: number;
}

export interface DataSource {
  label: string;
  value: string;
  source: string;
  url: string;
  date?: string;
}

export interface CalculatorInputs {
  quarterlyBill: number;
  householdSize: HouseholdSize;
  dailyUsage: number;
  systemSize: SystemSize;
  roofDirection: RoofDirection;
  includeBattery: boolean;
  batterySize: BatterySize;
}

export interface CalculatorResults {
  // Current situation
  currentAnnualBill: number;
  currentDailyUsage: number;

  // Solar generation
  dailyGeneration: number;
  annualGeneration: number;

  // Self-consumption and export
  selfConsumptionRate: number;
  selfConsumedKWh: number;
  exportedKWh: number;
  remainingGridUsage: number;

  // Financial
  savingsFromSelfConsumption: number;
  feedInIncome: number;
  newAnnualBill: number;
  annualSavings: number;

  // System costs
  solarCost: { min: number; max: number };
  batteryCost: { min: number; max: number };
  totalSystemCost: { min: number; max: number };

  // ROI
  paybackYears: { min: number; max: number };
  tenYearSavings: { min: number; max: number };
  twentyFiveYearSavings: { min: number; max: number };

  // Environmental
  co2OffsetTonnes: number;
  treesEquivalent: number;
  carsOffRoad: number;

  // Percentage
  billReductionPercent: number;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  propertyType: 'house' | 'townhouse' | 'unit' | 'commercial';
  roofType?: 'tile' | 'colorbond' | 'other';
  bestTimeToCall?: string;
  // Pre-filled from calculator
  systemSize: SystemSize;
  includeBattery: boolean;
  batterySize: BatterySize;
  estimatedAnnualBill: number;
  calculatedSavings: number;
}
