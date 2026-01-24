// Sample listings data
let listings = [
    {
        id: 1,
        name: "Винтажное пальто Balenciaga",
        description: "Классическое черное пальто из коллекции начала 2000-х",
        price: 450.00,
        category: "Верхняя одежда",
        size: "M",
        condition: "Хорошее",
        sellerId: "@vintage_fashion_dealer",
        images: [
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EBalenciaga Coat%3C/text%3E%3C/svg%3E",
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EDetail View%3C/text%3E%3C/svg%3E"
        ]
    },
    {
        id: 2,
        name: "Кожаная сумка Cévennes",
        description: "Натуральная кожаная сумка через плечо в отличном состоянии",
        price: 280.00,
        category: "Сумки",
        size: "One Size",
        condition: "Отличное",
        sellerId: "@luxury_accessories",
        images: [
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ECévennes Bag%3C/text%3E%3C/svg%3E"
        ]
    },
    {
        id: 3,
        name: "Кроссовки Balenciaga Triple S",
        description: "Размер 9, носились всего дважды, безупречное состояние",
        price: 320.00,
        category: "Обувь",
        size: "38.5",
        condition: "Хорошее",
        sellerId: "@sneaker_collector",
        images: [
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EBalenciaga Sneakers%3C/text%3E%3C/svg%3E"
        ]
    },
    {
        id: 4,
        name: "Дизайнерский блейзер",
        description: "Минималистичный крой блейзера бежевого цвета",
        price: 180.00,
        category: "Верхняя одежда",
        size: "L",
        condition: "Отличное",
        sellerId: "@style_curator",
        images: [
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EBeige Blazer%3C/text%3E%3C/svg%3E"
        ]
    },
    {
        id: 5,
        name: "Шелковая блузка",
        description: "Элегантная шелковая блузка бежевого цвета",
        price: 120.00,
        category: "Блузки и рубашки",
        size: "S",
        condition: "Хорошее",
        sellerId: "@elegant_styles",
        images: [
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ESilk Blouse%3C/text%3E%3C/svg%3E"
        ]
    },
    {
        id: 6,
        name: "Летнее платье",
        description: "Легкое летнее платье с цветочным принтом",
        price: 95.00,
        category: "Платья",
        size: "M",
        condition: "Хорошее",
        sellerId: "@summer_fashions",
        images: [
            "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ESummer Dress%3C/text%3E%3C/svg%3E"
        ]
    }
];

// DOM Elements
const listingsGrid = document.getElementById('listingsGrid');
const adminPanel = document.getElementById('adminPanel');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

// Admin credentials
const ADMIN_CREDENTIALS = {
    username: 'sartorial',
    password: 'favicon'
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero section
    document.querySelector('.hero-title').classList.add('fade-in');
    document.querySelector('.hero-subtitle').classList.add('fade-in');
    
    renderListings(listings);
    
    // Add scroll animation
    window.addEventListener('scroll', animateOnScroll);
});

