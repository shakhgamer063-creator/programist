// ==========================================
// Product Database
// ==========================================
const products = [
    // Fruits
    { id: 1, name: 'Fresh Apples', category: 'fruits', price: 4.99, originalPrice: 6.99, icon: '🍎', description: 'Crispy and sweet red apples', badge: 'Sale' },
    { id: 2, name: 'Ripe Bananas', category: 'fruits', price: 2.99, originalPrice: null, icon: '🍌', description: 'Perfect for smoothies', badge: null },
    { id: 3, name: 'Orange Bundle', category: 'fruits', price: 5.49, originalPrice: 7.49, icon: '🍊', description: 'Fresh citrus oranges', badge: 'Sale' },
    { id: 4, name: 'Sweet Strawberries', category: 'fruits', price: 6.99, originalPrice: null, icon: '🍓', description: 'Organic strawberries', badge: null },
    { id: 5, name: 'Juicy Watermelon', category: 'fruits', price: 8.99, originalPrice: 11.99, icon: '🍉', description: 'Large seedless watermelon', badge: 'Sale' },
    { id: 6, name: 'Fresh Grapes', category: 'fruits', price: 5.99, originalPrice: null, icon: '🍇', description: 'Green seedless grapes', badge: null },
    { id: 7, name: 'Ripe Mango', category: 'fruits', price: 3.99, originalPrice: null, icon: '🥭', description: 'Sweet tropical mango', badge: null },
    { id: 8, name: 'Fresh Pineapple', category: 'fruits', price: 4.49, originalPrice: 5.99, icon: '🍍', description: 'Sweet golden pineapple', badge: 'Sale' },

    // Vegetables
    { id: 9, name: 'Fresh Carrots', category: 'vegetables', price: 2.49, originalPrice: null, icon: '🥕', description: 'Organic carrots bundle', badge: null },
    { id: 10, name: 'Broccoli Crown', category: 'vegetables', price: 3.99, originalPrice: 4.99, icon: '🥦', description: 'Fresh green broccoli', badge: 'Sale' },
    { id: 11, name: 'Fresh Tomatoes', category: 'vegetables', price: 3.49, originalPrice: null, icon: '🍅', description: 'Vine-ripened tomatoes', badge: null },
    { id: 12, name: 'Green Lettuce', category: 'vegetables', price: 2.99, originalPrice: null, icon: '🥬', description: 'Crispy fresh lettuce', badge: null },
    { id: 13, name: 'Bell Peppers', category: 'vegetables', price: 4.99, originalPrice: 6.49, icon: '🫑', description: 'Mixed color peppers', badge: 'Sale' },
    { id: 14, name: 'Fresh Cucumber', category: 'vegetables', price: 1.99, originalPrice: null, icon: '🥒', description: 'Crunchy cucumbers', badge: null },
    { id: 15, name: 'Red Onions', category: 'vegetables', price: 2.29, originalPrice: null, icon: '🧅', description: 'Sweet red onions', badge: null },
    { id: 16, name: 'Fresh Potatoes', category: 'vegetables', price: 3.99, originalPrice: null, icon: '🥔', description: 'Russet potatoes 5lb bag', badge: null },

    // Dairy
    { id: 17, name: 'Fresh Milk', category: 'dairy', price: 4.99, originalPrice: null, icon: '🥛', description: 'Whole milk gallon', badge: null },
    { id: 18, name: 'Cheddar Cheese', category: 'dairy', price: 5.99, originalPrice: 7.49, icon: '🧀', description: 'Aged cheddar block', badge: 'Sale' },
    { id: 19, name: 'Greek Yogurt', category: 'dairy', price: 3.49, originalPrice: null, icon: '🥛', description: 'Plain Greek yogurt', badge: null },
    { id: 20, name: 'Fresh Butter', category: 'dairy', price: 4.49, originalPrice: null, icon: '🧈', description: 'Unsalted butter', badge: null },
    { id: 21, name: 'Ice Cream', category: 'dairy', price: 6.99, originalPrice: 8.99, icon: '🍦', description: 'Vanilla ice cream', badge: 'Sale' },
    { id: 22, name: 'Fresh Eggs', category: 'dairy', price: 5.49, originalPrice: null, icon: '🥚', description: 'Dozen large eggs', badge: null },

    // Bakery
    { id: 23, name: 'Fresh Bread', category: 'bakery', price: 3.49, originalPrice: null, icon: '🍞', description: 'Whole wheat loaf', badge: null },
    { id: 24, name: 'Croissants', category: 'bakery', price: 5.99, originalPrice: 7.99, icon: '🥐', description: 'Butter croissants 6-pack', badge: 'Sale' },
    { id: 25, name: 'Bagels', category: 'bakery', price: 4.49, originalPrice: null, icon: '🥯', description: 'Plain bagels 6-pack', badge: null },
    { id: 26, name: 'Baguette', category: 'bakery', price: 2.99, originalPrice: null, icon: '🥖', description: 'French baguette', badge: null },
    { id: 27, name: 'Donuts', category: 'bakery', price: 6.49, originalPrice: null, icon: '🍩', description: 'Glazed donuts dozen', badge: null },
    { id: 28, name: 'Muffins', category: 'bakery', price: 5.99, originalPrice: 7.49, icon: '🧁', description: 'Blueberry muffins 6-pack', badge: 'Sale' },

    // Meat
    { id: 29, name: 'Chicken Breast', category: 'meat', price: 9.99, originalPrice: null, icon: '🍗', description: 'Fresh chicken breast', badge: null },
    { id: 30, name: 'Beef Steak', category: 'meat', price: 15.99, originalPrice: 19.99, icon: '🥩', description: 'Premium ribeye steak', badge: 'Sale' },
    { id: 31, name: 'Bacon', category: 'meat', price: 7.99, originalPrice: null, icon: '🥓', description: 'Thick cut bacon', badge: null },
    { id: 32, name: 'Ground Beef', category: 'meat', price: 8.49, originalPrice: null, icon: '🍖', description: 'Lean ground beef', badge: null },
    { id: 33, name: 'Pork Chops', category: 'meat', price: 11.99, originalPrice: 14.99, icon: '🥩', description: 'Center cut pork chops', badge: 'Sale' },
    { id: 34, name: 'Salmon Fillet', category: 'meat', price: 16.99, originalPrice: null, icon: '🐟', description: 'Fresh Atlantic salmon', badge: null },

    // Beverages
    { id: 35, name: 'Orange Juice', category: 'beverages', price: 5.49, originalPrice: null, icon: '🧃', description: 'Fresh squeezed OJ', badge: null },
    { id: 36, name: 'Soda Pack', category: 'beverages', price: 6.99, originalPrice: 8.99, icon: '🥤', description: '12-pack cola', badge: 'Sale' },
    { id: 37, name: 'Bottled Water', category: 'beverages', price: 4.99, originalPrice: null, icon: '💧', description: '24-pack spring water', badge: null },
    { id: 38, name: 'Energy Drink', category: 'beverages', price: 3.49, originalPrice: null, icon: '⚡', description: 'Sugar-free energy', badge: null },
    { id: 39, name: 'Coffee Beans', category: 'beverages', price: 12.99, originalPrice: 15.99, icon: '☕', description: 'Premium arabica beans', badge: 'Sale' },
    { id: 40, name: 'Green Tea', category: 'beverages', price: 7.99, originalPrice: null, icon: '🍵', description: 'Organic green tea box', badge: null },

    // Snacks
    { id: 41, name: 'Potato Chips', category: 'snacks', price: 3.99, originalPrice: null, icon: '🥔', description: 'Classic salted chips', badge: null },
    { id: 42, name: 'Popcorn', category: 'snacks', price: 4.49, originalPrice: 5.99, icon: '🍿', description: 'Butter popcorn', badge: 'Sale' },
    { id: 43, name: 'Chocolate Bar', category: 'snacks', price: 2.49, originalPrice: null, icon: '🍫', description: 'Milk chocolate bar', badge: null },
    { id: 44, name: 'Cookies', category: 'snacks', price: 5.99, originalPrice: null, icon: '🍪', description: 'Chocolate chip cookies', badge: null },
    { id: 45, name: 'Pretzels', category: 'snacks', price: 3.49, originalPrice: 4.49, icon: '🥨', description: 'Salted pretzel bag', badge: 'Sale' },
    { id: 46, name: 'Mixed Nuts', category: 'snacks', price: 8.99, originalPrice: null, icon: '🥜', description: 'Roasted mixed nuts', badge: null },
    { id: 47, name: 'Candy Mix', category: 'snacks', price: 6.49, originalPrice: null, icon: '🍬', description: 'Assorted candy bag', badge: null },
    { id: 48, name: 'Granola Bars', category: 'snacks', price: 5.49, originalPrice: 6.99, icon: '🌾', description: 'Protein granola bars', badge: 'Sale' }
];

