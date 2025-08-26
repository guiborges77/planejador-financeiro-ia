import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RetirementData } from './RetirementCalculator';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface RetirementTableProps {
  data: RetirementData[];
}

export const RetirementTable = ({ data }: RetirementTableProps) => {
  const [showAllData, setShowAllData] = useState(false);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Show yearly data or first 12 months if showAllData is false
  const displayData = showAllData 
    ? data.filter((_, index) => index % 12 === 11 || index === data.length - 1) // Yearly
    : data.slice(0, 12); // First year monthly

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {showAllData ? 'Visão Anual' : 'Primeiros 12 Meses'}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {displayData.length} registros
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAllData(!showAllData)}
          className="flex items-center gap-2"
        >
          {showAllData ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {showAllData ? 'Mostrar Mensal' : 'Mostrar Anual'}
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-20">
                {showAllData ? 'Ano' : 'Mês'}
              </TableHead>
              <TableHead className="text-right">Aporte</TableHead>
              <TableHead className="text-right">Juros</TableHead>
              <TableHead className="text-right">Total Investido</TableHead>
              <TableHead className="text-right">Patrimônio</TableHead>
              <TableHead className="text-right">Valor Real</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((row, index) => (
              <TableRow key={index} className="hover:bg-muted/30">
                <TableCell className="font-medium">
                  {showAllData ? row.year : row.month}
                </TableCell>
                <TableCell className="text-right text-sm">
                  {formatCurrency(row.monthlyContribution)}
                </TableCell>
                <TableCell className="text-right text-sm text-secondary">
                  {formatCurrency(row.monthlyInterest)}
                </TableCell>
                <TableCell className="text-right text-sm">
                  {formatCurrency(row.totalContributions)}
                </TableCell>
                <TableCell className="text-right font-medium text-primary">
                  {formatCurrency(row.totalBalance)}
                </TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">
                  {formatCurrency(row.inflationAdjustedBalance)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>• <strong>Aporte:</strong> Valor mensal investido</p>
        <p>• <strong>Juros:</strong> Rendimento mensal sobre o saldo</p>
        <p>• <strong>Valor Real:</strong> Patrimônio ajustado pela inflação (poder de compra atual)</p>
      </div>
    </div>
  );
};