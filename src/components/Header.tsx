import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold text-gray-900">Vesti</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Add to Chrome
          </button>
        </div>
      </nav>
    </header>
  );
}