// ==========================================
// State Management
// ==========================================
let cart = [];
let currentCategory = 'all';
let currentView = 'grid';
let searchQuery = '';

// ==========================================
// Theme Management
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==========================================
// Category Management
// ==========================================
const categoryButtons = document.querySelectorAll('.category-btn');
const sectionTitle = document.getElementById('sectionTitle');

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        
        // Update section title
        const categoryText = btn.querySelector('span:last-child').textContent;
        sectionTitle.textContent = categoryText;
        
        renderProducts();
    });
});

// ==========================================
// View Toggle
// ==========================================
const viewButtons = document.querySelectorAll('.view-btn');
const shelfContainer = document.getElementById('shelfContainer');

viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        
        if (currentView === 'list') {
            shelfContainer.classList.add('list-view');
        } else {
            shelfContainer.classList.remove('list-view');
        }
        
        renderProducts();
    });
});

// ==========================================
// Search Functionality
// ==========================================
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
});

// ==========================================
// Product Rendering
// ==========================================
function renderProducts() {
    const container = document.getElementById('shelfContainer');
    const emptyState = document.getElementById('emptyState');
    
    // Filter products
    let filteredProducts = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                            product.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    // Show empty state if no products
    if (filteredProducts.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Group products by category for shelf display
    const groupedProducts = {};
    filteredProducts.forEach(product => {
        if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = [];
        }
        groupedProducts[product.category].push(product);
    });
    
    // Render shelves
    container.innerHTML = '';
    
    Object.keys(groupedProducts).forEach(category => {
        const shelf = createShelf(category, groupedProducts[category]);
        container.appendChild(shelf);
    });
}

