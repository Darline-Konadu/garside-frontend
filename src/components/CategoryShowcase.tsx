
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: "Clay & Materials",
    description: "Premium clays and raw materials for every project",
    image: "/blik.jpg", // Place your image in public/images/clay-materials.jpg
    productCount: "2+ products"
  },
  {
    id: 2,
    name: "Sculpting Tools",
    description: "Professional tools for precision and creativity",
    image: "/sculpt.jpg",
    productCount: "3+ products"
  },
  {
    id: 3,
    name: "Pottery Equipment",
    description: "Wheels, kilns, and professional equipment",
    image: "/pot.jpg",
    productCount: "2+ products"
  },
  {
    id: 4,
    name: "Glazes & Finishes",
    description: "Beautiful glazes and finishing materials",
    image: "/glaze.jpg",
    productCount: "3+ products"
  }
];



const CategoryShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-clay-brown mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need with our carefully organized categories, 
            from basic materials to professional equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/gallery?category=${encodeURIComponent(category.name)}`}
            >
              <Card 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-yellow-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-2">
                      {category.description}
                    </p>
                    <span className="text-xs text-yellow-300 font-medium">
                      {category.productCount}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
