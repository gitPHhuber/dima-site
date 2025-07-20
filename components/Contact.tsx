import React from 'react';
import { TelegramIcon, InstagramIcon } from '../constants.tsx';
import ScrollAnimator from './ScrollAnimator.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <ScrollAnimator>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">Свяжитесь с нами</h2>
        </ScrollAnimator>
        <ScrollAnimator delay={200}>
          <p className="max-w-2xl mx-auto text-lg text-stone-300 mb-10">
            Готовы сделать заказ или есть вопросы? Напишите мне в социальных сетях. Я с радостью помогу вам выбрать или создать идеальное изделие.
          </p>
        </ScrollAnimator>
        <ScrollAnimator delay={400}>
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://t.me/Gos_Duma1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-sky-500 text-white font-semibold py-3 px-6 rounded-sm hover:bg-sky-600 transition-colors duration-300 transform hover:scale-105"
            >
              <TelegramIcon />
              <span>Telegram</span>
            </a>
            <a 
              href="https://instagram.com/example" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-sm hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default Contact;