import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8 border-b-2',
    md: 'h-12 w-12 border-b-3',
    lg: 'h-16 w-16 border-b-4'
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className={`animate-spin rounded-full ${sizeClasses[size]} border-blue-600 mx-auto`}></div>
        <p className="mt-6 text-lg text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  );
};
