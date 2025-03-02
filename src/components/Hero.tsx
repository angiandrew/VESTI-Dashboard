import React from 'react';
import { Chrome, ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/Button';
import { VideoModal } from './TutorialVideo/VideoModal';
import { useModal } from '../hooks/useModal';

export function Hero() {
  const { isOpen, open, close } = useModal();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced animated background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        
        <div className="text-center space-y-8 relative">
          <div className="animate-fade-in-up">
            {/* Enhanced badge design */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="font-medium">New: AI-powered size recommendations</span>
            </div>

            {/* Enhanced typography and gradient */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Try Before You Buy,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 mt-2 animate-gradient">
                Virtually Perfect
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience clothes shopping like never before. Try on outfits virtually in real-time,
              right from your browser with AI-powered precision.
            </p>
          </div>
          
          {/* Enhanced button group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Chrome className="h-5 w-5 mr-2" />
              <span>Add to Chrome - It's Free</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={open}
              className="w-full sm:w-auto group backdrop-blur-sm bg-white/80"
            >
              <Play className="h-5 w-5 mr-2 transform group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced preview image */}
          <div className="mt-16 relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80"
                alt="Virtual Try-On Demo"
                className="w-full transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-medium">Try clothes on your photo in real-time</p>
                  <p className="text-sm text-purple-200 mt-2">Powered by advanced AR technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isOpen} onClose={close} />
    </section>
  );
}