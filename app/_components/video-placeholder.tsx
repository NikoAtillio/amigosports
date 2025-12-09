"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface VideoPlaceholderProps {
  thumbnailUrl: string;
  title: string;
  description?: string;
}

export default function VideoPlaceholder({ 
  thumbnailUrl, 
  title, 
  description 
}: VideoPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real implementation, this would open a video modal or player
    alert("Video player would open here. This is a placeholder for demonstration.");
    setIsPlaying(false);
  };

  return (
    <div className="relative group cursor-pointer" onClick={handlePlay}>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={thumbnailUrl}
          alt={title ?? "Video thumbnail"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-royal-blue ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      
      {description ? (
        <div className="mt-4">
          <h3 className="font-semibold text-lg">{title ?? ""}</h3>
          <p className="text-sm text-gray-600 mt-1">{description ?? ""}</p>
        </div>
      ) : null}
    </div>
  );
}
