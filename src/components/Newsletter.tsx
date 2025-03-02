import React, { useState } from 'react';
import { Button } from './ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 bg-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#6b21a8_0%,#4c1d95_100%)] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Vesti
          </h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Get exclusive updates, early access to new features, and shopping tips delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            {status === 'success' && (
              <p className="text-green-300 mt-2">Thanks for subscribing!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}