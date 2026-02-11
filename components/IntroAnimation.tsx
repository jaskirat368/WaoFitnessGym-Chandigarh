import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check session storage to see if intro has played during this session
    const hasPlayed = sessionStorage.getItem('wao_intro_played');
    if (!hasPlayed) {
      setShow(true);
      sessionStorage.setItem('wao_intro_played', 'true');
      
      // Animation duration + slight hold
      const timer = setTimeout(() => {
        setShow(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* 3D Text Container */}
            <div style={{ perspective: "1000px" }}>
              <motion.div
                initial={{ rotateX: 90, opacity: 0, y: 60 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Exponential ease-out
                className="flex items-center gap-3 md:gap-5 origin-bottom"
              >
                <span className="font-display font-black italic text-5xl md:text-8xl tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
                  WAO
                </span>
                <span className="font-display font-black italic text-5xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400 drop-shadow-[0_0_30px_rgba(0,123,255,0.5)]">
                  FITNESS
                </span>
              </motion.div>
            </div>

            {/* Glowing Separator Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
              className="h-[2px] w-48 md:w-96 bg-gradient-to-r from-transparent via-brand-primary to-transparent mt-6 shadow-[0_0_15px_rgba(0,123,255,0.8)]"
            />

            {/* Location Tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-4 text-xs md:text-sm font-bold uppercase tracking-[0.6em] text-gray-400"
            >
              Chandigarh
            </motion.p>
          </div>

          {/* Background Ambient Light */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute pointer-events-none w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;