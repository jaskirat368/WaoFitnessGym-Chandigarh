import React from 'react';
import { Link } from 'react-router-dom';
import { Program } from '../types';
import { ArrowRight } from 'lucide-react';

const ProgramCard: React.FC<{ program: Program; index: number }> = ({ program, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-brand-surface border border-gray-800 hover:border-brand-primary/50 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_20px_rgba(0,123,255,0.1)]">
      {/* Image */}
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-all z-10" />
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
          Training
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-display font-bold uppercase italic mb-3 text-brand-text group-hover:text-brand-primary transition-colors">
          {program.title}
        </h3>
        <p className="text-brand-muted mb-6 line-clamp-3">
          {program.shortDescription}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/program/${program.id}`} 
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-primary transition-colors"
          >
            Explore Program <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;