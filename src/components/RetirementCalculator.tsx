import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Zap, Bot, TrendingUp } from 'lucide-react';
import { RetirementChart } from './RetirementChart';
import { RetirementTable } from './RetirementTable';
import { RetirementSummary } from './RetirementSummary';
import { AIExplanation } from './AIExplanation';

export interface RetirementData {
  month: number;
  year: number;
  monthlyContribution: number;
  monthlyInterest: number;
  totalContributions: number;
  totalBalance: number;
  inflationAdjustedBalance: number;
}

export interface CalculatorInputs {
  initialAmount: number;
  monthlyContribution: number;
  years: number;
  annualInterestRate: number;
  inflationRate: number;
}

export const RetirementCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    initialAmount: 0,
    monthlyContribution: 0,
    years: 0,
    annualInterestRate: 0,
    inflationRate: 0
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  const calculationResults = useMemo(() => {
    // Only calculate if we have valid inputs and user has attempted calculation
    if (!hasCalculated || !inputs.monthlyContribution || !inputs.years || !inputs.annualInterestRate) {
      return [];
    }

    const results: RetirementData[] = [];
    const monthlyRate = inputs.annualInterestRate / 100 / 12;
    const monthlyInflationRate = inputs.inflationRate / 100 / 12;
    
    let currentBalance = inputs.initialAmount || 0;
    let totalContributions = inputs.initialAmount || 0;
    
    for (let month = 1; month <= inputs.years * 12; month++) {
      const monthlyInterest = currentBalance * monthlyRate;
      currentBalance += monthlyInterest + inputs.monthlyContribution;
      totalContributions += inputs.monthlyContribution;
      
      const inflationAdjustedBalance = currentBalance / Math.pow(1 + monthlyInflationRate, month);
      
      results.push({
        month,
        year: Math.ceil(month / 12),
        monthlyContribution: inputs.monthlyContribution,
        monthlyInterest,
        totalContributions,
        totalBalance: currentBalance,
        inflationAdjustedBalance
      });
    }
    
    return results;
  }, [inputs, hasCalculated]);

  const updateInput = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    if (inputs.monthlyContribution && inputs.years && inputs.annualInterestRate) {
      setHasCalculated(true);
    }
  };

  const isFormValid = inputs.monthlyContribution > 0 && inputs.years > 0 && inputs.annualInterestRate > 0;

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <Card className="shadow-card bg-gradient-card animate-fade-in">
        <CardHeader className="relative overflow-hidden pb-4">
          <div className="absolute inset-0 bg-gradient-neural animate-neural-flow opacity-20"></div>
          <CardTitle className="flex items-center gap-3 relative z-10 font-space">
            <div className="relative">
              <Brain className="h-6 w-6 text-primary animate-ai-pulse" />
              <Sparkles className="h-3 w-3 text-accent-ai absolute -top-1 -right-1" />
            </div>
            Calculadora Inteligente
          </CardTitle>
          <CardDescription className="relative z-10">
            Digite seus dados para análise de aposentadoria com IA
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="initial" className="flex items-center gap-2 text-sm font-medium">
              <Zap className="h-4 w-4 text-muted-foreground" />
              Aporte Inicial (R$)
            </Label>
            <Input
              id="initial"
              type="number"
              placeholder="0"
              value={inputs.initialAmount || ''}
              onChange={(e) => updateInput('initialAmount', Number(e.target.value))}
              className="text-right h-11"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monthly" className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Bot className="h-4 w-4" />
              Aporte Mensal (R$) *
            </Label>
            <Input
              id="monthly"
              type="number"
              placeholder="1.000"
              value={inputs.monthlyContribution || ''}
              onChange={(e) => updateInput('monthlyContribution', Number(e.target.value))}
              className="text-right h-11 border-primary/30"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="years" className="flex items-center gap-2 text-primary font-semibold text-sm">
              <TrendingUp className="h-4 w-4" />
              Período (anos) *
            </Label>
            <Input
              id="years"
              type="number"
              placeholder="30"
              value={inputs.years || ''}
              onChange={(e) => updateInput('years', Number(e.target.value))}
              className="text-right h-11 border-primary/30"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest" className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Sparkles className="h-4 w-4" />
              Taxa de Juros (% a.a.) *
            </Label>
            <Input
              id="interest"
              type="number"
              step="0.1"
              placeholder="10.5"
              value={inputs.annualInterestRate || ''}
              onChange={(e) => updateInput('annualInterestRate', Number(e.target.value))}
              className="text-right h-11 border-primary/30"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="inflation" className="flex items-center gap-2 text-sm font-medium">
              <Brain className="h-4 w-4 text-secondary" />
              Inflação (% a.a.)
            </Label>
            <Input
              id="inflation"
              type="number"
              step="0.1"
              placeholder="4.5"
              value={inputs.inflationRate || ''}
              onChange={(e) => updateInput('inflationRate', Number(e.target.value))}
              className="text-right h-11"
            />
          </div>
          
          <div className="flex items-end">
            <Button 
              className={`w-full h-11 font-semibold transition-all duration-300 ${
                isFormValid 
                  ? 'bg-gradient-ai hover:shadow-ai-glow animate-ai-pulse font-space' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
              onClick={handleCalculate}
              disabled={!isFormValid}
            >
              <Bot className="h-4 w-4 mr-2" />
              {hasCalculated ? 'Recalcular IA' : 'Analisar com IA'}
            </Button>
          </div>
        </CardContent>
        {!isFormValid && (
          <div className="px-6 pb-4">
            <p className="text-sm text-muted-foreground">
              * Campos obrigatórios para análise
            </p>
          </div>
        )}
      </Card>

      {/* AI Explanation - Only show when no calculation has been made */}
      {!hasCalculated && (
        <AIExplanation />
      )}

      {/* Results - Only show if calculated */}
      {hasCalculated && calculationResults.length > 0 && (
        <div className="space-y-8 animate-fade-in">
          {/* Results Summary */}
          <RetirementSummary data={calculationResults} inputs={inputs} />

          {/* Chart */}
          <Card className="shadow-card animate-scale-in">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-space">
                <TrendingUp className="h-5 w-5 text-secondary animate-ai-pulse" />
                Evolução Patrimonial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RetirementChart data={calculationResults} />
            </CardContent>
          </Card>

          {/* Detailed Table */}
          <Card className="shadow-card animate-slide-in-right">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-space">
                <Brain className="h-5 w-5 text-primary" />
                Análise Detalhada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RetirementTable data={calculationResults} />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Empty State - Show when no calculation has been made */}
      {!hasCalculated && (
        <Card className="shadow-card bg-gradient-hero animate-fade-in">
          <CardContent className="text-center py-12">
            <div className="relative mb-6">
              <Brain className="h-16 w-16 text-primary mx-auto animate-ai-pulse" />
              <Sparkles className="h-6 w-6 text-accent-ai absolute top-0 right-1/2 transform translate-x-8" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-space">
              IA Pronta para Analisar
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Preencha os campos obrigatórios para análise completa do seu plano de aposentadoria.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};