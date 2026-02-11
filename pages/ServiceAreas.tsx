import React from 'react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../constants';
import { MapPin } from 'lucide-react';
import Button from '../components/Button';

const ServiceAreas: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="relative bg-brand-surface pt-12 md:pt-32 pb-16 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-gym-gradient opacity-5 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-black uppercase italic text-white mb-4">
            Gym Services in Chandigarh
          </h1>
          <p className="text-brand-muted">
            Serving fitness enthusiasts across Chandigarh's prime sectors.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
             <p className="text-gray-300 leading-relaxed text-lg">
               Looking for a "Gym in Chandigarh"? Wao Fitness is strategically located on Madhya Marg, making it accessible from major sectors. We are the top choice for residents looking for premium equipment and expert guidance nearby.
             </p>
             
             <div className="grid gap-6">
               {SERVICE_AREAS.map((area, idx) => (
                 <div key={idx} className="bg-brand-surface p-6 rounded-xl border-l-4 border-brand-primary hover:bg-gray-800 transition-colors">
                   <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                     <MapPin size={18} className="text-brand-primary" />
                     Gym in {area.name}
                   </h2>
                   <p className="text-brand-muted text-sm">{area.description}</p>
                 </div>
               ))}
             </div>
           </div>

           <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54864.80753219271!2d76.78815747212191!3d30.745083768546174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed4f2fb2cc99%3A0x99cce0c7543c3fa6!2sWao%20Fitness-Best%20Gym%20In%20Chandigarh!5e0!3m2!1sen!2sin!4v1770191617313!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Wao Fitness Location"
             ></iframe>
           </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Live nearby? Come visit us!</h3>
          <Button text="Get Directions" onClick={() => window.open(BUSINESS_INFO.mapLink, '_blank')} />
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;