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
    <section className="relative bg-gradient-hero overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-neural animate-neural-flow opacity-20"></div>
      
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-ai-pulse icon-glow" />
                <span className="text-primary font-semibold text-sm sm:text-base">Planejamento com IA</span>
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent-ai icon-glow animate-float" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight font-space">
                Sua
                <span className="block text-gradient animate-text-glow">
                  Aposentadoria
                </span>
                Inteligente
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Nossa IA analisa cenários complexos e revela como seus investimentos 
                podem crescer exponencialmente. Planeje com inteligência artificial 
                e tome decisões financeiras baseadas em dados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button 
                size="lg" 
                variant="ai"
                className="animate-float hover:scale-105 transition-all duration-300 shadow-glow"
                onClick={scrollToCalculator}
              >
                <Bot className="h-5 w-5 mr-2" />
                Iniciar Análise IA
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-effect hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <Brain className="h-5 w-5 mr-2" />
                Como Funciona
              </Button>
            </div>

            {/* AI Stats - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-border">
              <div className="text-center sm:text-left group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-card/50">
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center sm:justify-start gap-2">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 icon-glow" />
                  10.5%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Taxa otimizada IA</div>
              </div>
              <div className="text-center sm:text-left group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-card/50">
                <div className="text-xl sm:text-2xl font-bold text-secondary flex items-center justify-center sm:justify-start gap-2">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 icon-glow" />
                  30 anos
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Análise preditiva</div>
              </div>
              <div className="text-center sm:text-left group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-card/50">
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center sm:justify-start gap-2">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 icon-glow animate-float" />
                  5.2x
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Multiplicação IA</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in order-first lg:order-last">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-ai-glow hover:shadow-glow transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Planejamento de aposentadoria com IA"
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-ai opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating AI Cards - Responsive positioning */}
            <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 bg-card/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-card border animate-ai-pulse hover:scale-110 transition-all duration-300">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 lg:h-5 lg:w-5 text-primary icon-glow" />
                <div>
                  <div className="font-semibold text-xs lg:text-sm">IA Calculando</div>
                  <div className="text-[10px] lg:text-xs text-muted-foreground">Meta: R$ 1M</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-card/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-card border animate-ai-pulse hover:scale-110 transition-all duration-300 delay-500">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 lg:h-5 lg:w-5 text-accent-ai icon-glow" />
                <div>
                  <div className="font-semibold text-xs lg:text-sm">+847%</div>
                  <div className="text-[10px] lg:text-xs text-muted-foreground">Crescimento IA</div>
                </div>
              </div>
            </div>

            {/* Additional floating element for larger screens */}
            <div className="hidden lg:block absolute top-1/2 -right-8 bg-card/90 backdrop-blur-sm rounded-full p-4 shadow-card border animate-float">
              <Sparkles className="h-6 w-6 text-accent-ai icon-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};