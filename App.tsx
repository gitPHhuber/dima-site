import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import ProductGallery from './components/ProductGallery.tsx';
import Process from './components/Process.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Preloader from './components/Preloader.tsx';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={`bg-zinc-900 text-stone-300 antialiased transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <ProductGallery />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;