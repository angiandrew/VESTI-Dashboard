import React from 'react';

const testimonials = [
  {
    quote: "Vesti has completely changed how I shop online. No more guessing if something will fit!",
    author: "Sarah J.",
    role: "Fashion Blogger"
  },
  {
    quote: "The virtual try-on is incredibly accurate. I've saved so much time and money on returns.",
    author: "Michael R.",
    role: "Regular Shopper"
  },
  {
    quote: "This is the future of online shopping. The AR technology is impressive!",
    author: "Emma L.",
    role: "Style Consultant"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of happy shoppers using Vesti
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-50 p-8 rounded-xl">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-purple-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}