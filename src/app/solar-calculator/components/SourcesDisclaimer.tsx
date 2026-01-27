'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Info, AlertCircle } from 'lucide-react';
import { DATA_SOURCES } from '../utils/constants';

export function SourcesDisclaimer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 space-y-4">
      {/* Disclaimer */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Disclaimer:</strong> This calculator provides estimates only and should not
              be considered a formal quote. Actual savings depend on factors including roof
              orientation, shading, energy usage patterns, electricity retailer, and system
              configuration.
            </p>
            <p>
              All figures are based on current Adelaide electricity prices and feed-in tariffs,
              which are subject to change. For an accurate assessment, request a free site
              inspection from our team.
            </p>
            <p className="text-gray-500">
              Pratt Electrical Group | CEC Accredited Installer | SA Electrical License
            </p>
          </div>
        </div>
      </div>

      {/* Data Sources - Collapsible */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Data Sources & Methodology
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-white space-y-4">
                <p className="text-sm text-gray-600">
                  This calculator uses the following Adelaide-specific data:
                </p>

                {/* Sources Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">
                          Statistic
                        </th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">
                          Value
                        </th>
                        <th className="text-left py-2 font-medium text-gray-700">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {DATA_SOURCES.map((source, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-2 pr-4 text-gray-600">{source.label}</td>
                          <td className="py-2 pr-4 font-medium text-gray-800">
                            {source.value}
                          </td>
                          <td className="py-2">
                            {source.url !== '#' ? (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:underline"
                              >
                                {source.source}
                                {source.date && (
                                  <span className="text-gray-400">, {source.date}</span>
                                )}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="text-gray-500">{source.source}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-2">
                  <p>
                    <strong>Calculation methodology:</strong> Self-consumption rates are based on
                    typical household usage patterns. Without a battery, approximately 30-40% of
                    generated solar is used directly. With a battery, this increases to 70-85%.
                  </p>
                  <p>
                    Actual savings depend on individual circumstances including roof orientation,
                    shading, energy usage patterns, and electricity plan. Electricity prices
                    typically increase 3-5% annually, meaning real savings are often higher than
                    estimated.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SourcesDisclaimer;
