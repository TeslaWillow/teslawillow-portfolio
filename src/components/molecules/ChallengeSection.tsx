import React from 'react';
import { Icon } from '../atoms';

interface ChallengeProps {
  challenge?: {
    title: string;
    description: string;
    solution: string;
  } | null;
}

const ChallengeSection: React.FC<ChallengeProps> = ({ challenge }) => {
  // Guard Clause: If no challenge data is provided, return null to avoid rendering an empty section
  if (!challenge) return null;

  return (
    <div className="my-5 p-4 md:p-8 rounded-3xl border border-purple-500/20 bg-green-500/5 backdrop-blur-md relative overflow-hidden group">
     
      <div className="absolute -right-8 -top-8 text-purple-500/10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
        <Icon name="Zap" size={120} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4 text-purple-400">
          <Icon name="BrainCircuit" size={24} />
          <h3 className="text-xl font-bold uppercase tracking-wider">Technical Challenge</h3>
        </div>
        
        <h4 className="text-2xl font-display font-semibold mb-4 text-white">
          {challenge.title}
        </h4>
        
        <p className="text-gray-300 leading-relaxed mb-6 italic">
          "{challenge.description}"
        </p>

        <div className="flex items-center gap-2 text-sm font-mono text-purple-300/80 bg-purple-500/10 w-fit px-4 py-2 rounded-lg border border-purple-500/20">
          <span className="font-bold uppercase">Solution:</span>
          {challenge.solution}
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;