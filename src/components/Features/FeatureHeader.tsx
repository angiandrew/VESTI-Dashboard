import React from 'react';

interface FeatureHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export function FeatureHeader({ title, subtitle, description }: FeatureHeaderProps) {
  return (
    <div className="text-center mb-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl" />
      
      <div className="relative">
        <span className="inline-block text-purple-600 font-semibold tracking-wide uppercase bg-purple-50 px-4 py-2 rounded-full mb-4">
          {subtitle}
        </span>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          {title}
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}