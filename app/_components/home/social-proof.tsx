"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "I invested £500 in a League Two striker. Six months later, he signed with a Championship club and my shares tripled in value. Plus I'm earning £15/month in dividends!",
    author: "James T.",
    location: "London",
    rating: 5,
  },
  {
    quote: "As a cricket fan in India, I love being able to invest in young IPL players. It's like fantasy cricket but with real returns!",
    author: "Priya S.",
    location: "Mumbai",
    rating: 5,
  },
  {
    quote: "The paper trading feature let me learn the platform risk-free. Now I'm confidently investing in real athletes and seeing actual returns.",
    author: "Mohammed A.",
    location: "Dubai",
    rating: 5,
  },
];

export default function SocialProof() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl sm:text-5xl font-heading font-bold text-center mb-16 gradient-text"
        >
          Trusted by Investors Worldwide
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map?.((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {Array?.from?.({ length: testimonial?.rating ?? 5 })?.map?.((_, i) => (
                  <Star key={i} className="w-5 h-5 text-royal-gold fill-current" />
                )) ?? null}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial?.quote ?? ""}&quot;
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{testimonial?.author ?? ""}</p>
                <p className="text-gray-600">{testimonial?.location ?? ""}</p>
              </div>
            </motion.div>
          )) ?? null}
        </div>
      </div>
    </section>
  );
}
