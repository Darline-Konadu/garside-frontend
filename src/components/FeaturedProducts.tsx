
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const featuredProducts = [
  {
    id: 1,
    name: "Blick talk free white clay",
    price: "$150.00",
    originalPrice: "$180.00",
    image: "/blik.jpg",
    category: "Clay & Materials",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Professional Sculpting Tool Set",
    price: "$220.00",
    image: "/professional.jpg",
    category: "Tools & Equipment",
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: "Artisan Pottery Wheel",
    price: "$450.00",
    image: "/wheel.jpg",
    category: "Equipment",
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "Natural Earthenware Clay",
    price: "$28.99",
    originalPrice: "$32.99",
    image: "/clay.jpg",
    category: "Clay & Materials",
    isNew: false,
    isSale: true
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-clay-brown mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium art supplies, 
            carefully chosen for their quality and artistic potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-sage-green text-white">New</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-terracotta text-white">Sale</Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {product.category}
                </div>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-terracotta transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-xl text-clay-brown">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-terracotta hover:bg-terracotta/70 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-clay-brown text-clay-brown hover:bg-clay-brown hover:text-white" asChild>
            <Link to="/gallery">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
