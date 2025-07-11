
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, Clock, Package, MapPin } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-cream/30">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Shipping Information
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fast, reliable delivery of your art supplies right to your door.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4">
                <Truck className="h-12 w-12 text-terracotta mx-auto mb-2" />
                <h3 className="font-semibold text-clay-brown">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $75</p>
              </div>
              <div className="text-center p-4">
                <Clock className="h-12 w-12 text-terracotta mx-auto mb-2" />
                <h3 className="font-semibold text-clay-brown">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">Same day processing</p>
              </div>
              <div className="text-center p-4">
                <Package className="h-12 w-12 text-terracotta mx-auto mb-2" />
                <h3 className="font-semibold text-clay-brown">Secure Packaging</h3>
                <p className="text-sm text-muted-foreground">Art supplies protected</p>
              </div>
              <div className="text-center p-4">
                <MapPin className="h-12 w-12 text-terracotta mx-auto mb-2" />
                <h3 className="font-semibold text-clay-brown">Tracking</h3>
                <p className="text-sm text-muted-foreground">Real-time updates</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Shipping Options</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Standard Shipping (5-7 Business Days)</h3>
                  <p className="text-muted-foreground mb-2">Perfect for regular art supply orders</p>
                  <p className="font-medium">$8.99 (FREE on orders over $75)</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Express Shipping (2-3 Business Days)</h3>
                  <p className="text-muted-foreground mb-2">When you need your art supplies quickly</p>
                  <p className="font-medium">$15.99</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">Overnight Shipping (1 Business Day)</h3>
                  <p className="text-muted-foreground mb-2">For urgent art projects and deadlines</p>
                  <p className="font-medium">$29.99</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Special Handling</h2>
              <p className="text-muted-foreground mb-4">
                Certain art supplies require special handling to ensure they arrive in perfect condition:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Liquid Materials:</strong> Paints, glazes, and solvents are shipped with extra padding and leak-proof packaging</li>
                <li><strong>Fragile Items:</strong> Ceramics, glass, and delicate tools are wrapped individually with bubble wrap</li>
                <li><strong>Large Equipment:</strong> Pottery wheels and kilns may require freight shipping (contact us for quote)</li>
                <li><strong>Hazardous Materials:</strong> Some solvents and chemicals may have shipping restrictions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Processing Time</h2>
              <p className="text-muted-foreground mb-4">
                We process art supply orders quickly to get your materials to you as soon as possible:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Orders placed before 2 PM EST ship the same day</li>
                <li>Orders placed after 2 PM EST ship the next business day</li>
                <li>Custom color mixing may add 1-2 business days</li>
                <li>Back-ordered items will ship separately when available</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">International Shipping</h2>
              <p className="text-muted-foreground mb-4">
                We ship art supplies worldwide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>International shipping rates calculated at checkout</li>
                <li>Delivery time: 7-21 business days depending on location</li>
                <li>Customs duties and taxes are the responsibility of the recipient</li>
                <li>Some art materials may be restricted in certain countries</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Order Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Stay updated on your art supply delivery:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Tracking information sent via email once your order ships</li>
                <li>Real-time tracking updates available on carrier websites</li>
                <li>Email notifications for delivery attempts and completed deliveries</li>
                <li>Contact us if you haven't received tracking information within 24 hours</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Delivery Issues</h2>
              <p className="text-muted-foreground mb-4">
                If there are any issues with your art supply delivery:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Contact us immediately if items are damaged or missing</li>
                <li>Keep all packaging materials for damage claims</li>
                <li>We'll work with carriers to resolve delivery issues quickly</li>
                <li>Replacement items can be rushed if needed for urgent projects</li>
              </ul>
            </div>

            <div className="bg-terracotta/10 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Need Help?</h2>
              <p className="text-muted-foreground">
                Have questions about shipping your art supplies? Our customer service team is here to help! 
                Contact us through our website or email shipping@garsideenterprise.com for assistance with your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
