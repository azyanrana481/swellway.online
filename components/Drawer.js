'use client';
import { User, Package, LogOut, X } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function Drawer({ isOpen, onClose }) {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* User Info */}
          {currentUser && (
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User size={24} />
                  </div>
                )}
                <div>
                  <p className="font-medium">{currentUser.displayName || 'User'}</p>
                  <p className="text-sm text-gray-500">{currentUser.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="flex-1 py-4">
            <Link
              href="/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            
            <Link
              href="/orders"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors"
            >
              <Package size={20} />
              <span>Customer Orders</span>
            </Link>
          </div>

          {/* Logout Button */}
          {currentUser && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
