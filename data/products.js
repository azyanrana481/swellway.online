export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop',
    description: 'Latest gadgets and electronics'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop',
    description: 'Trendy clothing and accessories'
  },
  {
    id: 'groceries',
    name: 'Groceries',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
    description: 'Fresh food and daily essentials'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
    description: 'Watches, jewelry and more'
  }
];

export const products = [
  // Electronics
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 299999,
    originalPrice: 349999,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.8,
    reviews: 1250,
    description: 'Latest iPhone with advanced camera system and A17 Pro chip.'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 279999,
    originalPrice: 319999,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.7,
    reviews: 890,
    description: 'Premium Android smartphone with S Pen and 200MP camera.'
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    price: 199999,
    originalPrice: 229999,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'electronics',
    rating: 4.9,
    reviews: 567,
    description: 'Ultra-thin laptop with M3 chip and all-day battery life.'
  },

  // Fashion
  {
    id: 4,
    name: 'Nike Air Max 270',
    price: 15999,
    originalPrice: 18999,
    discount: 16,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'fashion',
    rating: 4.6,
    reviews: 2340,
    description: 'Comfortable running shoes with Air Max cushioning.'
  },
  {
    id: 5,
    name: 'Levi\'s 501 Jeans',
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    category: 'fashion',
    rating: 4.4,
    reviews: 1890,
    description: 'Classic straight-fit jeans in premium denim.'
  },
  {
    id: 6,
    name: 'Adidas Hoodie',
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    category: 'fashion',
    rating: 4.5,
    reviews: 1456,
    description: 'Comfortable cotton hoodie with iconic three stripes.'
  },

  // Groceries
  {
    id: 7,
    name: 'Organic Bananas (1kg)',
    price: 299,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
    category: 'groceries',
    rating: 4.3,
    reviews: 234,
    description: 'Fresh organic bananas, rich in potassium and vitamins.'
  },
  {
    id: 8,
    name: 'Basmati Rice (5kg)',
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'groceries',
    rating: 4.7,
    reviews: 567,
    description: 'Premium quality basmati rice with long grains.'
  },
  {
    id: 9,
    name: 'Fresh Milk (1L)',
    price: 149,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    category: 'groceries',
    rating: 4.5,
    reviews: 890,
    description: 'Pure and fresh cow milk, rich in calcium and protein.'
  },

  // Accessories
  {
    id: 10,
    name: 'Apple Watch Series 9',
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    category: 'accessories',
    rating: 4.8,
    reviews: 1123,
    description: 'Advanced smartwatch with health monitoring features.'
  },
  {
    id: 11,
    name: 'Ray-Ban Aviator Sunglasses',
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    category: 'accessories',
    rating: 4.6,
    reviews: 789,
    description: 'Classic aviator sunglasses with UV protection.'
  },
  {
    id: 12,
    name: 'Leather Wallet',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'accessories',
    rating: 4.4,
    reviews: 456,
    description: 'Genuine leather wallet with multiple card slots.'
  }
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const searchProducts = (query) => {
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};
