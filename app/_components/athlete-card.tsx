"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface AthleteCardProps {
  name: string;
  sport: string;
  price: string;
  change: string;
  imageUrl: string;
  index?: number;
}

export default function AthleteCard({ 
  name, 
  sport, 
  price, 
  change, 
  imageUrl, 
  index = 0 
}: AthleteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={imageUrl}
          alt={name ?? "Athlete"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name ?? ""}</h3>
        <p className="text-sm text-gray-600">{sport ?? ""}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-royal-blue">£{price ?? "0.00"}</span>
          <span className="flex items-center text-sm font-medium text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            {change ?? "0%"}
          </span>
        </div>
        <Link
          href="/waitlist"
          className="mt-4 w-full py-2 bg-gradient-to-r from-royal-blue to-royal-purple text-white rounded-lg font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}
