import React from 'react';
import { TelegramIcon, InstagramIcon } from '../constants.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950/50 border-t border-zinc-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-sm">
            &copy; {currentYear} Мастерская кожаных изделий. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://t.me/Gos_Duma1" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-sky-500 transition-colors">
              <span className="sr-only">Telegram</span>
              <TelegramIcon />
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-pink-500 transition-colors">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;