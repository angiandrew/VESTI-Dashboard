import React from 'react';
import { BrandCard } from './BrandCard';
import { FeatureHeader } from '../Features/FeatureHeader';
import { brandData } from './brandData';

export function Brands() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureHeader
          subtitle="Our Partners"
          title="Trusted by Leading Brands"
          description="Join thousands of shoppers using Vesti with their favorite retailers worldwide"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brandData.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            And many more retailers being added every month!
          </p>
          <button className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-purple-200 rounded-full text-purple-600 hover:bg-purple-50 transition-colors group">
            <span className="mr-2">View all supported retailers</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}