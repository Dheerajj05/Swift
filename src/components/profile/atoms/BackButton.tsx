import React from 'react';
import { Button } from '../../ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = 'Back to Dashboard'
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={onClick}
      className="shadow-lg hover:shadow-xl transition-all hover:scale-105 font-medium"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      {label}
    </Button>
  );
};
