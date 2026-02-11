import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
       <div className="relative bg-brand-surface pt-12 md:pt-32 pb-16 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-gym-gradient opacity-5 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-brand-muted">
            Start your transformation today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-brand-surface p-8 rounded-3xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white uppercase mb-8">Contact Info</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/20 p-3 rounded-full text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Phone</h3>
                  <p className="text-gray-400 mb-2">Call us for inquiries.</p>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-2xl font-display font-bold text-white hover:text-brand-primary transition-colors">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/20 p-3 rounded-full text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Address</h3>
                  <p className="text-gray-300 max-w-xs">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-brand-primary/20 p-3 rounded-full text-brand-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Hours</h3>
                  <p className="text-gray-300">
                    Mon–Sat: 5:30 AM – 10:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <Button text="Navigate with Google Maps" onClick={() => window.open(BUSINESS_INFO.mapLink, '_blank')} className="w-full" />
              
              <a 
                href="https://www.instagram.com/waofitness.asia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-3 text-base font-bold uppercase tracking-wider transition-all duration-300 transform rounded-full hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg hover:shadow-[0_10px_20px_rgba(253,29,29,0.3)] group border border-white/10"
              >
                <Instagram size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54864.80753219271!2d76.78815747212191!3d30.745083768546174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed4f2fb2cc99%3A0x99cce0c7543c3fa6!2sWao%20Fitness-Best%20Gym%20In%20Chandigarh!5e0!3m2!1sen!2sin!4v1770191617313!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Wao Fitness Location Map"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;