import React from 'react';
import { LeatherIcon, HandIcon, QualityIcon } from '../constants.tsx';
import ScrollAnimator from './ScrollAnimator.tsx';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <LeatherIcon />,
      title: 'Отбор кожи',
      description: 'Мы тщательно отбираем лучшие материалы, чтобы каждое изделие было прочным и красивым.'
    },
    {
      icon: <HandIcon />,
      title: 'Ручная работа',
      description: 'Каждая деталь выкраивается и сшивается вручную, что гарантирует уникальность и качество.'
    },
    {
      icon: <QualityIcon />,
      title: 'Контроль качества',
      description: 'Все изделия проходят строгий контроль на каждом этапе, чтобы вы получили безупречный продукт.'
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-zinc-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollAnimator>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-16">Процесс создания</h2>
        </ScrollAnimator>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <ScrollAnimator key={index} delay={index * 200}>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-zinc-900 mb-6 border-2 border-amber-400/20">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-stone-200 mb-3">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;