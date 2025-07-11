
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { CheckCircle, Package, Mail } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { items } = useCart();

  // Clear cart after successful order (optional)
  useEffect(() => {
    // You can implement cart clearing logic here if needed
  }, []);

  return (
    <div className="min-h-screen bg-cream/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-clay-brown mb-4">Order Placed Successfully!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="w-8 h-8 text-terracotta mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Confirmation Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Check your email for order details
                  </p>
                </div>
                <div>
                  <Package className="w-8 h-8 text-terracotta mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order is being prepared
                  </p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-terracotta mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive tracking information soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/gallery')}
              className="bg-terracotta hover:bg-terracotta/80 text-white"
              size="lg"
            >
              Continue Shopping
            </Button>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="ml-4"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
