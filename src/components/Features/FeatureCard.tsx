import React from 'react';
import { cn } from '../../utils/cn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6",
          "bg-gradient-to-br",
          color,
          "transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
        )}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
          {description}
        </p>
        
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center text-purple-600 font-medium">
            Learn more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}