
import React, { useState } from 'react';
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface VersionCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  badgeText: string;
  BadgeIcon: LucideIcon;
  badgeColor?: string;
  buttonText?: string;
  buttonColor?: string;
  buttonShadow?: string;
}

const VersionCard = ({
  title,
  description,
  features,
  link,
  badgeText,
  BadgeIcon,
  badgeColor = "bg-script-accent/20 text-script-accent",
  buttonText,
  buttonColor = "bg-script-accent hover:bg-script-accent/90",
  buttonShadow = "shadow-neon"
}: VersionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-panel p-8 rounded-xl transition-all duration-300 relative overflow-hidden ${isHovered ? "transform scale-[1.02] shadow-neon border-script-accent/50" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-script-accent/20 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className={`${badgeColor} px-3 py-1 rounded-full text-xs font-medium flex items-center`}>
            <BadgeIcon className="w-3 h-3 mr-1" /> {badgeText}
          </span>
        </div>
        
        <p className="text-gray-300 mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-script-accent mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-flex items-center justify-center w-full ${buttonColor} text-white font-medium py-3 px-6 rounded-md transition-all duration-300 ${isHovered ? buttonShadow : ""}`}
        >
          {buttonText || `Select ${title}`}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default VersionCard;
