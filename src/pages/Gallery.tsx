
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: "Premium Porcelain Clay",
    price: "$99.99",
    originalPrice: "$119.99",
    image: "/porc.jpg",
    category: "Clay & Materials",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Professional Sculpting Tool Set",
    price: "$139.99",
    image: "sculpt.jpg",
    category: "Tools & Equipment",
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: "Artisan Pottery Wheel",
    price: "$349.99",
    image: "/arti.jpg",
    category: "Equipment",
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "Natural Earthenware Clay",
    price: "$18.99",
    originalPrice: "$22.99",
    image: "/earth.jpg",
    category: "Clay & Materials",
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: "Ceramic Glazing Kit",
    price: "$165.99",
    image: "/kit.jpg",
    category: "Glazes & Finishes",
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: "Clay Modeling Tools",
    price: "$132.99",
    image: "/mod.jpg",
    category: "Tools & Equipment",
    isNew: false,
    isSale: false
  },
  {
    id: 7,
    name: "Clay Slabs",
    price: "$52.99",
    image: "/slab.jpg",
    category: "Clay & Materials",
    isNew: false,
    isSale: false
  },
  {
    id: 7,
    name: " Pastel Set Kit",
    price: "$389.99",
    image: "/paste.jpg",
    category: "Tools & Equipment",
    isNew: false,
    isSale: false
  },
  {
  id: 8,
    name: " Bonsai Wire",
    price: "$20.00",
    image: "/bonsaiwire.jpg",
    category: "Tools & Equipment",
    isNew: false,
    isSale: false
  },
  {
    id: 9,
    name: " Mayco lead- free jungle gems glaze",
    price: "$50.00",
    image: "/leadglaze.jpg",
    category: "Glazes & Finishes",
    isNew: true,
    isSale: false
  },
  {
    id: 10,
    name: "Mayco Speckled stroke and coat glazes",
    price: "$200.00",
    image: "/strokeglaze.jpg",
    category: "Glazes & Finishes",
    isNew: false,
    isSale: true
  }

];

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'all');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
                         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleAddToCart = (product: typeof products[0]) => {
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
    <div className="min-h-screen bg-cream/30">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-clay-brown to-terracotta">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Product Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our complete collection of premium art supplies and materials
            {selectedCategory !== 'all' && (
              <span className="block mt-2 text-lg">
                Showing: {selectedCategory}
              </span>
            )}
            {searchQuery && (
              <span className="block mt-2 text-lg">
                Search results for: "{searchQuery}"
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-clay-brown">Filter by:</span>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Clay & Materials">Clay & Materials</SelectItem>
                    <SelectItem value="Tools & Equipment">Tools & Equipment</SelectItem>
                    <SelectItem value="Equipment">Equipment</SelectItem>
                    <SelectItem value="Glazes & Finishes">Glazes & Finishes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-semibold text-clay-brown">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                {searchQuery ? `No products found for "${searchQuery}"` : "No products found in this category."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
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
                      className="w-full bg-terracotta hover:bg-terracotta/80 hover:scale-[1.02] text-white transition-all duration-200 hover:shadow-lg"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
