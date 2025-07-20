import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white" id="home">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528913233263-5b837c44a30a?q=80&w=1920&h=1080&fit=crop&crop=entropy')" }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-amber-50 animate-fade-in-up" style={{ animationDelay: '200ms', animationDuration: '1s' }}>Искусство в каждой детали</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-stone-300 animate-fade-in-up" style={{ animationDelay: '500ms', animationDuration: '1s' }}>
          Изделия из натуральной кожи, созданные вручную с любовью и вниманием к традициям.
        </p>
        <a 
          href="#products" 
          className="mt-8 inline-block bg-amber-500 text-zinc-900 font-bold py-3 px-8 rounded-sm hover:bg-amber-600 transition-transform duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '800ms', animationDuration: '1s' }}
        >
          Смотреть коллекцию
        </a>
      </div>
    </section>
  );
};

export default Hero;