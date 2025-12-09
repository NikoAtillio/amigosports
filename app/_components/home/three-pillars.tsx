"use client";

import { Users, TrendingUp, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const pillars = [
  {
    icon: Users,
    title: "Social Sports Community",
    description: "Join The Social Sports Network (SSN) - engage with athletes, fans, and investors in a vibrant community where sports passion meets opportunity",
    color: "from-royal-blue to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Trade Athlete Shares",
    description: "Buy, sell, and trade fractional shares of athletes' future earnings. Smart contract-secured investments with dividend payments and capital appreciation",
    color: "from-royal-purple to-purple-600",
  },
  {
    icon: Search,
    title: "Scout Rising Talent",
    description: "Discover and invest early in the next generation of sports stars. Be the first to identify breakthrough talent before they become legends",
    color: "from-royal-gold to-orange-600",
  },
];

export default function ThreePillars() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-royal-purple font-semibold text-sm uppercase tracking-wide mb-3">
            The Future of Sports Investing
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
            Three Pillars of Amigo Sports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where social media engagement meets financial markets and sports fandom - 
            creating a revolutionary platform that benefits athletes, fans, and investors alike
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars?.map?.((pillar, index) => {
            const Icon = pillar?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                {Icon ? (
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pillar?.color ?? ""} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                ) : null}
                <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-royal-blue to-royal-purple bg-clip-text text-transparent">
                  {pillar?.title ?? ""}
                </h3>
                <p className="text-gray-700 leading-relaxed">{pillar?.description ?? ""}</p>
              </motion.div>
            );
          }) ?? null}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/platform"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore the Platform
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
