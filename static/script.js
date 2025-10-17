// Enhanced Swellway Store JavaScript
// Complete product catalog
const products = [
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
        description: 'Latest iPhone with advanced camera system, A17 Pro chip, and titanium design. Features ProRAW photography and 4K video recording.',
        inStock: true,
        featured: true
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
        reviews: 980,
        description: 'Premium Android smartphone with S Pen, 200MP camera, and AI-powered features. Perfect for productivity and creativity.',
        inStock: true,
        featured: true
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
        reviews: 756,
        description: 'Ultra-thin laptop with M3 chip, 18-hour battery life, and stunning Retina display. Perfect for work and creativity.',
        inStock: true,
        featured: false
    },
    {
        id: 4,
        name: 'Sony WH-1000XM5',
        price: 24999,
        originalPrice: 29999,
        discount: 17,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        category: 'electronics',
        rating: 4.6,
        reviews: 1123,
        description: 'Industry-leading noise canceling headphones with premium sound quality and 30-hour battery life.',
        inStock: true,
        featured: true
    },
    {
        id: 5,
        name: 'iPad Pro 12.9"',
        price: 159999,
        originalPrice: 179999,
        discount: 11,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        category: 'electronics',
        rating: 4.8,
        reviews: 892,
        description: 'Professional tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.',
        inStock: true,
        featured: false
    },

    // Fashion
    {
        id: 6,
        name: 'Designer Dress',
        price: 4999,
        originalPrice: 7999,
        discount: 37,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
        category: 'fashion',
        rating: 4.5,
        reviews: 234,
        description: 'Elegant designer dress perfect for special occasions. Made with premium fabric and attention to detail.',
        inStock: true,
        featured: true
    },
    {
        id: 7,
        name: 'Casual T-Shirt',
        price: 1299,
        originalPrice: 1799,
        discount: 28,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        category: 'fashion',
        rating: 4.3,
        reviews: 456,
        description: 'Comfortable cotton t-shirt for everyday wear. Available in multiple colors and sizes.',
        inStock: true,
        featured: false
    },
    {
        id: 8,
        name: 'Denim Jeans',
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
        category: 'fashion',
        rating: 4.4,
        reviews: 678,
        description: 'Premium denim jeans with perfect fit and durability. Classic style that never goes out of fashion.',
        inStock: true,
        featured: true
    },
    {
        id: 9,
        name: 'Leather Jacket',
        price: 8999,
        originalPrice: 12999,
        discount: 31,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
        category: 'fashion',
        rating: 4.7,
        reviews: 345,
        description: 'Genuine leather jacket with modern design. Perfect for adding style to any outfit.',
        inStock: true,
        featured: false
    },

    // Groceries
    {
        id: 10,
        name: 'Organic Fruits Pack',
        price: 1299,
        originalPrice: 1599,
        discount: 19,
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop',
        category: 'groceries',
        rating: 4.6,
        reviews: 156,
        description: 'Fresh organic fruits delivered daily. Includes seasonal fruits rich in vitamins and nutrients.',
        inStock: true,
        featured: true
    },
    {
        id: 11,
        name: 'Fresh Vegetables',
        price: 899,
        originalPrice: 1199,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop',
        category: 'groceries',
        rating: 4.5,
        reviews: 234,
        description: 'Farm-fresh vegetables picked daily. Perfect for healthy cooking and nutritious meals.',
        inStock: true,
        featured: false
    },
    {
        id: 12,
        name: 'Dairy Products',
        price: 599,
        originalPrice: 799,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
        category: 'groceries',
        rating: 4.4,
        reviews: 189,
        description: 'Fresh dairy products including milk, cheese, and yogurt. Sourced from local farms.',
        inStock: true,
        featured: true
    },

    // Accessories
    {
        id: 13,
        name: 'Smart Watch',
        price: 15999,
        originalPrice: 19999,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        category: 'accessories',
        rating: 4.4,
        reviews: 445,
        description: 'Advanced smartwatch with health monitoring, GPS, and long battery life. Compatible with all smartphones.',
        inStock: true,
        featured: true
    },
    {
        id: 14,
        name: 'Designer Sunglasses',
        price: 2999,
        originalPrice: 4499,
        discount: 33,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        category: 'accessories',
        rating: 4.3,
        reviews: 267,
        description: 'Stylish designer sunglasses with UV protection. Perfect accessory for any outfit.',
        inStock: true,
        featured: false
    },
    {
        id: 15,
        name: 'Leather Wallet',
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        category: 'accessories',
        rating: 4.5,
        reviews: 334,
        description: 'Premium leather wallet with multiple card slots and RFID protection. Compact and stylish design.',
        inStock: true,
        featured: true
    }
];

