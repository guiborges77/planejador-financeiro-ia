import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Bot, Calculator } from 'lucide-react';

export const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // After 80% of viewport height
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:scale-105 transition-transform group"
          >
            <Brain className="h-6 w-6 text-primary icon-glow group-hover:animate-glow-pulse" />
            <span className="font-bold text-primary font-space hidden sm:block">
              Retire Smart AI
            </span>
          </button>

          {/* Quick Action */}
          <Button 
            variant="ai" 
            size="sm"
            onClick={scrollToCalculator}
            className="shadow-glow"
          >
            <Calculator className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Calcular Aposentadoria</span>
            <span className="sm:hidden">Calcular</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};