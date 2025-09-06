import React from 'react';
import { SearchBar } from '../atoms/SearchBar';
import { PageSizeSelector } from '../atoms/PageSizeSelector';
import { SortButton } from '../atoms/SortButton';
import type { SortDirection, SortField } from '../../../types';

interface ControlsSectionProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  pageSize: number;
  onPageSizeChange: (value: number) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export const ControlsSection: React.FC<ControlsSectionProps> = ({
  searchValue,
  onSearchChange,
  pageSize,
  onPageSizeChange,
  sortField,
  sortDirection,
  onSort
}) => {
  const getSortDirection = (field: SortField): SortDirection => {
    return sortField === field ? sortDirection : null;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 mb-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Search by name, username, email, phone or comment..."
          />
          
          <PageSizeSelector
            value={pageSize}
            onChange={onPageSizeChange}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 font-medium self-center">Sort by:</span>
          <SortButton
            label="Post ID"
            sortDirection={getSortDirection('postId')}
            onClick={() => onSort('postId')}
          />
          <SortButton
            label="Name"
            sortDirection={getSortDirection('name')}
            onClick={() => onSort('name')}
          />
          <SortButton
            label="Email"
            sortDirection={getSortDirection('email')}
            onClick={() => onSort('email')}
          />
        </div>
      </div>
    </div>
  );
};
