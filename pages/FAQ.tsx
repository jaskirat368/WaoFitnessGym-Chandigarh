import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="relative bg-brand-surface pt-12 md:pt-32 pb-16 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-gym-gradient opacity-5 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-display font-black uppercase italic text-white mb-4">
            Common Questions
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-brand-surface p-6 rounded-2xl border border-gray-700">
              <h3 className="text-lg font-bold text-brand-primary mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-brand-primary/10 rounded-xl text-center border border-brand-primary/30">
          <p className="text-gray-300 mb-4">Have a question regarding membership plans?</p>
          <a href="tel:+916283117815" className="text-brand-primary font-bold text-xl hover:underline">
            Call +91 62831 17815
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;