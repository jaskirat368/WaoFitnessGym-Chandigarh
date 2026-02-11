import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pb-20">
      {/* Header Section with Top Padding for Navbar */}
      <div className="relative bg-brand-surface pt-12 md:pt-32 pb-16 mb-12 border-b border-white/5 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gym-gradient opacity-5 z-0" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic text-white mb-4 drop-shadow-lg">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Programs</span>
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg font-medium">
            Choose your path. We have the expertise to guide you to your best self.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, idx) => (
            <ProgramCard key={program.id} program={program} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;