import React from 'react';
import { cn } from '../../utils/cn';

interface BrandCardProps {
  name: string;
  logo: string;
  users: number;
  color: string;
}

export function BrandCard({ name, logo, users, color }: BrandCardProps) {
  return (
    <div className={cn(
      "group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500",
      "transform hover:-translate-y-1 hover:scale-105"
    )}>
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        "bg-gradient-to-br",
        color
      )} />
      
      <div className="relative p-8">
        <div className="aspect-square flex items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="w-24 h-24 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
          />
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
            {name}
          </h3>
          <p className="text-sm text-purple-600 group-hover:text-purple-200 transition-colors">
            {users.toLocaleString()}+ users
          </p>
        </div>
      </div>
      
      <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Verified Partner
      </div>
    </div>
  );
}