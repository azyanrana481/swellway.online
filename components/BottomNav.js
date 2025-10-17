'use client';
import { Home, Grid3X3, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function BottomNav() {
  const pathname = usePathname();
  const { currentUser } = useAuth();
  const { getCartItemsCount } = useCart();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/categories', icon: Grid3X3, label: 'Categories' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart', badge: getCartItemsCount() },
    { href: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <div className="relative">
                {item.label === 'Profile' && currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <Icon size={24} />
                )}
                {item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
