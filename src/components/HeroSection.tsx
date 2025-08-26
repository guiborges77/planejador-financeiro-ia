import { Button } from '@/components/ui/button';
import { Brain, Bot, Sparkles, Zap, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-finance.jpg';

export const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-neural animate-neural-flow opacity-20"></div>
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-8 w-8 text-primary animate-ai-pulse" />
                <span className="text-primary font-semibold">Planejamento com IA</span>
                <Sparkles className="h-5 w-5 text-accent-ai" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sua
                <span className="block bg-gradient-ai bg-clip-text text-transparent">
                  Aposentadoria
                </span>
                Inteligente
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nossa IA analisa cenários complexos e revela como seus investimentos 
                podem crescer exponencialmente. Planeje com inteligência artificial 
                e tome decisões financeiras baseadas em dados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-ai hover:shadow-ai-glow transition-all duration-300 animate-ai-pulse"
                onClick={scrollToCalculator}
              >
                <Bot className="h-5 w-5 mr-2" />
                Iniciar Análise IA
              </Button>
              <Button size="lg" variant="outline" className="hover:shadow-glow transition-all duration-300">
                <Brain className="h-5 w-5 mr-2" />
                Como Funciona
              </Button>
            </div>

            {/* AI Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                  <Zap className="h-5 w-5" />
                  10.5%
                </div>
                <div className="text-sm text-muted-foreground">Taxa otimizada IA</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-secondary flex items-center justify-center gap-1">
                  <Bot className="h-5 w-5" />
                  30 anos
                </div>
                <div className="text-sm text-muted-foreground">Análise preditiva</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                  <Sparkles className="h-5 w-5" />
                  5.2x
                </div>
                <div className="text-sm text-muted-foreground">Multiplicação IA</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-ai-glow">
              <img 
                src={heroImage} 
                alt="Planejamento de aposentadoria com IA"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-ai opacity-10"></div>
            </div>
            
            {/* Floating AI Cards */}
            <div className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-card border animate-ai-pulse">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">IA Calculando</div>
                  <div className="text-xs text-muted-foreground">Meta: R$ 1M</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card border animate-ai-pulse">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent-ai" />
                <div>
                  <div className="font-semibold text-sm">+847%</div>
                  <div className="text-xs text-muted-foreground">Crescimento IA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};