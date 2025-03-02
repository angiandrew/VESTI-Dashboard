import React from 'react';
import { FeatureCard } from './FeatureCard';
import { FeatureHeader } from './FeatureHeader';
import { featureData } from './featureData';

export function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FeatureHeader
          subtitle="Features"
          title="Transform Your Shopping Experience"
          description="Discover why thousands of shoppers choose Vesti for a seamless and confident online shopping experience"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}