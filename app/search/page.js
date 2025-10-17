'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import Drawer from '../../components/Drawer';
import ProductCard from '../../components/ProductCard';
import { searchProducts, products } from '../../data/products';

export default function SearchPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      const results = searchProducts(query);
      setSearchResults(results);
      
      // Get random suggestions from other products
      const otherProducts = products.filter(p => 
        !results.some(r => r.id === p.id)
      );
      setSuggestions(otherProducts.slice(0, 4));
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} showBack />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className="pb-20 px-4 pt-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Search Results
          </h1>
          {query && (
            <p className="text-gray-600">
              Showing results for "{query}" ({searchResults.length} items found)
            </p>
          )}
        </div>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h2>
            <p className="text-gray-600">Try searching with different keywords.</p>
          </div>
        ) : (
          <div className="text-center py-12 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Start Searching</h2>
            <p className="text-gray-600">Enter a product name or keyword to search.</p>
          </div>
        )}

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestions.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
