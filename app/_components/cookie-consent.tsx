"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage?.getItem?.("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage?.setItem?.("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage?.setItem?.("cookie-consent", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  We use cookies to enhance your experience on our website. By continuing to browse, 
                  you agree to our use of cookies.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-4 py-2 text-sm font-medium text-white bg-royal-blue rounded-lg hover:bg-royal-blue/90"
                >
                  Accept
                </button>
                <button
                  onClick={declineCookies}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
