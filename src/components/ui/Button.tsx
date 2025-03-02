import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
        'transform hover:scale-105 active:scale-95',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500',
        variant === 'primary' && [
          'bg-gradient-to-r from-purple-600 to-pink-600',
          'text-white shadow-lg',
          'hover:from-purple-700 hover:to-pink-700',
          'hover:shadow-purple-500/25',
        ],
        variant === 'secondary' && [
          'bg-white/80 backdrop-blur-sm',
          'text-purple-700 border border-purple-200',
          'hover:bg-purple-50 hover:border-purple-300',
          'shadow-sm hover:shadow-md',
        ],
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}