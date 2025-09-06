import React from 'react';
import { Button } from '../../ui/button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  retryLabel = "Retry" 
}) => {
  return (
    <div className="h-full bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-600 mb-6 text-lg font-medium">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" size="lg">
            {retryLabel}
          </Button>
        )}
      </div>
    </div>
  );
};
