import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { RetirementChart } from './RetirementChart';
import { RetirementTable } from './RetirementTable';
import { RetirementSummary } from './RetirementSummary';

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
    initialAmount: 10000,
    monthlyContribution: 1000,
    years: 30,
    annualInterestRate: 10.5,
    inflationRate: 4.5
  });

  const calculationResults = useMemo(() => {
    const results: RetirementData[] = [];
    const monthlyRate = inputs.annualInterestRate / 100 / 12;
    const monthlyInflationRate = inputs.inflationRate / 100 / 12;
    
    let currentBalance = inputs.initialAmount;
    let totalContributions = inputs.initialAmount;
    
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
  }, [inputs]);

  const updateInput = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Dados do Planejamento
          </CardTitle>
          <CardDescription>
            Insira suas informações para calcular sua aposentadoria
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="initial">Aporte Inicial (R$)</Label>
            <Input
              id="initial"
              type="number"
              value={inputs.initialAmount}
              onChange={(e) => updateInput('initialAmount', Number(e.target.value))}
              className="text-right"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monthly">Aporte Mensal (R$)</Label>
            <Input
              id="monthly"
              type="number"
              value={inputs.monthlyContribution}
              onChange={(e) => updateInput('monthlyContribution', Number(e.target.value))}
              className="text-right"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="years">Período (anos)</Label>
            <Input
              id="years"
              type="number"
              value={inputs.years}
              onChange={(e) => updateInput('years', Number(e.target.value))}
              className="text-right"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interest">Taxa de Juros (% a.a.)</Label>
            <Input
              id="interest"
              type="number"
              step="0.1"
              value={inputs.annualInterestRate}
              onChange={(e) => updateInput('annualInterestRate', Number(e.target.value))}
              className="text-right"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="inflation">Inflação (% a.a.)</Label>
            <Input
              id="inflation"
              type="number"
              step="0.1"
              value={inputs.inflationRate}
              onChange={(e) => updateInput('inflationRate', Number(e.target.value))}
              className="text-right"
            />
          </div>
          
          <div className="flex items-end">
            <Button 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" 
              onClick={() => {
                // Trigger recalculation by updating a key or state
                window.dispatchEvent(new CustomEvent('recalculate-retirement'));
              }}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Recalcular
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <RetirementSummary data={calculationResults} inputs={inputs} />

      {/* Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-secondary" />
            Evolução do Patrimônio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RetirementChart data={calculationResults} />
        </CardContent>
      </Card>

      {/* Detailed Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Detalhamento por Período
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RetirementTable data={calculationResults} />
        </CardContent>
      </Card>
    </div>
  );
};