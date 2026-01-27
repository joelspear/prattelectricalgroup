// Adelaide-specific solar data with source citations
import type {
  HouseholdOption,
  SystemOption,
  BatteryOption,
  RoofDirectionOption,
  DataSource,
} from '../types/calculator';

// ============================================================================
// ELECTRICITY COSTS (Adelaide/SA)
// ============================================================================

export const ELECTRICITY_RATE = 0.35; // $/kWh
export const DAILY_SUPPLY_CHARGE = 1.10; // $/day
export const FEED_IN_TARIFF = 0.06; // $/kWh (average)
export const FEED_IN_TARIFF_RANGE = { min: 0.05, max: 0.12 };

// ============================================================================
// SOLAR GENERATION (Adelaide)
// ============================================================================

export const PEAK_SUN_HOURS = 5.0; // Adelaide average
export const ANNUAL_GENERATION_PER_KW = 1500; // kWh

// ============================================================================
// SELF-CONSUMPTION RATES
// ============================================================================

export const SELF_CONSUMPTION_NO_BATTERY = 0.35; // 30-40%
export const SELF_CONSUMPTION_WITH_BATTERY = 0.75; // 70-85%

// ============================================================================
// ENVIRONMENTAL FACTORS
// ============================================================================

export const CO2_OFFSET_PER_KW = 1.5; // tonnes per year
export const TREES_PER_TONNE_CO2 = 45; // trees to absorb 1 tonne CO2/year
export const CAR_CO2_PER_YEAR = 4.6; // tonnes per car per year (avg)

// ============================================================================
// INPUT OPTIONS
// ============================================================================

export const QUARTERLY_BILL_RANGE = {
  min: 100,
  max: 1000,
  default: 400,
  step: 25,
};

export const HOUSEHOLD_OPTIONS: HouseholdOption[] = [
  {
    id: 'small',
    label: '1-2 people',
    description: 'Small household',
    defaultUsage: 12, // kWh/day
  },
  {
    id: 'medium',
    label: '3-4 people',
    description: 'Medium household',
    defaultUsage: 20, // kWh/day
  },
  {
    id: 'large',
    label: '5+ people',
    description: 'Large household',
    defaultUsage: 30, // kWh/day
  },
];

export const SYSTEM_OPTIONS: SystemOption[] = [
  {
    size: 6.6,
    label: '6.6kW',
    description: 'Most popular for medium households',
    panels: '16-18 panels',
    roofSpace: '~35m²',
    popular: true,
    costRange: { min: 5500, max: 7500 },
    annualGeneration: 9900, // kWh
    dailyGeneration: 27, // kWh
  },
  {
    size: 10,
    label: '10kW',
    description: 'Great for larger homes or future EV',
    panels: '24-26 panels',
    roofSpace: '~50m²',
    costRange: { min: 7500, max: 10500 },
    annualGeneration: 15000, // kWh
    dailyGeneration: 41, // kWh
  },
  {
    size: 13,
    label: '13kW',
    description: 'Maximum savings for high usage',
    panels: '30-34 panels',
    roofSpace: '~65m²',
    costRange: { min: 10500, max: 14000 },
    annualGeneration: 19500, // kWh
    dailyGeneration: 53, // kWh
  },
];

export const BATTERY_OPTIONS: BatteryOption[] = [
  {
    size: 0,
    label: 'No Battery',
    description: 'Export excess to grid for feed-in tariff',
  },
  {
    size: 10,
    label: '10kWh',
    description: 'Cover evening usage (e.g., Sungrow SBR)',
    backupHours: '4-6 hours',
    costRange: { min: 9000, max: 12000 },
  },
  {
    size: 13.5,
    label: '13.5kWh',
    description: 'Most popular choice (Tesla Powerwall 3)',
    backupHours: '6-8 hours',
    costRange: { min: 12000, max: 15000 },
    popular: true,
  },
  {
    size: 20,
    label: '20kWh+',
    description: 'Near energy independence (Multiple batteries)',
    backupHours: '10-12 hours',
    costRange: { min: 18000, max: 24000 },
  },
];

export const ROOF_DIRECTION_OPTIONS: RoofDirectionOption[] = [
  { id: 'north', label: 'North (Best)', multiplier: 1.0 },
  { id: 'north-east', label: 'North-East', multiplier: 0.95 },
  { id: 'north-west', label: 'North-West', multiplier: 0.95 },
  { id: 'east', label: 'East', multiplier: 0.85 },
  { id: 'west', label: 'West', multiplier: 0.85 },
];

