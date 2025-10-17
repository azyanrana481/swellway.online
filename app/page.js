'use client';
import { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Drawer from '../components/Drawer';
import BannerSlider from '../components/BannerSlider';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className="pb-20 px-4">
        {/* Banner Slider */}
        <div className="mt-4">
          <BannerSlider />
        </div>

        {/* Categories Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
            <Link href="/categories" className="text-primary font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Featured Products</h2>
            <Link href="/products" className="text-primary font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Social Media Links */}
        <section className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/itx_xaibi_?igsh=emw3ajE5YmJlcTFp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            
            <a
              href="https://www.facebook.com/xaibi.rana.2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
