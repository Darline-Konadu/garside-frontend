import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const emailParams = {
        email: email, // must match {{email}} in template
      };

      await emailjs.send(
        'service_gchkwy9',
        'template_j8da8ii',
        emailParams,
        'BTItwm6C67Pq-bkX8'
      );

      setMessage('Thank you for subscribing!');
    } catch (error) {
      console.error('EmailJS error:', error);
      setMessage('Something went wrong. Please try again.');
    }

    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="font-display text-4xl font-bold text-clay-brown mb-4">
              Stay Inspired
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of artists and creators. Get exclusive tips, 
              product drops, and artistic inspiration delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="bg-terracotta hover:bg-terracotta/70 text-white px-8 h-12 transition-all duration-300 hover:scale-105 hover:text-lg hover:font-semibold"
              >
                Subscribe
              </Button>
            </form>

            {message && (
              <p className="text-base mt-4 font-medium text-green-700 transition-all">
                {message}
              </p>
            )}

            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
