import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Card({ className, children, onClick }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-lg",
        "hover:shadow-xl transition-all duration-300",
        "transform hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}