import React from 'react';
import { TableHead } from '../../ui/table';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { SortDirection } from '../../../types';

interface SortableTableHeaderProps {
  children: React.ReactNode;
  sortDirection?: SortDirection;
  onClick: () => void;
}

export const SortableTableHeader: React.FC<SortableTableHeaderProps> = ({ 
  children, 
  sortDirection, 
  onClick 
}) => {
  const getSortIcon = () => {
    if (sortDirection === 'asc') return <ChevronUp className="w-4 h-4" />;
    if (sortDirection === 'desc') return <ChevronDown className="w-4 h-4" />;
    return null;
  };

  return (
    <TableHead 
      className="cursor-pointer hover:bg-gray-100/50 select-none font-semibold text-gray-700"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {children}
        {getSortIcon()}
      </div>
    </TableHead>
  );
};
