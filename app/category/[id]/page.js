'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import BottomNav from '../../../components/BottomNav';
import Drawer from '../../../components/Drawer';
import ProductCard from '../../../components/ProductCard';
import { categories, getProductsByCategory } from '../../../data/products';

export default function CategoryPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const params = useParams();
  const categoryId = params.id;
  
  const category = categories.find(cat => cat.id === categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
          <p className="text-gray-600">The requested category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} showBack />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className="pb-20 px-4 pt-4">
        {/* Category Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-32 md:h-48 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h1>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h2>
            <p className="text-gray-600">Products will be added to this category soon.</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
