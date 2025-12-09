"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue opacity-95" />
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://cdn.abacus.ai/images/0550859b-4475-417a-a434-9294417df5e4.png"
          alt="Stadium background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-royal-gold"></span>
              </span>
              The Social Sports Network (SSN)
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where Sports <span className="text-royal-gold">Passion</span> Meets Smart Investing
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-gray-100">
              Join the revolution combining social media engagement, sports fandom, and financial markets
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Connect with athletes • Trade shares • Scout talent • Earn dividends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold text-lg hover:bg-royal-gold/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Join the Waitlist
              </Link>
              <button
                onClick={() => alert("Video player would open here")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/0811cc37-126b-48bb-9b9b-c2fc4afa4625.png"
                alt="Amigo Sports App Interface"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
