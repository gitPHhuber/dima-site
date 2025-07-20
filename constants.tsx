import React from 'react';
import { Product, ProductCategory } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Чехол для телефона "Крокодил"',
    description: 'Элегантный чехол из тисненой под крокодила кожи черного цвета. Надежная защита и стильный вид.',
    imageUrl: '/images/e.png',
    category: ProductCategory.CASES,
  },
  {
    id: 2,
    name: 'Кошелек "Классика"',
    description: 'Классический кошелек из натуральной коричневой кожи с застежкой-кнопкой. Прошит вручную.',
    imageUrl: '/images/r.png',
    category: ProductCategory.WALLETS,
  },
  {
    id: 3,
    name: 'Сумка на пояс "Урбан"',
    description: 'Удобная и вместительная сумка на пояс из коричневой кожи. Идеальна для города и путешествий.',
    imageUrl: '/images/u.png',
    category: ProductCategory.BAGS,
  },
  {
    id: 4,
    name: 'Портмоне "Тревелер"',
    description: 'Вместительное портмоне из коричневой кожи для путешествий. Отделения для карт и документов.',
    imageUrl: '/images/a.png',
    category: ProductCategory.WALLETS,
  },
  {
    id: 5,
    name: 'Картхолдер "Индиго"',
    description: 'Компактный картхолдер из синей кожи с белой прошивкой. Минимализм и функциональность.',
    imageUrl: '/images/w.png',
    category: ProductCategory.WALLETS,
  },
  {
    id: 6,
    name: 'Сумка-сэтчел "Изумруд"',
    description: 'Яркая сумка-сэтчел из кожи насыщенного изумрудного цвета. Вместительная и стильная.',
    imageUrl: '/images/p.png',
    category: ProductCategory.BAGS,
  },
   {
    id: 8,
    name: 'Сумка-кроссбоди "Бордо"',
    description: 'Элегантная сумка-кроссбоди из гладкой кожи винного цвета с оригинальной застежкой.',
    imageUrl: '/images/s.png',
    category: ProductCategory.BAGS,
  },
  {
    id: 9,
    name: 'Сумка "Олива"',
    description: 'Практичная и стильная сумка из кожи оливкового цвета. Подойдет на каждый день.',
    imageUrl: '/images/o.png',
    category: ProductCategory.BAGS,
  },
];

export const LeatherIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
    </svg>
);

export const HandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
);

export const QualityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.047-1.225-.46-1.9-.902-1.018-.65-1.59-1.045-2.57-1.674-.996-.638-1.77-1.012-1.51-1.656.244-.593 1.6-5.18 1.6-5.18s.168-.527-.244-.527c-.412 0-.96.244-1.359.488-.56.345-1.017.593-1.474.593-.458 0-.83-.122-1.12-.244s-.56-.366-.56-1.12c0-.61.28-1.01.83-1.36 2.01-1.22 5.06-2.04 5.06-2.04s.41-.16.68 0z" />
    </svg>
);

export const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
    </svg>
);