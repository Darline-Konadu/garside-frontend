import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, getCartCount } = useCart();
  const { toast } = useToast();
  
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    const requiredFields = {
      firstName: 'First name is required',
      lastName: 'Last name is required',
      email: 'Email is required',
      phone: 'Phone number is required',
      address: 'Street address is required',
      city: 'City is required',
      state: 'State is required',
      zipCode: 'ZIP code is required',
      cardName: 'Name on card is required',
      cardNumber: 'Card number is required',
      expiryDate: 'Expiry date is required',
      cvv: 'CVV is required'
    };

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!customerDetails[field as keyof typeof customerDetails].trim()) {
        newErrors[field] = message;
      }
    });

    // Email validation
    if (customerDetails.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (basic)
    if (customerDetails.phone && !/^\+?[\d\s\-\(\)]+$/.test(customerDetails.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // ZIP code validation (basic)
    if (customerDetails.zipCode && !/^\d{5}(-\d{4})?$/.test(customerDetails.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code';
    }

    // Card number validation (basic length check)
    if (customerDetails.cardNumber && customerDetails.cardNumber.replace(/\s/g, '').length < 13) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }

    // Expiry date validation (MM/YY format)
    if (customerDetails.expiryDate && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(customerDetails.expiryDate)) {
      newErrors.expiryDate = 'Please enter date in MM/YY format';
    }

    // CVV validation
    if (customerDetails.cvv && !/^\d{3,4}$/.test(customerDetails.cvv)) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fill in all required fields",
        description: "Check the form for any errors and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation email shortly.",
      });
      setIsProcessing(false);
      navigate('/order-success');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-clay-brown mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some items to your cart before checkout.</p>
            <Button onClick={() => navigate('/gallery')} className="bg-terracotta hover:bg-terracotta/80">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-clay-brown">Checkout</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customer Details Form */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-clay-brown">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={customerDetails.firstName}
                          onChange={handleInputChange}
                          className={errors.firstName ? 'border-red-500' : ''}
                          required
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={customerDetails.lastName}
                          onChange={handleInputChange}
                          className={errors.lastName ? 'border-red-500' : ''}
                          required
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={customerDetails.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'border-red-500' : ''}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={customerDetails.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? 'border-red-500' : ''}
                        required
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-clay-brown">Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={customerDetails.address}
                        onChange={handleInputChange}
                        className={errors.address ? 'border-red-500' : ''}
                        required
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={customerDetails.city}
                          onChange={handleInputChange}
                          className={errors.city ? 'border-red-500' : ''}
                          required
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={customerDetails.state}
                          onChange={handleInputChange}
                          className={errors.state ? 'border-red-500' : ''}
                          required
                        />
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={customerDetails.zipCode}
                        onChange={handleInputChange}
                        className={errors.zipCode ? 'border-red-500' : ''}
                        required
                      />
                      {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-clay-brown flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={customerDetails.cardName}
                        onChange={handleInputChange}
                        className={errors.cardName ? 'border-red-500' : ''}
                        required
                      />
                      {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={customerDetails.cardNumber}
                        onChange={handleInputChange}
                        className={errors.cardNumber ? 'border-red-500' : ''}
                        required
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={customerDetails.expiryDate}
                          onChange={handleInputChange}
                          className={errors.expiryDate ? 'border-red-500' : ''}
                          required
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={customerDetails.cvv}
                          onChange={handleInputChange}
                          className={errors.cvv ? 'border-red-500' : ''}
                          required
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      Your payment information is secure and encrypted
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-clay-brown">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium text-sm">{item.name}</p>
                              <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                          </div>
                          <p className="font-semibold text-clay-brown">{item.price}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between">
                        <span>Subtotal ({getCartCount()} items)</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>$9.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-clay-brown">
                            ${(getCartTotal() + 9.99 + getCartTotal() * 0.08).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-terracotta hover:bg-terracotta/80 text-white"
                      size="lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
