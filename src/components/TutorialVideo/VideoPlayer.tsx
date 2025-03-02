import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Simulate video progress with steps
  const videoSteps = [
    { time: 0, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" },
    { time: 5, image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80" },
    { time: 10, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
    { time: 15, image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=800&q=80" },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate video progress
      let step = currentStep;
      const interval = setInterval(() => {
        step = (step % 4) + 1;
        setCurrentStep(step);
      }, 3000);
      return () => clearInterval(interval);
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
      <img
        src={videoSteps[currentStep - 1].image}
        alt={`Step ${currentStep}`}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 text-white" />
            )}
          </button>
          
          <div className="flex-1 mx-4">
            <div className="h-1 bg-white/20 rounded-full">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
          
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-white" />
            ) : (
              <Volume2 className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}