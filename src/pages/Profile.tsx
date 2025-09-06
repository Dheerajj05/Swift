import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import type { User } from '../types';

import { LoadingSpinner } from '../components/dashboard/atoms/LoadingSpinner';
import { ErrorMessage } from '../components/dashboard/atoms/ErrorMessage';
import { ProfileHeader } from '../components/profile/molecules/ProfileHeader';
import { ContactInfoSection } from '../components/profile/molecules/ContactInfoSection';
import { PersonalInfoSection } from '../components/profile/molecules/PersonalInfoSection';

const ProfileScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await apiService.getFirstUser();
        setUser(userData);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return <LoadingSpinner message="Loading profile..." size="lg" />;
  }

  if (error || !user) {
    return (
      <ErrorMessage 
        message={error || 'User not found'} 
        onRetry={handleBackToDashboard}
        retryLabel="Back to Dashboard"
      />
    );
  }

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProfileHeader
            fullName={`${user.firstName} ${user.lastName}`}
            username={user.username}
            imageUrl={user.image}
            onBackClick={handleBackToDashboard}
          />

          <div className="space-y-6">
            <PersonalInfoSection user={user} />
            <ContactInfoSection user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;