// ============================================================================
// DATA SOURCES - All citations with URLs
// ============================================================================

export const DATA_SOURCES: DataSource[] = [
  {
    label: 'Adelaide electricity rate',
    value: '35c/kWh average',
    source: 'Canstar Blue SA Energy',
    url: 'https://www.canstarblue.com.au/electricity/sa-energy-rates/',
    date: 'Jan 2026',
  },
  {
    label: 'Daily supply charge',
    value: '$1.00-1.25/day',
    source: 'Money.com.au SA',
    url: 'https://www.money.com.au/energy/sa',
    date: 'Jan 2026',
  },
  {
    label: 'Average annual bill SA',
    value: '$1,827-$2,301',
    source: 'Canstar',
    url: 'https://www.canstar.com.au/energy/electricity-costs-kwh/',
    date: 'Jan 2026',
  },
  {
    label: 'Feed-in tariff range',
    value: '4-12c/kWh',
    source: 'Canstar Best FiT SA',
    url: 'https://www.canstar.com.au/energy/best-solar-feed-in-tariffs-sa/',
    date: 'Dec 2025',
  },
  {
    label: 'Average feed-in tariff',
    value: '5-7c/kWh',
    source: 'Solar Calculator SA',
    url: 'https://solarcalculator.com.au/feed-in-tariffs/sa/',
    date: 'Dec 2025',
  },
  {
    label: '6.6kW system cost',
    value: '$5,500-$7,500',
    source: 'Solar Choice Adelaide',
    url: 'https://www.solarchoice.net.au/blog/solar-power-adelaide-sa-compare-deals/',
    date: '2025',
  },
  {
    label: '10kW system cost',
    value: '$7,500-$10,500',
    source: 'Solar Choice Prices',
    url: 'https://www.solarchoice.net.au/solar-panels/solar-power-system-prices/',
    date: '2025',
  },
  {
    label: '13kW system cost',
    value: '$10,500-$14,000',
    source: 'ADS Solar Adelaide',
    url: 'https://www.adssolar.com.au/solar-panels-adelaide/',
    date: '2025',
  },
  {
    label: 'Tesla Powerwall 3 cost',
    value: '$12,000-$15,000',
    source: 'Solar Choice Tesla',
    url: 'https://www.solarchoice.net.au/products/batteries/tesla-powerwall-review/',
    date: '2025',
  },
  {
    label: 'Federal battery rebate',
    value: 'Up to $372/kWh',
    source: 'Solar Calculator PW3',
    url: 'https://solarcalculator.com.au/battery-storage/tesla-powerwall-3/',
    date: '2025',
  },
  {
    label: 'Adelaide peak sun hours',
    value: '5.0 hours average',
    source: 'Solar Choice',
    url: 'https://www.solarchoice.net.au/blog/solar-power-adelaide-sa-compare-deals/',
    date: '2025',
  },
  {
    label: 'Self-consumption (no battery)',
    value: '30-40%',
    source: 'Industry standard estimate',
    url: '#',
  },
  {
    label: 'Self-consumption (with battery)',
    value: '70-85%',
    source: 'Industry standard estimate',
    url: '#',
  },
  {
    label: 'CO2 offset per kW installed',
    value: '~1.5 tonnes/year',
    source: 'Clean Energy Council',
    url: 'https://www.cleanenergycouncil.org.au/',
    date: '2025',
  },
  {
    label: 'Federal STC rebate',
    value: '~$350-400 per kW',
    source: 'GoSolarQuotes SA Rebate',
    url: 'https://gosolarquotes.com.au/rebate/sa/',
    date: '2025',
  },
];

// Helper to get system option by size
export function getSystemOption(size: number): SystemOption | undefined {
  return SYSTEM_OPTIONS.find((s) => s.size === size);
}

// Helper to get battery option by size
export function getBatteryOption(size: number): BatteryOption | undefined {
  return BATTERY_OPTIONS.find((b) => b.size === size);
}

// Helper to get household option by id
export function getHouseholdOption(id: string): HouseholdOption | undefined {
  return HOUSEHOLD_OPTIONS.find((h) => h.id === id);
}

// Helper to get direction multiplier
export function getDirectionMultiplier(direction: string): number {
  const option = ROOF_DIRECTION_OPTIONS.find((d) => d.id === direction);
  return option?.multiplier ?? 1.0;
}
