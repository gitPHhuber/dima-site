import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-amber-400 font-serif tracking-wider">Мастерская</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-stone-300 hover:text-amber-400 transition-colors duration-200">О нас</a>
            <a href="#products" className="text-stone-300 hover:text-amber-400 transition-colors duration-200">Изделия</a>
            <a href="#process" className="text-stone-300 hover:text-amber-400 transition-colors duration-200">Процесс</a>
            <a href="#contact" className="text-stone-300 hover:text-amber-400 transition-colors duration-200">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;