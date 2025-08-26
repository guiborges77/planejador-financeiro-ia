import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart
} from 'recharts';
import { RetirementData } from './RetirementCalculator';

interface RetirementChartProps {
  data: RetirementData[];
}

export const RetirementChart = ({ data }: RetirementChartProps) => {
  // Transform data for chart - show only yearly data for better readability
  const chartData = data
    .filter((item, index) => index % 12 === 11 || index === data.length - 1)
    .map(item => ({
      year: item.year,
      'Patrimônio Total': item.totalBalance,
      'Valor Ajustado (Inflação)': item.inflationAdjustedBalance,
      'Total Investido': item.totalContributions
    }));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-elevated">
          <p className="font-semibold text-card-foreground mb-2">{`Ano ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="totalBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="inflationAdjusted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="totalContributions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="year" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            tickFormatter={formatCurrency}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          <Area
            type="monotone"
            dataKey="Total Investido"
            stackId="1"
            stroke="hsl(var(--muted-foreground))"
            fill="url(#totalContributions)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="Valor Ajustado (Inflação)"
            stackId="2"
            stroke="hsl(var(--secondary))"
            fill="url(#inflationAdjusted)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="Patrimônio Total"
            stackId="3"
            stroke="hsl(var(--primary))"
            fill="url(#totalBalance)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};