"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const mediaLogos = [
  { name: "BBC", width: 80 },
  { name: "Sky Sports", width: 120 },
  { name: "Financial Times", width: 140 },
  { name: "TechCrunch", width: 140 },
  { name: "Forbes", width: 100 },
];

export default function MediaMentions() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
        >
          As Featured In
        </motion.h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {mediaLogos?.map?.((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-gray-400 font-bold text-xl md:text-2xl hover:text-royal-blue transition-colors duration-300"
            >
              {logo?.name ?? ""}
            </motion.div>
          )) ?? null}
        </div>
      </div>
    </section>
  );
}
