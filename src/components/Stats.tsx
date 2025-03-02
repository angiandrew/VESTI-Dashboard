import React from 'react';
import { Users, ShoppingBag, Store } from 'lucide-react';
import { cn } from '../utils/cn';

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: '50K+',
    label: 'Active Users',
    description: 'Trust Vesti for their shopping',
    color: 'from-purple-600 to-pink-600'
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    value: '1M+',
    label: 'Virtual Try-ons',
    description: 'Completed successfully',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: <Store className="h-6 w-6" />,
    value: '500+',
    label: 'Supported Stores',
    description: 'Compatible retailers',
    color: 'from-green-600 to-emerald-600'
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={cn(
                "inline-flex p-4 rounded-2xl bg-white shadow-lg mb-4",
                "transform group-hover:scale-110 transition-all duration-300",
                "bg-gradient-to-br",
                stat.color
              )}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                {stat.label}
              </p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}