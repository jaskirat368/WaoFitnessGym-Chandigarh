import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-brand-dark/70 z-10" />
        <img 
          src="https://content3.jdmagicbox.com/v2/comp/chandigarh/v4/0172px172.x172.221015224226.x9v4/catalogue/wao-fitness-chandigarh-gymnastics-clubs-7ewl4wu81a.jpg" 
          alt="Wao Fitness Gym Background" 
          className="w-full h-[120%] object-cover object-center grayscale opacity-60"
        />
      </motion.div>

      {/* Floating 3D Elements (Electric Blue Glows) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] z-0"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] z-0"
      />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-brand-primary text-brand-primary uppercase text-xs font-bold tracking-[0.2em] mb-4 rounded-full">
            Est. 2022 • Chandigarh
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight uppercase italic perspective-text mb-6 text-brand-text">
            Best Fitness & <br />
            <span className="text-transparent bg-clip-text bg-gym-gradient">Gym Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text/90 font-light mb-10 max-w-2xl mx-auto">
            Certified Coaches · Modern Equipment · Supportive Community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Button 
               text="Start Your Journey" 
               to="/contact" 
               variant="primary" 
               className="w-full sm:w-auto text-lg py-4"
             />
             <a 
               href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
               className="inline-flex items-center justify-center px-8 py-3 text-base font-bold uppercase tracking-wider transition-all duration-300 transform rounded-full border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-dark w-full sm:w-auto text-lg py-4"
             >
               Call Now
             </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-brand-muted text-sm font-semibold uppercase tracking-widest">
            <div className="flex flex-col items-center">
              <span className="text-brand-text text-2xl font-black">4.8 ★</span>
              <span>1155+ Reviews</span>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
             <div className="flex flex-col items-center">
              <span className="text-brand-text text-2xl font-black">24/7</span>
              <span>Support</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
};

export default Hero;