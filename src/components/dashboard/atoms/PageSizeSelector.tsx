import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

interface PageSizeSelectorProps {
  value: number;
  onChange: (value: number) => void;
  options?: number[];
}

export const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({ 
  value, 
  onChange, 
  options = [10, 50, 100] 
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 whitespace-nowrap font-medium">Show:</span>
      <Select value={value.toString()} onValueChange={(val) => onChange(parseInt(val, 10))}>
        <SelectTrigger className="w-24 h-12">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-sm text-gray-600 font-medium">per page</span>
    </div>
  );
};