// Categories data
const categories = [
    {
        id: 'electronics',
        name: 'Electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop',
        description: 'Latest gadgets and electronics',
        itemCount: products.filter(p => p.category === 'electronics').length
    },
    {
        id: 'fashion',
        name: 'Fashion',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop',
        description: 'Trendy clothing and accessories',
        itemCount: products.filter(p => p.category === 'fashion').length
    },
    {
        id: 'groceries',
        name: 'Groceries',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
        description: 'Fresh food and daily essentials',
        itemCount: products.filter(p => p.category === 'groceries').length
    },
    {
        id: 'accessories',
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
        description: 'Watches, jewelry and more',
        itemCount: products.filter(p => p.category === 'accessories').length
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('swellwayCart')) || [];
let currentSlide = 0;
let slideInterval;
let currentUser = JSON.parse(localStorage.getItem('swellwayUser')) || null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    startSlideshow();
    updateUserProfile();
});

// Banner slideshow functions
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
    updateSlideIndicators();
}

function nextSlide() {
    const slider = document.getElementById('bannerSlider');
    const totalSlides = 3;
    currentSlide = (currentSlide + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateSlideIndicators();
}

function previousSlide() {
    const slider = document.getElementById('bannerSlider');
    const totalSlides = 3;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateSlideIndicators();
    resetSlideInterval();
}

function goToSlide(index) {
    const slider = document.getElementById('bannerSlider');
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateSlideIndicators();
    resetSlideInterval();
}

function updateSlideIndicators() {
    for (let i = 0; i < 3; i++) {
        const indicator = document.getElementById(`indicator-${i}`);
        if (indicator) {
            indicator.classList.toggle('active', i === currentSlide);
        }
    }
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Continue with more functions...
// Show product details
function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content max-w-2xl">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold gradient-text">${product.name}</h2>
                <button onclick="this.closest('.modal').remove()" class="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-cover rounded-xl">
                    ${product.discount ? `<div class="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">${product.discount}% OFF</div>` : ''}
                </div>
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-3xl font-bold text-primary">Rs. ${product.price.toLocaleString()}</span>
                        ${product.originalPrice ? `
                            <span class="text-xl text-gray-500 line-through">Rs. ${product.originalPrice.toLocaleString()}</span>
                        ` : ''}
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400 mr-2">
                            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span class="text-gray-600">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <p class="text-gray-700 mb-6">${product.description}</p>
                    <div class="flex items-center gap-4 mb-6">
                        <span class="font-medium">Quantity:</span>
                        <div class="quantity-selector">
                            <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                            <span class="quantity-display" id="productQuantity">1</span>
                            <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="addMultipleToCart(${product.id}); this.closest('.modal').remove();" 
                                class="btn-primary flex-1 py-3 ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}" 
                                ${!product.inStock ? 'disabled' : ''}>
                            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                            </svg>
                            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button onclick="addToWishlist(${product.id})" class="p-3 border-2 border-gray-300 rounded-xl hover:border-primary hover:text-primary transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function changeQuantity(change) {
    const quantityElement = document.getElementById('productQuantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;
}

function addMultipleToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('productQuantity').textContent);
    
    if (product && product.inStock) {
        for (let i = 0; i < quantity; i++) {
            cart.push(product);
        }
        localStorage.setItem('swellwayCart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`Added ${quantity} item(s) to cart!`);
    }
}

function addToWishlist(productId) {
    showNotification('Added to wishlist!');
}

// Show cart
function showCart() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    
    const cartItems = cart.reduce((acc, item) => {
        const existing = acc.find(i => i.id === item.id);
        if (existing) {
            existing.quantity++;
        } else {
            acc.push({...item, quantity: 1});
        }
        return acc;
    }, []);
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    modal.innerHTML = `
        <div class="modal-content max-w-4xl">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold gradient-text">Shopping Cart</h2>
                <button onclick="this.closest('.modal').remove()" class="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            ${cartItems.length === 0 ? `
                <div class="text-center py-12">
                    <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                    </svg>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                    <p class="text-gray-600 mb-6">Add some products to get started!</p>
                    <button onclick="this.closest('.modal').remove(); showCategories();" class="btn-primary">
                        Start Shopping
                    </button>
                </div>
            ` : `
                <div class="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    ${cartItems.map(item => `
                        <div class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                            <div class="flex-1">
                                <h4 class="font-semibold text-gray-900">${item.name}</h4>
                                <p class="text-primary font-bold text-lg">Rs. ${item.price.toLocaleString()}</p>
                                <div class="flex items-center gap-2 mt-2">
                                    <span class="text-sm text-gray-600">Qty: ${item.quantity}</span>
                                    <span class="text-sm font-medium text-gray-900">Total: Rs. ${(item.price * item.quantity).toLocaleString()}</span>
                                </div>
                            </div>
                            <button onclick="removeFromCart(${item.id}); this.closest('.modal').remove(); showCart();" 
                                    class="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                </div>
                <div class="border-t border-gray-200 pt-6">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-2xl font-bold text-gray-900">Total: Rs. ${total.toLocaleString()}</span>
                        <div class="text-sm text-gray-600">${cart.length} item(s)</div>
                    </div>
                    <div class="flex gap-3">
                        <button onclick="clearCart(); this.closest('.modal').remove();" class="btn-secondary flex-1">
                            Clear Cart
                        </button>
                        <button onclick="checkout(); this.closest('.modal').remove();" class="btn-primary flex-1">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            `}
        </div>
    `;
    document.body.appendChild(modal);
    updateNavigation('cart');
}

