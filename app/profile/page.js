'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import Drawer from '../../components/Drawer';
import { useAuth } from '../../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Camera, Edit2, User, Mail, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    photoURL: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
      return;
    }
    
    setFormData({
      displayName: currentUser.displayName || '',
      photoURL: currentUser.photoURL || ''
    });
  }, [currentUser, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (!currentUser) return;
    
    setIsLoading(true);
    
    try {
      await updateProfile(currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update error:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      displayName: currentUser?.displayName || '',
      photoURL: currentUser?.photoURL || ''
    });
    setIsEditing(false);
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Please Sign In</h2>
          <p className="text-gray-600 mb-4">You need to be signed in to view your profile.</p>
          <button
            onClick={() => router.push('/login')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsDrawerOpen(true)} showBack />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className="pb-20">
        {/* Profile Header */}
        <div className="bg-primary text-white px-4 py-8">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              {formData.photoURL || currentUser.photoURL ? (
                <img
                  src={formData.photoURL || currentUser.photoURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 flex items-center justify-center border-4 border-white shadow-lg">
                  <User size={48} />
                </div>
              )}
              {isEditing && (
                <button className="absolute bottom-2 right-2 bg-white text-primary p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  <Camera size={20} />
                </button>
              )}
            </div>
            
            {isEditing ? (
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleInputChange}
                className="text-2xl font-bold bg-transparent border-b-2 border-white text-center text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                placeholder="Enter your name"
              />
            ) : (
              <h1 className="text-2xl font-bold">
                {currentUser.displayName || 'User'}
              </h1>
            )}
          </div>
        </div>

        <div className="px-4 py-6">
          {/* Profile Information */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Edit2 size={18} />
                    <span>Edit</span>
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-gray-400" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Name</p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  ) : (
                    <p className="font-medium text-gray-900">
                      {currentUser.displayName || 'Not set'}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{currentUser.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium text-gray-900">
                    {new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {isEditing && (
                <div className="flex items-center gap-3">
                  <Camera className="text-gray-400" size={20} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Profile Picture URL</p>
                    <input
                      type="url"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter image URL"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            
            <div className="p-6 space-y-3">
              <button
                onClick={() => router.push('/orders')}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <p className="font-medium text-gray-900">View Orders</p>
                <p className="text-sm text-gray-500">Check your order history</p>
              </button>
              
              <button
                onClick={() => router.push('/cart')}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <p className="font-medium text-gray-900">Shopping Cart</p>
                <p className="text-sm text-gray-500">View items in your cart</p>
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
