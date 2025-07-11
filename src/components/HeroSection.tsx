
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-clay-brown to-terracotta overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-clay-brown/80 to-terracotta/80 z-20"></div>
      
      {/* Video Background Simulation */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('/back.jpg')`
           }}>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Craft Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Artistic Vision
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Premium clay, sculpting tools, and artistic materials for creators who demand excellence. 
            Transform your ideas into masterpieces with Garside Enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button size="lg" className="bg-white text-clay-brown hover:bg-white/90 font-semibold px-8 py-3">
              Explore Products
             </Button>
            <Link to="/process.mp4" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="border-white text-brown hover:bg-white hover:text-clay-brown font-semibold px-8 py-3">
                Watch Our Process
              </Button>
            </Link>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
