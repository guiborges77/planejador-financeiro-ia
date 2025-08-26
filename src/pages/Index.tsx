import { HeroSection } from '@/components/HeroSection';
import { RetirementCalculator } from '@/components/RetirementCalculator';
import { Brain, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <Brain className="h-8 w-8 text-primary animate-ai-pulse" />
                Calculadora IA de Aposentadoria
                <Sparkles className="h-6 w-6 text-accent-ai" />
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossa inteligência artificial analisa cenários complexos e simula 
                como seus investimentos podem crescer exponencialmente ao longo do tempo.
              </p>
            </div>
            
            <RetirementCalculator />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Planejamento de Aposentadoria. Desenvolvido com ❤️ para seu futuro financeiro.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
