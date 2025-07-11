
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import CartSidebar from '@/components/CartSidebar';

const Header = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <>
      <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-artistic rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">G</span>
              </div>
              <span className="font-display font-bold text-xl text-clay-brown">
                Garside Enterprise
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-terracotta transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-terracotta transition-colors">
                Gallery
              </Link>
              <Link to="/blog" className="text-foreground hover:text-terracotta transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-foreground hover:text-terracotta transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 w-64 bg-muted/50"
                />
              </div>
              
              <Button 
                variant="outline" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
