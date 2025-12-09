"use client";

import StatsCounter from "../stats-counter";
import { Users, TrendingUp, DollarSign, Globe, Star, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Investors", value: 10247, suffix: "+" },
  { icon: Award, label: "Athletes", value: 152, suffix: "+" },
  { icon: DollarSign, label: "Invested", value: 2.5, suffix: "M+", prefix: "£" },
  { icon: Globe, label: "Countries", value: 18, suffix: "+" },
  { icon: TrendingUp, label: "Dividends Paid", value: 127, suffix: "K+", prefix: "£" },
  { icon: Star, label: "Average Rating", value: 4.8, suffix: "★", decimals: 1 },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-royal-blue to-royal-purple text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats?.map?.((stat, index) => {
            const Icon = stat?.icon;
            return (
              <div key={index} className="text-center">
                {Icon ? (
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                ) : null}
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  <StatsCounter
                    end={stat?.value ?? 0}
                    prefix={stat?.prefix ?? ""}
                    suffix={stat?.suffix ?? ""}
                    decimals={stat?.decimals ?? 0}
                  />
                </div>
                <p className="text-sm text-gray-200">{stat?.label ?? ""}</p>
              </div>
            );
          }) ?? null}
        </div>
      </div>
    </section>
  );
}
