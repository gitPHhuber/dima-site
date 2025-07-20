import React from 'react';
import ScrollAnimator from './ScrollAnimator.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-zinc-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollAnimator className="rounded-lg overflow-hidden shadow-2xl">
            <img src="/images/f.png" alt="Мастер за работой" className="w-full h-full object-cover" />
          </ScrollAnimator>
          <div>
            <ScrollAnimator>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">Наследие и мастерство</h2>
            </ScrollAnimator>
            <ScrollAnimator delay={200}>
                <p className="text-stone-300 mb-4 leading-relaxed">
                  Приветствую! Я — ремесленник, посвятивший свою жизнь искусству работы с кожей. Каждое изделие в моей мастерской — это не просто аксессуар, а история, рассказанная через стежки и фактуру материала.
                </p>
            </ScrollAnimator>
            <ScrollAnimator delay={300}>
                <p className="text-stone-300 mb-4 leading-relaxed">
                  Я использую только лучшие сорта кожи и проверенные временем технологии, чтобы создавать вещи, которые будут служить вам верой и правдой долгие годы, приобретая со временем лишь благородство и уникальный характер.
                </p>
            </ScrollAnimator>
            <ScrollAnimator delay={400}>
                <p className="text-stone-300 leading-relaxed">
                  Моя цель — возродить ценность ручного труда и подарить вам частичку тепла и аутентичности в мире массового производства.
                </p>
            </ScrollAnimator>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;