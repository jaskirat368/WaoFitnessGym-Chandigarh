import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROGRAMS, BUSINESS_INFO } from '../constants';
import Button from '../components/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = PROGRAMS.find(p => p.id === id);

  if (!program) {
    return <Navigate to="/programs" />;
  }

  return (
    <div className="bg-brand-dark min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-dark/70 z-10" />
        <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover grayscale" />
        <div className="relative z-20 text-center container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic text-white mb-4">
            {program.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-30">
        <div className="bg-brand-surface rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800">
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-primary uppercase mb-4">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{program.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">Who is this for?</h3>
                <p className="text-brand-muted italic border-l-4 border-brand-primary pl-4 py-2 bg-gray-800/50 rounded-r-lg">
                  {program.targetAudience}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {program.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="text-brand-primary shrink-0" size={20} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl h-fit sticky top-24">
              <h3 className="text-xl font-bold text-white uppercase mb-6 text-center">Start This Program</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                   <AlertCircle className="text-brand-primary shrink-0 mt-1" size={20} />
                   <p className="text-sm text-brand-primary">
                     Consultation required before starting. Our trainers assess your current fitness level.
                   </p>
                </div>

                <div className="text-center">
                  <p className="text-brand-muted text-sm mb-2">Speak to a trainer now</p>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="block w-full bg-white text-brand-dark font-bold py-3 rounded-full uppercase hover:bg-gray-200 transition-colors mb-4">
                    Call {BUSINESS_INFO.displayPhone}
                  </a>
                  <Button text="Get Directions" to="/contact" variant="outline" className="w-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;