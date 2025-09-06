import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-1 text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
};
