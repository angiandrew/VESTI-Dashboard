import React from 'react';
import { Upload, Search, MousePointer, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-5 w-5" />,
    title: "Upload Your Photo",
    description: "Take or upload a photo to create your virtual model"
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Browse Products",
    description: "Shop on your favorite clothing websites"
  },
  {
    icon: <MousePointer className="h-5 w-5" />,
    title: "Select Items",
    description: "Click on any clothing item you want to try"
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "See the Magic",
    description: "Watch as the clothes appear on your photo instantly"
  }
];

export function VideoSteps() {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-4 rounded-lg bg-purple-50"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
            {step.icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{step.title}</h4>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}