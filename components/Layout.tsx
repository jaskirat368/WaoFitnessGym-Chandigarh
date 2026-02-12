import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import Chatbot from './Chatbot';
import { Menu, X, Phone, Instagram, MapPin, ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Areas', path: '/areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-dark text-brand-text overflow-x-hidden selection:bg-brand-primary selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled 
            ? 'py-3 bg-[#0D0D0D]/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'py-6 bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group relative z-50 flex items-center gap-1">
             <span className="font-display font-black italic text-2xl lg:text-3xl tracking-tighter text-white transition-all">WAO</span>
             <span className="font-display font-black italic text-2xl lg:text-3xl tracking-tighter text-brand-primary transition-all">FITNESS</span>
          </Link>

          {/* Desktop Menu - Glass Capsule */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 lg:p-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-inner transition-all">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`relative px-3 py-1.5 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-brand-primary shadow-[0_4px_14px_0_rgba(0,123,255,0.39)]' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Full Button for Large Screens */}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
              className="hidden lg:flex group relative px-6 py-2.5 bg-brand-surface border border-white/10 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-brand-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <Phone size={16} className="text-brand-primary group-hover:text-white transition-colors" />
                <span>{BUSINESS_INFO.displayPhone}</span>
              </div>
            </a>

            {/* Icon Only Button for Medium Screens (Tablets) */}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-brand-surface border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
              aria-label="Call Us"
            >
              <Phone size={18} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white hover:text-brand-primary transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-2xl z-40 transition-all duration-500 flex flex-col justify-center items-center space-y-8 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
          }`}
        >
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-brand-primary transition-all"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
            className="mt-8 px-8 py-4 bg-brand-primary rounded-full text-white font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(0,123,255,0.4)]"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 pt-20 pb-24 md:pb-12 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-brand-primary/50 shadow-[0_0_100px_rgba(0,123,255,0.5)] blur-xl" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 relative z-10">
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center gap-1">
                 <span className="font-display font-black italic text-3xl tracking-tighter text-white">WAO</span>
                 <span className="font-display font-black italic text-3xl tracking-tighter text-brand-primary">FITNESS</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              The premier fitness destination in Chandigarh. Join a community dedicated to strength, health, and transformation.
            </p>
            <div className="flex space-x-4">
               <a 
                 href="https://www.instagram.com/waofitness.asia/?hl=en" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 cursor-pointer text-white group"
               >
                 <Instagram size={20} className="group-hover:scale-110 transition-transform" />
               </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 flex items-center gap-2 text-white">
              <span className="w-1 h-6 bg-brand-primary rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-4 text-gray-400">
              {navLinks.slice(1).map(link => (
                 <li key={link.name}>
                   <Link to={link.path} className="hover:text-brand-primary transition-colors flex items-center gap-2 group">
                     <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                     {link.name}
                   </Link>
                 </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 flex items-center gap-2 text-white">
              <span className="w-1 h-6 bg-brand-primary rounded-full"></span> Visit Us
            </h4>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <p className="text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="text-lg font-bold text-white group-hover:text-brand-primary transition-colors">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Wao Fitness Chandigarh. Built for greatness.
        </div>
      </footer>

      {/* Sticky Mobile CTAs & Chatbot */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 items-end">
        <Chatbot />
        <a 
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          className="md:hidden bg-brand-primary text-white p-4 rounded-full shadow-[0_4px_20px_rgba(0,123,255,0.5)] flex items-center justify-center animate-bounce border-2 border-white/20"
        >
          <Phone size={24} fill="currentColor" />
        </a>
      </div>
    </div>
  );
};

export default Layout;