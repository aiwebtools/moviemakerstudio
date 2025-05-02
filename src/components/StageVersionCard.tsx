
import React, { useState } from 'react';
import { ArrowRight, LucideIcon } from "lucide-react";

interface StageVersionCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  badgeText: string;
  BadgeIcon: LucideIcon;
  buttonColor?: string;
  buttonShadow?: string;
  buttonText?: string;
}

const StageVersionCard = ({
  title,
  description,
  features,
  link,
  badgeText,
  BadgeIcon,
  buttonColor = "bg-purple-600 hover:bg-purple-700",
  buttonShadow = "shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6]",
  buttonText = "Explore StageMaster for Performing Arts"
}: StageVersionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-panel p-6 h-full w-full rounded-xl transition-all duration-300 relative overflow-hidden flex flex-col ${isHovered ? "transform scale-[1.02] shadow-neon border-script-accent/50" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "450px" }} // Ensure a minimum height
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <BadgeIcon className="w-3 h-3 mr-1" /> {badgeText}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 flex-grow">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`mt-auto inline-flex items-center justify-center w-full ${buttonColor} text-white font-medium py-3 px-4 rounded-md transition-all duration-300 ${isHovered ? buttonShadow : ""}`}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default StageVersionCard;
