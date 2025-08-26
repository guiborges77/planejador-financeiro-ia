import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Target, Clock } from 'lucide-react';
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
      description: `Em ${inputs.years} anos`,
      icon: TrendingUp,
      gradient: 'bg-gradient-primary',
      textColor: 'text-primary-foreground'
    },
    {
      title: 'Total Investido',
      value: formatCurrency(finalData.totalContributions),
      description: 'Seus aportes',
      icon: DollarSign,
      gradient: 'bg-muted',
      textColor: 'text-muted-foreground'
    },
    {
      title: 'Juros Compostos',
      value: formatCurrency(totalInterest),
      description: 'Rendimento total',
      icon: Target,
      gradient: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    },
    {
      title: 'Valor Real',
      value: formatCurrency(finalData.inflationAdjustedBalance),
      description: 'Poder de compra hoje',
      icon: Clock,
      gradient: 'bg-gradient-card',
      textColor: 'text-card-foreground'
    }
  ];

  const interestMultiplier = (totalInterest / finalData.totalContributions + 1).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className={`${card.gradient} shadow-card hover:shadow-elevated transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-6 w-6 ${card.textColor}`} />
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

      {/* Performance Insights */}
      <Card className="shadow-card bg-gradient-hero border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-primary">💡 Insights do Seu Planejamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/50 rounded-lg p-4">
              <strong className="text-secondary">Multiplicação: </strong>
              Seu dinheiro será multiplicado por <strong>{interestMultiplier}x</strong> em {inputs.years} anos
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <strong className="text-primary">Rendimento: </strong>
              {((totalInterest / finalData.totalContributions) * 100).toFixed(1)}% sobre o valor investido
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <strong className="text-muted-foreground">Tempo: </strong>
              {inputs.years * 12} meses de contribuições consistentes
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};