"use client";

import { useState } from "react";
import { Coins } from "lucide-react";

export default function DividendCalculator() {
  const [annualSalary, setAnnualSalary] = useState(100000);
  const [sharesOwned, setSharesOwned] = useState(10000);

  const totalShares = 1000000;
  const dividendPercentage = 1;
  const totalAnnualDividends = (annualSalary * dividendPercentage) / 100;
  const dividendPerShare = totalAnnualDividends / totalShares;
  const yourAnnualDividends = dividendPerShare * sharesOwned;
  const yourMonthlyDividends = yourAnnualDividends / 12;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <Coins className="w-8 h-8 text-royal-purple mr-3" />
        <h3 className="text-2xl font-heading font-bold">
          Dividend Calculator
        </h3>
      </div>

      <div className="space-y-6">
        {/* Annual Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Athlete Annual Salary: £{annualSalary?.toLocaleString?.() ?? "0"}
          </label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="5000"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-purple"
          />
        </div>

        {/* Shares Owned */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Shares You Own: {sharesOwned?.toLocaleString?.() ?? "0"}
          </label>
          <input
            type="range"
            min="100"
            max="100000"
            step="100"
            value={sharesOwned}
            onChange={(e) => setSharesOwned(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-purple"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 p-6 bg-white rounded-xl border-2 border-royal-purple/20">
        <h4 className="text-lg font-bold mb-4 text-royal-purple">Your Projected Dividends:</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-700">Total Annual Dividends (1%):</span>
            <span className="font-semibold">£{totalAnnualDividends?.toLocaleString?.() ?? "0"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Dividend Per Share:</span>
            <span className="font-semibold">£{dividendPerShare?.toFixed?.(4) ?? "0.0000"}</span>
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="font-bold">Your Annual Dividends:</span>
            <span className="font-bold text-green-600">£{yourAnnualDividends?.toFixed?.(2) ?? "0.00"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Your Monthly Dividends:</span>
            <span className="font-bold text-green-600">£{yourMonthlyDividends?.toFixed?.(2) ?? "0.00"}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-600">
        ⚠️ Note: Dividends are calculated based on professional contract earnings only. Does not include sponsorships.
      </p>
    </div>
  );
}
