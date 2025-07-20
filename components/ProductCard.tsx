import React from 'react';
import type { Product } from '../types.ts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
      <div className="aspect-[3/4]">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-stone-200 mb-2">{product.name}</h3>
        <p className="text-stone-400 text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;