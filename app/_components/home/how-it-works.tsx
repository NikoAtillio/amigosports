"use client";

import { Search, CreditCard, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const steps = [
  {
    icon: Search,
    title: "Browse Athletes",
    description: "Discover rising stars and established pros across football, cricket, tennis and more. Filter by sport, position, price, and performance metrics.",
    imageUrl: "https://cdn.abacus.ai/images/92bc7c73-58f8-4191-a9c0-46d958442eeb.png",
  },
  {
    icon: CreditCard,
    title: "Buy Shares",
    description: "Purchase shares in IPOs or trade on the secondary market. Start with paper trading (£10K virtual) or invest real money. Trade 24/7 from anywhere.",
    imageUrl: "https://cdn.abacus.ai/images/0811cc37-126b-48bb-9b9b-c2fc4afa4625.png",
  },
  {
    icon: TrendingUp,
    title: "Earn Returns",
    description: "Receive monthly dividends from 1% of athlete's pro earnings. Watch your shares appreciate as athletes grow. Sell anytime for profit.",
    imageUrl: "https://cdn.abacus.ai/images/20a35c8a-2eaa-47c1-a8ec-5c506d6c7858.png",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl sm:text-5xl font-heading font-bold text-center mb-16 gradient-text"
        >
          How Amigo Sports Works
        </motion.h2>

        <div className="space-y-20">
          {steps?.map?.((step, index) => {
            const Icon = step?.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}
              >
                <div className={!isEven ? "md:col-start-2" : ""}>
                  {Icon ? (
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-royal-blue to-royal-purple rounded-full mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  ) : null}
                  <div className="inline-block bg-royal-gold text-royal-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-4">{step?.title ?? ""}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{step?.description ?? ""}</p>
                </div>

                <div className={!isEven ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={step?.imageUrl ?? ""}
                      alt={step?.title ?? ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          }) ?? null}
        </div>

        <div className="text-center mt-16">
          <a
            href="/how-it-works"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Learn More About Trading →
          </a>
        </div>
      </div>
    </section>
  );
}
