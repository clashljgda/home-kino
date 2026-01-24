// Sample listings data
const sampleListings = [
    {
        id: 1,
        name: "Vintage Balenciaga Trench Coat",
        description: "Classic black trench coat from early 2000s collection",
        price: 450.00,
        category: "clothing",
        sellerId: "@vintage_fashion_dealer"
    },
    {
        id: 2,
        name: "Cévennes Leather Bag",
        description: "Genuine leather crossbody bag in excellent condition",
        price: 280.00,
        category: "accessories",
        sellerId: "@luxury_accessories"
    },
    {
        id: 3,
        name: "Balenciaga Triple S Sneakers",
        description: "Size 9, worn only twice, pristine condition",
        price: 320.00,
        category: "shoes",
        sellerId: "@sneaker_collector"
    },
    {
        id: 4,
        name: "Designer Blazer",
        description: "Minimalist cut blazer in beige color",
        price: 180.00,
        category: "clothing",
        sellerId: "@style_curator"
    }
];

// DOM Elements
const listingsGrid = document.getElementById('listingsGrid');
const adminPanel = document.getElementById('adminPanel');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero section
    document.querySelector('.hero-title').classList.add('fade-in');
    document.querySelector('.hero-subtitle').classList.add('fade-in');

    renderListings(sampleListings);

    // Add scroll animation
    window.addEventListener('scroll', animateOnScroll);
});

// Render listings to the grid
function renderListings(listings) {
    listingsGrid.innerHTML = '';

    listings.forEach((listing, index) => {
        const listingCard = document.createElement('div');
        listingCard.className = 'listing-card slide-in';

        // Add animation delay for stagger effect
        listingCard.style.animationDelay = `${index * 0.1}s`;

        listingCard.innerHTML = `
            <div class="listing-image">
                [Product Image]
            </div>
            <h3 class="listing-name">${listing.name}</h3>
            <p class="listing-description">${listing.description}</p>
            <div class="listing-price">$${listing.price.toFixed(2)}</div>
            <button class="purchase-btn" onclick="contactSeller('${listing.sellerId}')">Contact Seller</button>
        `;

        // Add mouse enter/leave events for enhanced interactivity
        listingCard.addEventListener('mouseenter', () => {
            listingCard.style.transform = 'translateY(-8px)';
        });

        listingCard.addEventListener('mouseleave', () => {
            listingCard.style.transform = 'translateY(0)';
        });

        listingsGrid.appendChild(listingCard);
    });
}

// Toggle admin panel
function toggleAdminPanel() {
    adminPanel.classList.toggle('active');
    overlay.classList.toggle('active');

    // Prevent body scroll when admin panel is open
    document.body.style.overflow = adminPanel.classList.contains('active') ? 'hidden' : '';
}

// Contact seller via Telegram
function contactSeller(sellerId) {
    // Format the seller ID to ensure it starts with @
    let formattedSellerId = sellerId.startsWith('@') ? sellerId : `@${sellerId}`;

    // Try to open in Telegram app first, then fall back to web version
    const telegramUrl = `https://t.me/${formattedSellerId}`;
    const webTelegramUrl = `https://web.telegram.org/z/#${formattedSellerId}`;

    // Open in new tab
    const newWindow = window.open(telegramUrl, '_blank');

    // If the Telegram app isn't installed, the window might be blocked
    // So we'll also try the web version
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Popup was blocked, try web version
        window.open(webTelegramUrl, '_blank');
    } else {
        // Popup opened successfully, focus on it
        newWindow.focus();
    }
}

// Handle form submission
document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values by name
    const formData = new FormData(this);

    const listingData = {
        id: Date.now(),
        name: formData.get('itemName'),
        description: formData.get('itemDesc'),
        price: parseFloat(formData.get('itemPrice')),
        category: formData.get('itemCategory'),
        sellerId: formData.get('sellerId')
    };

    // Add to listings (in a real app, this would be saved to a database)
    sampleListings.push(listingData);

    // Re-render listings with animation
    renderListings(sampleListings);

    // Reset form
    this.reset();

    // Close admin panel
    toggleAdminPanel();

    // Show success animation
    showSuccessAnimation();

    alert('Listing added successfully!');
});

// Show success animation
function showSuccessAnimation() {
    const successEl = document.createElement('div');
    successEl.textContent = '✓ Item added!';
    successEl.style.position = 'fixed';
    successEl.style.top = '20px';
    successEl.style.right = '20px';
    successEl.style.backgroundColor = '#4BB543';
    successEl.style.color = 'white';
    successEl.style.padding = '10px 20px';
    successEl.style.borderRadius = '4px';
    successEl.style.zIndex = '10000';
    successEl.style.opacity = '0';
    successEl.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(successEl);

    // Fade in
    setTimeout(() => {
        successEl.style.opacity = '1';
    }, 10);

    // Remove after delay
    setTimeout(() => {
        successEl.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(successEl);
        }, 300);
    }, 2000);
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.listing-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('purchase-btn') ||
        e.target.classList.contains('admin-btn') ||
        e.target.classList.contains('close-btn')) {

        const button = e.target;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.offsetX - radius}px`;
        circle.style.top = `${e.offsetY - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }
});

// Add hover effects to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Add subtle parallax effect to hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    if (hero) {
        hero.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});