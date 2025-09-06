import React from 'react';

interface ProfileAvatarProps {
  imageUrl: string;
  fullName: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageUrl,
  fullName,
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg border-4 border-white/20`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={fullName}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-white font-bold ${textSizeClasses[size]}">${getInitials(fullName)}</span>`;
            }
          }}
        />
      ) : (
        <span className={`text-white font-bold ${textSizeClasses[size]}`}>
          {getInitials(fullName)}
        </span>
      )}
    </div>
  );
};
