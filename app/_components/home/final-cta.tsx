"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FinalCTA() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue via-royal-purple to-royal-blue" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl sm:text-5xl font-heading font-bold mb-6"
        >
          Ready to Invest in the Next Superstar?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 text-gray-100"
        >
          Join 10,000+ investors on the waitlist and get early access + £100 bonus paper trading credits
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold text-lg hover:bg-royal-gold/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Join the Waitlist
          </Link>
          <p className="mt-4 text-sm text-gray-200">
            No credit card required • Free to join
          </p>
        </motion.div>
      </div>
    </section>
  );
}
