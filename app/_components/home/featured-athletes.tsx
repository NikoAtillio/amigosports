"use client";

import AthleteCard from "../athlete-card";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const athletes = [
  {
    name: "Marcus Johnson",
    sport: "Football",
    price: "2.45",
    change: "+12.5%",
    imageUrl: "https://cdn.abacus.ai/images/e48ae9ea-f847-4c93-a1dd-748d9a6890ae.png",
  },
  {
    name: "Sophia Martinez",
    sport: "Tennis",
    price: "8.12",
    change: "+8.3%",
    imageUrl: "https://cdn.abacus.ai/images/096f24f4-9712-47d6-a2a3-1622bac2a880.png",
  },
  {
    name: "Jamal Williams",
    sport: "Football",
    price: "1.89",
    change: "+45.2%",
    imageUrl: "https://cdn.abacus.ai/images/e48ae9ea-f847-4c93-a1dd-748d9a6890ae.png",
  },
  {
    name: "Elena Popescu",
    sport: "Football",
    price: "3.67",
    change: "+6.1%",
    imageUrl: "https://cdn.abacus.ai/images/55065de8-6738-4c30-8808-29af0c8a5b56.png",
  },
  {
    name: "Kai Chen",
    sport: "Cricket",
    price: "5.23",
    change: "+15.7%",
    imageUrl: "https://cdn.abacus.ai/images/e4826f18-eca1-44cb-950c-a8e705ddd084.png",
  },
];

export default function FeaturedAthletes() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min((athletes?.length ?? 0) - visibleCount, prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-center mb-4 gradient-text">
          Trending Athletes This Week
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover rising stars and established pros across multiple sports
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-royal-blue" />
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex >= (athletes?.length ?? 0) - visibleCount}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-royal-blue" />
          </button>

          {/* Athletes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {athletes?.slice?.(startIndex, startIndex + visibleCount)?.map?.((athlete, index) => (
              <AthleteCard
                key={index}
                name={athlete?.name ?? ""}
                sport={athlete?.sport ?? ""}
                price={athlete?.price ?? "0.00"}
                change={athlete?.change ?? "0%"}
                imageUrl={athlete?.imageUrl ?? ""}
                index={index}
              />
            )) ?? null}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/waitlist"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Browse All Athletes →
          </Link>
        </div>
      </div>
    </section>
  );
}
