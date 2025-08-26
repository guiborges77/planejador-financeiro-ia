import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Sparkles, Bot, Zap, TrendingUp } from 'lucide-react';
import { RetirementData, CalculatorInputs } from './RetirementCalculator';

interface RetirementSummaryProps {
  data: RetirementData[];
  inputs: CalculatorInputs;
}

export const RetirementSummary = ({ data, inputs }: RetirementSummaryProps) => {
  if (data.length === 0) return null;

  const finalData = data[data.length - 1];
  const totalInterest = finalData.totalBalance - finalData.totalContributions;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const summaryCards = [
    {
      title: 'Patrimônio Final',
      value: formatCurrency(finalData.totalBalance),
      description: `Projeção IA para ${inputs.years} anos`,
      icon: Brain,
      gradient: 'bg-gradient-ai',
      textColor: 'text-primary-foreground'
    },
    {
      title: 'Total Investido',
      value: formatCurrency(finalData.totalContributions),
      description: 'Seus aportes calculados',
      icon: Bot,
      gradient: 'bg-muted',
      textColor: 'text-muted-foreground'
    },
    {
      title: 'Juros Compostos IA',
      value: formatCurrency(totalInterest),
      description: 'Rendimento otimizado',
      icon: Sparkles,
      gradient: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    },
    {
      title: 'Valor Real',
      value: formatCurrency(finalData.inflationAdjustedBalance),
      description: 'Poder de compra atual',
      icon: Zap,
      gradient: 'bg-gradient-card',
      textColor: 'text-card-foreground'
    }
  ];

  const interestMultiplier = (totalInterest / finalData.totalContributions + 1).toFixed(1);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card 
              key={card.title} 
              className={`${card.gradient} shadow-card hover:shadow-ai-glow transition-all duration-300 animate-scale-in hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-6 w-6 ${card.textColor} animate-ai-pulse`} />
                  <Sparkles className="h-3 w-3 text-accent-ai opacity-60" />
                </div>
                <div className={`text-2xl font-bold ${card.textColor} mb-1`}>
                  {card.value}
                </div>
                <p className={`text-sm ${card.textColor} opacity-80`}>
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* AI Performance Insights */}
      <Card className="shadow-card bg-gradient-hero border-l-4 border-l-primary animate-slide-in-right">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Brain className="h-5 w-5 animate-ai-pulse" />
            🤖 Insights da Inteligência Artificial
            <Sparkles className="h-4 w-4 text-accent-ai" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/50 rounded-lg p-4 hover:shadow-glow transition-all duration-300">
              <strong className="text-secondary flex items-center gap-1">
                <Bot className="h-4 w-4" />
                Multiplicação IA: 
              </strong>
              <div className="mt-1">Seu dinheiro será multiplicado por <strong className="text-primary">{interestMultiplier}x</strong> em {inputs.years} anos</div>
            </div>
            <div className="bg-background/50 rounded-lg p-4 hover:shadow-glow transition-all duration-300">
              <strong className="text-primary flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                Rendimento Otimizado: 
              </strong>
              <div className="mt-1"><strong className="text-secondary">{((totalInterest / finalData.totalContributions) * 100).toFixed(1)}%</strong> sobre o valor investido</div>
            </div>
            <div className="bg-background/50 rounded-lg p-4 hover:shadow-glow transition-all duration-300">
              <strong className="text-muted-foreground flex items-center gap-1">
                <Zap className="h-4 w-4" />
                Análise Temporal: 
              </strong>
              <div className="mt-1"><strong className="text-primary">{inputs.years * 12}</strong> meses de contribuições inteligentes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};