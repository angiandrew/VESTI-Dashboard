import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { VideoPlayer } from './VideoPlayer';
import { VideoSteps } from './VideoSteps';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={cn(
        "relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6",
        "transform transition-all duration-300",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
      )}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              How Vesti Works
            </h3>
            <p className="text-gray-600 mt-1">
              Watch how easy it is to try on clothes virtually
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <VideoPlayer />
            </div>
            <div className="md:col-span-2">
              <VideoSteps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}