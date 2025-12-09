"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function ROICalculator() {
  const [investment, setInvestment] = useState(1000);
  const [sharePrice, setSharePrice] = useState(2.5);
  const [currentSalary, setCurrentSalary] = useState(50000);
  const [salaryGrowth, setSalaryGrowth] = useState(200);
  const [holdingPeriod, setHoldingPeriod] = useState(5);

  const shares = Math.floor(investment / sharePrice);
  const futureSalary = currentSalary * (1 + salaryGrowth / 100);
  const totalDividends = (futureSalary * 0.01 * holdingPeriod * shares) / 1000000;
  const expectedPriceIncrease = (salaryGrowth / 100) * sharePrice * holdingPeriod;
  const capitalGain = shares * expectedPriceIncrease;
  const totalReturn = totalDividends + capitalGain;
  const roi = ((totalReturn / investment) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-royal-blue mr-3" />
        <h3 className="text-2xl font-heading font-bold">
          Calculate Your Potential Returns
        </h3>
      </div>

      <div className="space-y-6">
        {/* Initial Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Initial Investment: £{investment?.toLocaleString?.() ?? "0"}
          </label>
          <input
            type="range"
            min="10"
            max="10000"
            step="10"
            value={investment}
            onChange={(e) => setInvestment(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-blue"
          />
        </div>

        {/* Share Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share Price: £{sharePrice?.toFixed?.(2) ?? "0.00"}
          </label>
          <input
            type="range"
            min="0.50"
            max="20"
            step="0.10"
            value={sharePrice}
            onChange={(e) => setSharePrice(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-blue"
          />
        </div>

        {/* Current Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Athlete Current Salary: £{currentSalary?.toLocaleString?.() ?? "0"}
          </label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={currentSalary}
            onChange={(e) => setCurrentSalary(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-blue"
          />
        </div>

        {/* Salary Growth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Salary Growth: {salaryGrowth}%
          </label>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={salaryGrowth}
            onChange={(e) => setSalaryGrowth(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-blue"
          />
        </div>

        {/* Holding Period */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Holding Period: {holdingPeriod} years
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={holdingPeriod}
            onChange={(e) => setHoldingPeriod(Number(e?.target?.value ?? 0))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-royal-blue"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 p-6 bg-white rounded-xl border-2 border-royal-blue/20">
        <h4 className="text-lg font-bold mb-4 text-royal-blue">Your Projected Returns:</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-700">Shares Owned:</span>
            <span className="font-semibold">{shares?.toLocaleString?.() ?? "0"} shares</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Total Dividends:</span>
            <span className="font-semibold">£{totalDividends?.toFixed?.(0)?.replace?.(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "0"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Capital Appreciation:</span>
            <span className="font-semibold">£{capitalGain?.toFixed?.(0)?.replace?.(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "0"}</span>
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="font-bold">Total Return:</span>
            <span className="font-bold text-green-600">£{totalReturn?.toFixed?.(0)?.replace?.(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "0"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">ROI:</span>
            <span className="font-bold text-green-600">{roi?.toFixed?.(1) ?? "0"}%</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-600">
        ⚠️ Disclaimer: These are hypothetical projections. Actual returns may vary. This is not financial advice.
      </p>
    </div>
  );
}