// Render listings to the grid
function renderListings(listingsArray) {
    listingsGrid.innerHTML = '';

    listingsArray.forEach((listing, index) => {
        const listingCard = document.createElement('div');
        listingCard.className = 'listing-card slide-in';

        // Add animation delay for stagger effect
        listingCard.style.animationDelay = `${index * 0.1}s`;

        // Use the first image if available, otherwise show placeholder
        const imageUrl = listing.images && listing.images.length > 0 ? listing.images[0] : 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"%3E%3Crect width="300" height="400" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EProduct Image%3C/text%3E%3C/svg%3E';

        listingCard.innerHTML = `
            <div class="listing-image">
                <img src="${imageUrl}" alt="${listing.name}" style="width:100%; height:300px; object-fit:cover;">
            </div>
            <h3 class="listing-name">${listing.name}</h3>
            <p class="listing-description">${listing.description}</p>
            <div class="listing-price">${listing.price.toFixed(2)} $</div>
            <button class="purchase-btn" onclick="openListingDetails(${listing.id})">Подробнее</button>
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

// Toggle login modal
function toggleLoginModal() {
    loginModal.style.display = loginModal.style.display === 'block' ? 'none' : 'block';
}

// Close login modal
function closeLoginModal() {
    loginModal.style.display = 'none';
    document.getElementById('loginError').textContent = '';
}

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    const errorMessage = document.getElementById('loginError');
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        // Successful login
        errorMessage.textContent = '';
        loginModal.style.display = 'none';
        openAdminPanel();
    } else {
        // Failed login
        errorMessage.textContent = 'Неправильный логин или пароль';
    }
});

// Open admin panel
function openAdminPanel() {
    adminPanel.classList.add('active');
    
    // Prevent body scroll when admin panel is open
    document.body.style.overflow = 'hidden';
    
    // Render current listings in admin panel
    renderCurrentListings();
}

// Close admin panel and log out
function logout() {
    adminPanel.classList.remove('active');
    
    // Allow body scroll again
    document.body.style.overflow = '';
}

// Render current listings in admin panel
function renderCurrentListings() {
    const currentListingsContainer = document.getElementById('currentListings');
    currentListingsContainer.innerHTML = '';
    
    listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.className = 'current-listing';
        listingElement.innerHTML = `
            <div>
                <strong>${listing.name}</strong><br>
                <small>${listing.description}</small>
            </div>
            <button class="delete-btn" onclick="deleteListing(${listing.id})">Удалить</button>
        `;
        
        currentListingsContainer.appendChild(listingElement);
    });
}

// Delete a listing
function deleteListing(id) {
    if (confirm('Вы уверены, что хотите удалить это объявление?')) {
        listings = listings.filter(listing => listing.id !== id);
        renderListings(listings);
        renderCurrentListings();
    }
}

// Handle form submission for new listings
document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values by name
    const formData = new FormData(this);

    // Get the selected files
    const imageFiles = document.getElementById('itemImages').files;

    // Process images (for demo purposes, we'll use placeholders)
    const images = [];
    for (let i = 0; i < imageFiles.length && i < 10; i++) {
        // In a real implementation, you would upload the image and get a URL
        // For now, we'll use a placeholder SVG
        const placeholderSvg = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EUploaded Image ${i+1}%3C/text%3E%3C/svg%3E`;
        images.push(placeholderSvg);
    }

    const newListing = {
        id: Date.now(),
        name: formData.get('itemName'),
        description: formData.get('itemDesc'),
        price: parseFloat(formData.get('itemPrice')),
        category: formData.get('itemCategory'),
        size: formData.get('itemSize'),
        condition: formData.get('itemCondition'),
        sellerId: formData.get('sellerId'),
        images: images
    };

    // Add to listings
    listings.push(newListing);

    // Re-render listings with animation
    renderListings(listings);

    // Update current listings in admin panel
    renderCurrentListings();

    // Reset form
    this.reset();
    document.getElementById('imagePreviews').innerHTML = '';

    // Show success animation
    showSuccessAnimation();

    alert('Объявление успешно добавлено!');
});

// Show success animation
function showSuccessAnimation() {
    const successEl = document.createElement('div');
    successEl.textContent = '✓ Объявление добавлено!';
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

// Open listing details modal
function openListingDetails(listingId) {
    const listing = listings.find(l => l.id === listingId);
    if (!listing) return;

    // Populate modal with listing details
    document.getElementById('modalTitle').textContent = listing.name;
    document.getElementById('modalName').textContent = listing.name;
    document.getElementById('modalDescription').textContent = listing.description;
    document.getElementById('modalCategory').textContent = listing.category;
    document.getElementById('modalPrice').textContent = `${listing.price.toFixed(2)} $`;

    // Add size and condition info
    const modalInfoDiv = document.querySelector('.modal-info');
    const sizeConditionContainer = document.createElement('div');
    sizeConditionContainer.className = 'size-condition-container';

    const sizeItem = document.createElement('div');
    sizeItem.className = 'size-condition-item detail-item';
    sizeItem.innerHTML = `<span class="label">Размер:</span><span>${listing.size}</span>`;

    const conditionItem = document.createElement('div');
    conditionItem.className = 'size-condition-item detail-item';
    conditionItem.innerHTML = `<span class="label">Состояние:</span><span>${listing.condition}</span>`;

    sizeConditionContainer.appendChild(sizeItem);
    sizeConditionContainer.appendChild(conditionItem);

    // Insert after the description and before the details
    const descriptionElement = document.getElementById('modalDescription');
    modalInfoDiv.insertBefore(sizeConditionContainer, descriptionElement.nextSibling);

    // Set up image gallery
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.getElementById('thumbnails');

    // Set main image to first image
    if (listing.images && listing.images.length > 0) {
        mainImage.src = listing.images[0];

        // Create thumbnails
        thumbnailsContainer.innerHTML = '';
        listing.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.alt = `Thumbnail ${index + 1}`;
            thumb.className = 'thumbnail';
            if (index === 0) thumb.classList.add('active');

            thumb.addEventListener('click', () => {
                mainImage.src = imgSrc;
                // Remove active class from all thumbnails
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                // Add active class to clicked thumbnail
                thumb.classList.add('active');
            });

            thumbnailsContainer.appendChild(thumb);
        });
    }

    // Set up purchase button
    document.getElementById('modalPurchaseBtn').onclick = () => contactSeller(listing.sellerId);

    // Show modal
    document.getElementById('listingModal').style.display = 'block';
}

