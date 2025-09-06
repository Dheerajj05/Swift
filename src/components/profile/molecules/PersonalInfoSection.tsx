import React from 'react';
import { User, Calendar, Briefcase } from 'lucide-react';
import { InfoCard } from '../atoms/InfoCard';
import { SectionTitle } from '../atoms/SectionTitle';
import type { User as UserType } from '../../../types';

interface PersonalInfoSectionProps {
  user: UserType;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ user }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
      <SectionTitle 
        title="Personal Information" 
        subtitle="Basic details about this user"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          icon={User}
          label="Username"
          value={user.username}
          variant="highlight"
        />
        <InfoCard
          icon={Calendar}
          label="Age"
          value={`${user.age} years old`}
        />
        <InfoCard
          icon={Briefcase}
          label="Company"
          value={user.company.name}
        />
      </div>
    </div>
  );
};
