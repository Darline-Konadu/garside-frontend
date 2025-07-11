
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-cream/30">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our products or need artistic guidance? We're here to help you create your masterpiece.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-clay-brown text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-white h-12 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm mt-8">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-clay-brown mb-6 text-center">
                  About Garside Enterprise
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Founded in 1985, Garside Enterprise has been a trusted partner to artists, 
                  craftspeople, and creative professionals worldwide. We specialize in providing 
                  premium art supplies, clay materials, and sculpting tools that inspire creativity 
                  and enable artistic excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4 text-center">
                  Our commitment to quality and customer satisfaction has made us a preferred 
                  choice for both emerging artists and established professionals who demand the 
                  best materials for their creative work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