// Close listing modal
function closeListingModal() {
    const modal = document.getElementById('listingModal');
    modal.style.display = 'none';

    // Remove the size and condition elements that were dynamically added
    const sizeConditionElements = document.querySelectorAll('.size-condition-container');
    sizeConditionElements.forEach(el => el.remove());
}

// Contact seller via Telegram
function contactSeller(sellerId) {
    // Format the seller ID to ensure it starts with @
    let formattedSellerId = sellerId.startsWith('@') ? sellerId : `@${sellerId}`;

    // Try to open in Telegram app first, then fall back to web version
    const telegramUrl = `https://t.me/${formattedSellerId}`;
    const webTelegramUrl = `https://web.telegram.org/z/#${formattedSellerId}`;

    // Attempt to open in Telegram app
    const newWindow = window.open(telegramUrl, '_blank');

    // Check if popup was blocked or failed to open
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Popup was blocked or failed, try web version
        window.open(webTelegramUrl, '_blank');

        // If that also fails, show an alert with the Telegram link
        setTimeout(() => {
            if (navigator.onLine) {
                // Give the browser a moment to attempt opening the link
                // If it didn't work, provide manual instructions
                const userChoice = confirm(
                    `Не удалось открыть Telegram автоматически. Перейдите вручную: ${telegramUrl}\n\nНажмите OK, чтобы скопировать ссылку.`
                );

                if (userChoice) {
                    navigator.clipboard.writeText(telegramUrl).then(() => {
                        alert('Ссылка на Telegram скопирована в буфер обмена');
                    }).catch(err => {
                        console.error('Failed to copy: ', err);
                    });
                }
            }
        }, 1000);
    } else {
        // Popup opened successfully, focus on it
        newWindow.focus();
    }
}

// Handle image preview for admin form
document.getElementById('itemImages').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    const previewsContainer = document.getElementById('imagePreviews');

    // Limit to 10 images
    if (files.length > 10) {
        alert('Можно загрузить максимум 10 фотографий');
        return;
    }

    previewsContainer.innerHTML = '';

    files.forEach((file, index) => {
        if (file.type.match('image.*')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = `Preview ${index + 1}`;

                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-preview';
                removeBtn.innerHTML = '&times;';
                removeBtn.onclick = function() {
                    previewItem.remove();
                    // Update the file input to remove the selected file
                    const dt = new DataTransfer();
                    const currentFiles = Array.from(document.getElementById('itemImages').files);

                    for (let i = 0; i < currentFiles.length; i++) {
                        if (currentFiles[i] !== file) {
                            dt.items.add(currentFiles[i]);
                        }
                    }

                    document.getElementById('itemImages').files = dt.files;
                };

                previewItem.appendChild(img);
                previewItem.appendChild(removeBtn);
                previewsContainer.appendChild(previewItem);
            };

            reader.readAsDataURL(file);
        }
    });
});

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
        e.target.classList.contains('close-btn') ||
        e.target.classList.contains('delete-btn')) {
        
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

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === loginModal) {
        closeLoginModal();
    }

    if (event.target === document.getElementById('listingModal')) {
        closeListingModal();
    }
}