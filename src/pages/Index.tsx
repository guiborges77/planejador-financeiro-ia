import { HeroSection } from "@/components/HeroSection";
import { RetirementCalculator } from "@/components/RetirementCalculator";
import { StickyNav } from "@/components/StickyNav";
import { ScrollReveal } from "@/components/ScrollAnimations";
import { Brain, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <StickyNav />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Calculator Section */}
      <section
        id="calculator"
        className="py-12 sm:py-16 lg:py-20 bg-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-neural animate-neural-flow opacity-10"></div>
        
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient mb-4 lg:mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 font-space">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-glow-pulse icon-glow" />
                  <span>Calculadora IA de Aposentadoria</span>
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent-ai animate-float icon-glow" />
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Nossa inteligência artificial analisa cenários complexos e
                  simula como seus investimentos podem crescer exponencialmente ao
                  longo do tempo.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                {/* Subtle glow effect around calculator */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl blur-xl"></div>
                <div className="relative">
                  <RetirementCalculator />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 sm:py-12 lg:py-16 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-neural animate-neural-flow opacity-5"></div>
        
        {/* Footer decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-4xl">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-primary icon-glow" />
                <span className="font-semibold text-primary">Retire Smart AI</span>
              </div>
              
              <p className="text-muted-foreground text-sm sm:text-base">
                © {new Date().getFullYear()} Planejamento de Aposentadoria.
                Desenvolvido com ❤️ para seu futuro financeiro.
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground/80">
                  Tecnologia de ponta para decisões financeiras inteligentes
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default Index;
