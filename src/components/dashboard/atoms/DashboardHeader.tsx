import React from 'react';
import { Button } from '../../ui/button';
import { User } from 'lucide-react';

interface DashboardHeaderProps {
  onProfileClick: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onProfileClick }) => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Swift
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Manage and view all comments</p>
      </div>
      <Button onClick={onProfileClick} size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
        <User className="w-5 h-5 mr-2" />
        View Profile
      </Button>
    </div>
  );
};