// Remove from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('swellwayCart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Removed from cart');
    }
}

// Clear cart
function clearCart() {
    cart = [];
    localStorage.setItem('swellwayCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Cart cleared');
}

// Checkout
function checkout() {
    if (cart.length === 0) return;
    
    showNotification('Order placed successfully! 🎉');
    cart = [];
    localStorage.setItem('swellwayCart', JSON.stringify(cart));
    updateCartCount();
}

// Show search
function showSearch() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content max-w-2xl">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold gradient-text">Search Products</h2>
                <button onclick="this.closest('.modal').remove()" class="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="relative mb-6">
                <input type="text" placeholder="Search for products..." 
                       class="custom-input w-full pl-12" 
                       oninput="searchProducts(this.value)" 
                       autofocus>
                <svg class="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <div id="searchResults" class="max-h-96 overflow-y-auto"></div>
        </div>
    `;
    document.body.appendChild(modal);
    updateNavigation('search');
}

// Search products
function searchProducts(query) {
    const results = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const resultsContainer = document.getElementById('searchResults');
    
    if (query.length === 0) {
        resultsContainer.innerHTML = '<p class="text-gray-500 text-center py-8">Start typing to search products...</p>';
        return;
    }
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="text-gray-500 text-center py-8">No products found for your search.</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(product => `
        <div class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl mb-3 cursor-pointer hover:shadow-md hover:border-primary transition-all" onclick="this.closest('.modal').remove(); showProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1">
                <h4 class="font-semibold text-gray-900">${product.name}</h4>
                <p class="text-primary font-bold">Rs. ${product.price.toLocaleString()}</p>
                <div class="flex items-center mt-1">
                    <div class="flex text-yellow-400 text-sm mr-2">
                        ${'★'.repeat(Math.floor(product.rating))}
                    </div>
                    <span class="text-xs text-gray-600">(${product.reviews})</span>
                </div>
            </div>
            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn-primary text-sm px-4 py-2">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Show login
function showLogin() {
    showNotification('Login feature coming soon!');
}

// Show orders
function showOrders() {
    showNotification('Orders feature coming soon!');
}

// Show profile
function showProfile() {
    showNotification('Profile feature coming soon!');
}

// Show offers
function showOffers() {
    showNotification('Special offers coming soon!');
}

// Load featured products on initial load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts(null, true); // Load featured products initially
});
