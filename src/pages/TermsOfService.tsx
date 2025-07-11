
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-cream/30">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our art supply services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Garside Enterprise's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Product Information</h2>
              <p className="text-muted-foreground mb-4">
                We strive to provide accurate descriptions and images of our art supplies. However:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Colors may vary due to monitor settings and lighting conditions</li>
                <li>Product specifications are provided by manufacturers and may change</li>
                <li>We reserve the right to correct errors in product information</li>
                <li>Availability is subject to change without notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Orders and Payment</h2>
              <p className="text-muted-foreground mb-4">
                When you place an order with us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You agree to provide accurate billing and shipping information</li>
                <li>Payment is required at the time of order placement</li>
                <li>We reserve the right to cancel orders for any reason</li>
                <li>Prices are subject to change without notice</li>
                <li>You are responsible for all taxes and fees associated with your order</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground mb-4">
                For art supply deliveries:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Delivery times are estimates and may vary</li>
                <li>Risk of loss transfers to you upon delivery</li>
                <li>You must inspect items upon delivery and report damage within 48 hours</li>
                <li>Special handling may be required for certain art materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Returns and Exchanges</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be satisfied with your art supplies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Returns accepted within 30 days of purchase</li>
                <li>Items must be in original, unused condition</li>
                <li>Custom-mixed paints and opened materials cannot be returned</li>
                <li>Return shipping costs are the customer's responsibility unless the item is defective</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Safety and Proper Use</h2>
              <p className="text-muted-foreground mb-4">
                Art materials require proper handling:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Always read and follow manufacturer safety instructions</li>
                <li>Use appropriate ventilation when working with paints and solvents</li>
                <li>Keep materials away from children unless specifically designed for them</li>
                <li>Dispose of materials according to local regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Garside Enterprise's liability is limited to the purchase price of the products. We are not responsible for indirect, incidental, or consequential damages arising from the use of our art supplies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us through our website's contact form or email us at terms@garsideenterprise.com.
              </p>
            </div>

            <div className="text-sm text-muted-foreground pt-4 border-t">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
