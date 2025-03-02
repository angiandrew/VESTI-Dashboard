import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Install Extension',
    description: 'Add Vesti to Chrome in just one click'
  },
  {
    number: '02',
    title: 'Browse & Shop',
    description: 'Visit your favorite online clothing stores'
  },
  {
    number: '03',
    title: 'Virtual Try-On',
    description: 'Click the Vesti button to see clothes on you'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get started in minutes with these simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <span className="text-5xl font-bold text-purple-200">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}