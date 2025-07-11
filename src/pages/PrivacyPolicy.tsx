
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream/30">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you shop with Garside Enterprise, we collect information necessary to process your orders and provide you with the best art supply shopping experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Contact information (name, email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely)</li>
                <li>Order history and preferences for art supplies</li>
                <li>Website usage data to improve your shopping experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Process and fulfill your art supply orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Provide customer support for your purchases</li>
                <li>Send newsletters about new products and art techniques (with your consent)</li>
                <li>Improve our product recommendations based on your interests</li>
                <li>Comply with legal requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We never sell your personal information. We only share your data with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Shipping carriers to deliver your art supplies</li>
                <li>Payment processors to handle transactions securely</li>
                <li>Service providers who help us operate our business</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information. All payment information is encrypted and processed through secure channels. We regularly update our security practices to ensure your data remains safe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-clay-brown mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or how we handle your information, please contact us at privacy@garsideenterprise.com or through our contact form.
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

export default PrivacyPolicy;
