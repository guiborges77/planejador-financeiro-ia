import { Button } from '@/components/ui/button';
import { TrendingUp, Calculator, Target } from 'lucide-react';
import heroImage from '@/assets/hero-finance.jpg';

export const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Planeje sua
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Aposentadoria
                </span>
                dos sonhos
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubra o poder dos juros compostos e veja como seus investimentos 
                podem crescer ao longo do tempo. Simule diferentes cenários e 
                tome decisões financeiras mais inteligentes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={scrollToCalculator}
              >
                <Calculator className="h-5 w-5 mr-2" />
                Começar Simulação
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="h-5 w-5 mr-2" />
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10.5%</div>
                <div className="text-sm text-muted-foreground">Taxa média CDI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">30 anos</div>
                <div className="text-sm text-muted-foreground">Período ideal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5.2x</div>
                <div className="text-sm text-muted-foreground">Multiplicação média</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Planejamento de aposentadoria"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-card border">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-secondary" />
                <div>
                  <div className="font-semibold text-sm">Meta: R$ 1M</div>
                  <div className="text-xs text-muted-foreground">Em 25 anos</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card border">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">+847%</div>
                  <div className="text-xs text-muted-foreground">Crescimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};