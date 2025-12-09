"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Platform", href: "/platform" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "For Investors", href: "/for-investors" },
  { name: "For Athletes", href: "/for-athletes" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="https://cdn.abacus.ai/images/2ff71fb5-fcec-4b05-a5a9-12ec3806006f.png"
                  alt="Amigo Sports"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-xl font-bold bg-gradient-to-r from-royal-blue to-royal-purple bg-clip-text text-transparent">
                Amigo Sports
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation?.map?.((item) => (
              <Link
                key={item?.name ?? ""}
                href={item?.href ?? "/"}
                className="text-sm font-medium text-gray-700 hover:text-royal-blue transition-colors"
              >
                {item?.name ?? ""}
              </Link>
            )) ?? null}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/waitlist"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-royal-blue to-royal-purple text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Join Waitlist
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-royal-blue hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation?.map?.((item) => (
                <Link
                  key={item?.name ?? ""}
                  href={item?.href ?? "/"}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-royal-blue hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item?.name ?? ""}
                </Link>
              )) ?? null}
              <Link
                href="/waitlist"
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-royal-blue to-royal-purple text-white text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
