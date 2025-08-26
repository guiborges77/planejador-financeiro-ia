import { HeroSection } from '@/components/HeroSection';
import { RetirementCalculator } from '@/components/RetirementCalculator';

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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Calculadora de Aposentadoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simule diferentes cenários e veja como seus investimentos podem crescer
                com o poder dos juros compostos ao longo do tempo.
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
