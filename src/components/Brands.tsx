import React from 'react';
import { cn } from '../utils/cn';

const brands = [
  {
    name: 'Nike',
    logo: '/logos/nike.svg',
    users: 52520,
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Adidas',
    logo: '/logos/adidas.svg',
    users: 21200,
    color: 'from-slate-800 to-slate-900'
  },
  {
    name: 'Zara',
    logo: '/logos/zara.svg',
    users: 10287,
    color: 'from-zinc-800 to-zinc-900'
  },
  {
    name: 'H&M',
    logo: '/logos/hm.svg',
    users: 11475,
    color: 'from-red-600 to-red-700'
  },
  {
    name: 'Uniqlo',
    logo: '/logos/uniqlo.svg',
    users: 43249,
    color: 'from-red-700 to-red-800'
  },
  {
    name: 'ASOS',
    logo: '/logos/asos.svg',
    users: 24692,
    color: 'from-black to-gray-900'
  }
];

export function Brands() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wide uppercase">Our Partners</span>
          <h2 className="mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 inline-block">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of shoppers using Vesti with their favorite retailers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={cn(
                "group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500",
                "transform hover:-translate-y-1 hover:scale-105"
              )}
            >
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                "bg-gradient-to-br",
                brand.color
              )} />
              
              <div className="relative p-8">
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-24 h-24 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-purple-600 group-hover:text-purple-200 transition-colors">
                    {brand.users.toLocaleString()}+ users
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Verified Partner
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            And many more retailers being added every month!
          </p>
          <div className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-purple-200 rounded-full text-purple-600 hover:bg-purple-50 transition-colors">
            <span className="mr-2">View all supported retailers</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}