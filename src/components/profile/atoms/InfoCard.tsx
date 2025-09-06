import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  variant?: 'default' | 'highlight';
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  label,
  value,
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-white/80 border-white/20',
    highlight: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50'
  };

  const iconClasses = {
    default: 'text-gray-600',
    highlight: 'text-blue-600'
  };

  return (
    <div className={`${variantClasses[variant]} backdrop-blur-sm rounded-lg shadow-md border p-4 transition-all hover:shadow-lg hover:scale-105`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-gray-50 ${iconClasses[variant]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {label}
          </p>
          <p className="text-lg font-semibold text-gray-900 truncate" title={value}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
