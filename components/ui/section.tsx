import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  gray?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  gray = false
}) => {
  return (
    <section
      id={id}
      className={`py-24 ${gray ? 'bg-gray-50' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  tag: string;
  title: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  centered = true
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-semibold mb-4 tracking-wide">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
};
