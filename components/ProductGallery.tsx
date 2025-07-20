import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants.tsx';
import { ProductCategory } from '../types.ts';
import ProductCard from './ProductCard.tsx';
import ScrollAnimator from './ScrollAnimator.tsx';

const ProductGallery: React.FC = () => {
  const [filter, setFilter] = useState<ProductCategory>(ProductCategory.ALL);

  const categories = Object.values(ProductCategory);

  const filteredProducts = useMemo(() => {
    if (filter === ProductCategory.ALL) {
      return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === filter);
  }, [filter]);

  return (
    <section id="products" className="py-20 md:py-32 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollAnimator>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">Наши изделия</h2>
        </ScrollAnimator>
        
        <ScrollAnimator delay={200}>
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300
                  ${filter === category 
                    ? 'bg-amber-500 text-zinc-900' 
                    : 'bg-zinc-800 text-stone-300 hover:bg-zinc-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ScrollAnimator key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;