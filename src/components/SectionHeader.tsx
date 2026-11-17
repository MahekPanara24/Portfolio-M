import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  className = 'mb-16',
}) => {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-blue-400 mb-3">
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};
