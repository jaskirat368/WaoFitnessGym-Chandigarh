import React from 'react';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import ReviewCard from '../components/ReviewCard';
import Button from '../components/Button';
import { PROGRAMS, REVIEWS } from '../constants';
import { MapPin, Trophy, Users, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <Hero />

      {/* Trust Signals Strip */}
      <section className="bg-brand-surface py-12 border-y border-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: <Trophy className="text-brand-primary" size={32} />, title: "Best in Class", desc: "Top Rated Gym" },
             { icon: <Users className="text-brand-primary" size={32} />, title: "Community", desc: "Supportive Vibe" },
             { icon: <ShieldCheck className="text-brand-primary" size={32} />, title: "Certified", desc: "Expert Trainers" },
             { icon: <MapPin className="text-brand-primary" size={32} />, title: "Sector 9-D", desc: "Prime Location" },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center text-center">
               <div className="mb-3">{item.icon}</div>
               <h3 className="font-bold text-brand-text uppercase">{item.title}</h3>
               <p className="text-xs text-brand-muted">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-display font-black uppercase italic mb-4 text-brand-text">
               Our <span className="text-transparent bg-clip-text bg-gym-gradient">Programs</span>
             </h2>
             <p className="text-brand-muted max-w-2xl mx-auto">
               Scientific training methods designed to help you crush your fitness goals.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.slice(0, 3).map((program, idx) => (
              <ProgramCard key={program.id} program={program} index={idx} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button text="View All Programs" to="/programs" variant="outline" />
          </div>
        </div>
      </section>

      {/* Why Choose Us / About Teaser */}
      <section className="py-20 bg-brand-surface clip-path-slant">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic leading-tight text-brand-text">
                  More Than Just <br/> <span className="text-brand-secondary">Metal & Weights</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2022, Wao Fitness isn't just a place to sweat. It's a sanctuary for transformation. 
                  We combine old-school lifting ethics with modern functional science. Wheelchair accessible and beginner-friendly, 
                  we believe fitness is for every body.
                </p>
                <ul className="space-y-3">
                  {['Personalized Nutrition Guidance', 'Injury Management Support', 'Advanced Biomechanics Machines'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-brand-muted">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
                <Button text="About Our Mission" to="/about" />
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-brand-primary rounded-2xl transform rotate-3 blur-sm opacity-20" />
                <img 
                  src="https://content3.jdmagicbox.com/v2/comp/chandigarh/v4/0172px172.x172.221015224226.x9v4/catalogue/wao-fitness-chandigarh-gymnastics-clubs-58slea62wt.jpg" 
                  alt="Trainer helping client at Wao Fitness" 
                  className="relative rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 border border-gray-800"
                />
             </div>
           </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-black uppercase mb-2 text-brand-text">What People Say</h2>
            <div className="flex justify-center items-center gap-2 text-brand-primary">
              <span className="text-2xl font-bold">4.8</span>
              <div className="flex text-yellow-400">★★★★★</div>
              <span className="text-brand-muted text-sm">(1155+ Google Reviews)</span>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
            {REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gym-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic text-white mb-6">
            Stop Thinking. Start Doing.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Your future self is begging you to start today. Visit the best gym in Sector 9-D, Chandigarh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Switched to variant="primary" (Electric Blue) to fix the orange look */}
            <Button text="Call +91 62831 17815" onClick={() => window.location.href='tel:+916283117815'} variant="primary" className="bg-white text-brand-primary hover:text-white hover:bg-black border-2 border-white" />
            <Button text="Get Directions" onClick={() => window.open('https://maps.google.com/?q=SCO+34,+35,+36,+37,+Madhya+Marg,+Sector+9-D,+Chandigarh+160009', '_blank')} variant="outline" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;