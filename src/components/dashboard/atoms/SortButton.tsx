import React from 'react';
import { Button } from '../../ui/button';
import { ChevronUp, ChevronDown } from 'lucide-react';
import type { SortDirection } from '../../../types';

interface SortButtonProps {
  label: string;
  sortDirection: SortDirection;
  onClick: () => void;
}

export const SortButton: React.FC<SortButtonProps> = ({
  label,
  sortDirection,
  onClick
}) => {
  const getSortIcon = () => {
    if (sortDirection === 'asc') return <ChevronUp className="w-4 h-4" />;
    if (sortDirection === 'desc') return <ChevronDown className="w-4 h-4" />;
    return null;
  };

  const getVariant = () => {
    return sortDirection ? 'default' : 'outline';
  };

  return (
    <Button
      variant={getVariant()}
      size="sm"
      onClick={onClick}
      className="font-medium gap-2"
    >
      {label}
      {getSortIcon()}
    </Button>
  );
};
