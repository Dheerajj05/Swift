import React from 'react';
import { ProfileAvatar } from '../atoms/ProfileAvatar';
import { BackButton } from '../atoms/BackButton';

interface ProfileHeaderProps {
  fullName: string;
  username: string;
  imageUrl: string;
  onBackClick: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  fullName,
  username,
  imageUrl,
  onBackClick
}) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <ProfileAvatar 
          imageUrl={imageUrl}
          fullName={fullName}
          size="xl"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {fullName}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">@{username}</p>
        </div>
      </div>
      <BackButton onClick={onBackClick} />
    </div>
  );
};
