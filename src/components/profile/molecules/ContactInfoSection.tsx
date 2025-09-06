import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InfoCard } from '../atoms/InfoCard';
import { SectionTitle } from '../atoms/SectionTitle';
import type { User } from '../../../types';

interface ContactInfoSectionProps {
  user: User;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ user }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
      <SectionTitle 
        title="Contact Information" 
        subtitle="Get in touch with this user"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          icon={Mail}
          label="Email"
          value={user.email}
          variant="highlight"
        />
        <InfoCard
          icon={Phone}
          label="Phone"
          value={user.phone}
        />
        <InfoCard
          icon={MapPin}
          label="Address"
          value={`${user.address.city}, ${user.address.state}`}
        />
      </div>
    </div>
  );
};
