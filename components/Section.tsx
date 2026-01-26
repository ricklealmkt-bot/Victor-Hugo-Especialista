
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}>
      {/* Fixed: Use 'className' instead of 'class' in React component */}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};