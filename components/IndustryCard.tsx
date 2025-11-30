'use client';

interface IndustryCardProps {
  sector: {
    name: string;
    icon: string;
    color: string;
    problems: string[];
    solution: string;
    outcomes: string[];
  };
}

// Icon component renderer
const SectorIcon = ({ iconType }: { iconType: string }) => {
  const iconProps = "w-6 h-6";
  
  switch (iconType) {
    case 'building':
      return (
        <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'dollar':
      return (
        <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'medical':
      return (
        <svg className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    default:
      return null;
  }
};

// Color mapping for dynamic classes
const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  'ark-blue': {
    bg: 'bg-ark-blue-pale',
    text: 'text-ark-blue',
    border: 'border-ark-blue',
    gradient: 'from-ark-blue to-ark-cyan'
  },
  'ark-orange': {
    bg: 'bg-ark-orange-pale',
    text: 'text-ark-orange',
    border: 'border-ark-orange',
    gradient: 'from-ark-orange to-yellow-400'
  },
  'ark-purple': {
    bg: 'bg-ark-purple-pale',
    text: 'text-ark-purple',
    border: 'border-ark-purple',
    gradient: 'from-ark-purple to-purple-400'
  }
};

export default function IndustryCard({ sector }: IndustryCardProps) {
  const colors = colorClasses[sector.color] || colorClasses['ark-blue'];

  return (
    <div className="h-full w-full flex items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 w-full">
        {/* Compact Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex items-center justify-center w-11 h-11 rounded-lg ${colors.bg} ${colors.text}`}>
            <SectorIcon iconType={sector.icon} />
          </div>
          <h3 className="text-xl md:text-3xl font-semibold text-text-primary">{sector.name}</h3>
        </div>

        {/* Compact Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Left Column: Problem & Solution */}
          <div className="space-y-3">
            {/* Problem Section */}
            <div>
              <h4 className="text-xs font-semibold text-text-tertiary uppercase mb-1.5">
                Problem
              </h4>
              <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-3 border border-red-100">
                <ul className="space-y-1.5">
                  {sector.problems.map((problem, i) => (
                    <li key={i} className="text-text-secondary text-xs flex items-start leading-snug">
                      <span className="text-red-500 mr-1.5 text-sm font-bold shrink-0">×</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution Section */}
            <div>
              <h4 className="text-xs font-semibold text-text-tertiary uppercase mb-1.5">
                Ark's Solution
              </h4>
              <div className={`bg-gradient-to-br ${colors.bg} to-white rounded-lg p-3 border ${colors.border}`}>
                <p className="text-text-secondary text-xs leading-relaxed">{sector.solution}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Outcomes with Progress Bars */}
          <div>
            <h4 className="text-xs font-semibold text-text-tertiary uppercase mb-1.5">
              Outcome
            </h4>
            <div className="bg-white rounded-lg p-3 border border-border-light">
              <ul className="space-y-2.5">
                {sector.outcomes.map((outcome, i) => (
                  <li key={i}>
                    <div className="flex items-start gap-1.5 mb-1">
                      <span className={`${colors.text} text-sm font-bold shrink-0`}>✓</span>
                      <span className="text-text-primary text-xs font-medium leading-snug">{outcome}</span>
                    </div>
                    {/* Compact Progress Bar */}
                    <div className="ml-5">
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`}
                          style={{ width: `${85 + (i * 5)}%` }}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
