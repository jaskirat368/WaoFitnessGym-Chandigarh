import React from 'react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="relative bg-brand-surface pt-12 md:pt-32 pb-16 border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-gym-gradient opacity-5 z-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic text-white mb-4">
            Our Story
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Wao Fitness • Est. 2022 • Chandigarh
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://content3.jdmagicbox.com/v2/comp/chandigarh/v4/0172px172.x172.221015224226.x9v4/catalogue/wao-fitness-chandigarh-gymnastics-clubs-7ewl4wu81a.jpg" alt="Wao Fitness Gym Interior" className="rounded-2xl shadow-xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500" />
          <div>
            <h2 className="text-3xl font-display font-bold uppercase text-brand-primary mb-6">The Wao Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Founded in 2022 right here in Chandigarh, Wao Fitness was born from a simple desire: to create a fitness space that feels safe, motivating, and professional. We aren't just a room full of machines. We are a community of people striving for better health.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Located on Madhya Marg in Sector 9-D, we offer premium facilities without the intimidation factor. Our mission is to provide result-focused fitness in a clean, hygienic, and supportive environment.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Safety First", desc: "We prioritize correct form and injury prevention over ego lifting." },
             { title: "Hygiene", desc: "Clean equipment, spotless changing rooms, and proper ventilation." },
             { title: "Inclusivity", desc: "Wheelchair accessible and welcoming to all fitness levels." }
           ].map((val, idx) => (
             <div key={idx} className="bg-brand-surface p-8 rounded-2xl border-l-4 border-brand-primary hover:bg-gray-800 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3 uppercase">{val.title}</h3>
               <p className="text-brand-muted">{val.desc}</p>
             </div>
           ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-brand-surface p-12 rounded-3xl border border-gray-800">
           <h2 className="text-2xl font-bold text-white mb-6 uppercase">Ready to meet the team?</h2>
           <Button text="Visit Us Today" to="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;