function createShelf(category, products) {
    const shelf = document.createElement('div');
    shelf.className = 'shelf';
    
    const categoryNames = {
        'fruits': '🍎 Fresh Fruits',
        'vegetables': '🥕 Fresh Vegetables',
        'dairy': '🥛 Dairy Products',
        'bakery': '🍞 Bakery Items',
        'meat': '🥩 Meat & Seafood',
        'beverages': '🥤 Beverages',
        'snacks': '🍿 Snacks & Treats'
    };
    
    shelf.innerHTML = `
        <h3 class="shelf-label">${categoryNames[category]}</h3>
        <div class="shelf-board">
            <div class="products-grid">
                ${products.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
    
    return shelf;
}

function createProductCard(product) {
    const inCart = cart.find(item => item.id === product.id);
    const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    const originalPriceHTML = product.originalPrice ? 
        `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : '';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${badgeHTML}
                ${product.icon}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h4 class="product-name">${product.name}</h4>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-footer">
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${originalPriceHTML}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// Cart Management
// ==========================================
const cartToggle = document.getElementById('cartToggle');
const cartContainer = document.getElementById('cartContainer');
const closeCart = document.getElementById('closeCart');
const cartButton = document.getElementById('cartButton');

cartToggle.addEventListener('click', () => {
    cartContainer.classList.toggle('open');
});

cartButton.addEventListener('click', () => {
    cartContainer.classList.add('open');
});

closeCart.addEventListener('click', () => {
    cartContainer.classList.remove('open');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartContainer.contains(e.target) && !cartButton.contains(e.target)) {
        cartContainer.classList.remove('open');
    }
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartBadge = document.getElementById('cartBadge');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    // Update counts
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartBadge.textContent = totalItems;
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
    
    // Update cart toggle total
    document.querySelector('.cart-total').textContent = `$${total.toFixed(2)}`;
    
    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M27 7L21.68 14H10C7.8 14 6 15.8 6 18V61C6 63.2 7.8 65 10 65H70C72.2 65 74 63.2 74 61V18C74 15.8 72.2 14 70 14H58.32L53 7H27Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ==========================================
// Checkout
// ==========================================
const checkoutBtn = document.getElementById('checkoutBtn');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalWithTax = (total * 1.1).toFixed(2);
    
    showToast(`Order placed! Total: $${totalWithTax}`, 3000);
    
    // Clear cart after delay
    setTimeout(() => {
        cart = [];
        updateCart();
        cartContainer.classList.remove('open');
    }, 2000);
});

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to close cart
        if (e.key === 'Escape') {
            cartContainer.classList.remove('open');
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// Performance Optimization
// ==========================================
// Debounce search input
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    }, 300);
});

// Lazy load images (if real images were used)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    // Observe product images
    document.querySelectorAll('.product-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Local Storage Persistence
// ==========================================
// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Update cart save on changes
const originalAddToCart = addToCart;
addToCart = function(...args) {
    originalAddToCart.apply(this, args);
    saveCart();
};

const originalRemoveFromCart = removeFromCart;
removeFromCart = function(...args) {
    originalRemoveFromCart.apply(this, args);
    saveCart();
};

const originalUpdateQuantity = updateQuantity;
updateQuantity = function(...args) {
    originalUpdateQuantity.apply(this, args);
    saveCart();
};

// Load cart on page load
loadCart();
