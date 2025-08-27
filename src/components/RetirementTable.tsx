import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RetirementData } from './RetirementCalculator';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

interface RetirementTableProps {
  data: RetirementData[];
}

export const RetirementTable = ({ data }: RetirementTableProps) => {
  const [showAllData, setShowAllData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate pagination for monthly data
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Show yearly data or paginated monthly data
  const displayData = showAllData 
    ? data.filter((_, index) => index % 12 === 11 || index === data.length - 1) // Yearly
    : data.slice(startIndex, endIndex); // Paginated monthly

  const handleViewChange = () => {
    setShowAllData(!showAllData);
    setCurrentPage(1); // Reset to first page when switching views
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {showAllData ? 'Visão Anual' : 'Visão Mensal'}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {showAllData ? `${displayData.length} anos` : `${displayData.length} de ${data.length} meses`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Pagination for monthly view */}
          {!showAllData && totalPages > 1 && (
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-xs text-muted-foreground px-2">
                {currentPage} de {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewChange}
            className="flex items-center gap-2"
          >
            {showAllData ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {showAllData ? 'Mostrar Mensal' : 'Mostrar Anual'}
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-20">
                {showAllData ? 'Ano' : 'Mês'}
              </TableHead>
              <TableHead className="text-right">Aporte</TableHead>
              <TableHead className="text-right">Rendimento</TableHead>
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
        <p>• <strong>Rendimento:</strong> Ganho mensal sobre o saldo acumulado</p>
        <p>• <strong>Valor Real:</strong> Patrimônio ajustado pela inflação (poder de compra atual)</p>
      </div>
    </div>
  );
};