import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl text-gray-400 text-sm">
        <h1 className="text-3xl text-white font-bold mb-8">Legal & Disclaimer</h1>
        
        <section className="mb-8">
          <h2 className="text-xl text-white font-bold mb-4">1. General Disclaimer</h2>
          <p className="mb-4">
            The content provided on this website is for informational purposes only. Wao Fitness makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-white font-bold mb-4">2. Medical Disclaimer</h2>
          <p className="mb-4">
            You should consult your physician or other health care professional before starting this or any other fitness program to determine if it is right for your needs. Do not start this fitness program if your physician or health care provider advises against it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-white font-bold mb-4">3. Privacy Policy</h2>
          <p className="mb-4">
            We value your privacy. Any personal information provided to us (such as through our contact forms or in person) is kept confidential and is not sold to third parties. We use your data solely to communicate with you regarding our services.
          </p>
        </section>
        
        <p>© {new Date().getFullYear()} Wao Fitness. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Legal;