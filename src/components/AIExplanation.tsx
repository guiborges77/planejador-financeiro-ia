import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Zap, TrendingUp, Target, Calculator, BarChart3 } from 'lucide-react';

export const AIExplanation = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Cálculo Inteligente',
      description: 'IA calcula juros compostos considerando inflação e cenários múltiplos'
    },
    {
      icon: BarChart3,
      title: 'Análise Preditiva',
      description: 'Projeta seu patrimônio futuro com precisão matemática avançada'
    },
    {
      icon: Target,
      title: 'Otimização Automática',
      description: 'Sugere ajustes para maximizar seus resultados de aposentadoria'
    }
  ];

  return (
    <Card className="shadow-elevated bg-gradient-card glass-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-space text-gradient">
          <Brain className="h-5 w-5 text-primary animate-glow-pulse" />
          Como Funciona Nossa IA
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-4 rounded-lg glass-effect hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="h-8 w-8 text-primary mx-auto mb-3 animate-float" />
              <h3 className="font-semibold text-sm mb-2 font-space text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};