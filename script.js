// Main JavaScript functionality for Liquifresh

// Interactive Gallery with Lightbox
function initGallery() {
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img src="" alt="">
            <div class="caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            const lightboxImg = lightbox.querySelector('img');
            const caption = lightbox.querySelector('.caption');
            lightboxImg.src = image.src;
            caption.textContent = image.alt;
        });
    });

    lightbox.querySelector('.close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightbox.querySelector('img')) {
            lightbox.style.display = 'none';
        }
    });
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const services = document.querySelectorAll('.service-item, .product-item');
            
            services.forEach(service => {
                const text = service.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    service.style.display = 'block';
                } else {
                    service.style.display = 'none';
                }
            });
        });
    }
}

// Form Validation
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        input.classList.remove('error');
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
        
        // Phone validation
        if (input.name === 'phone' && input.value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// AJAX Form Submission
function handleFormSubmit(form, successUrl) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm(form)) {
            // Simulate AJAX submission
            const formData = new FormData(form);
            const submitBtn = form.querySelector('input[type="submit"]');
            const originalText = submitBtn.value;
            
            submitBtn.value = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Form submitted successfully!');
                window.location.href = successUrl;
            }, 1500);
        }
    });
}

// Accordion functionality
function initAccordion() {
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.display = 'none';
            });
            
            // Open clicked one if it wasn't active
            if (!isActive) {
                header.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initSearch();
    initAccordion();
    
    // Initialize form validation
    const enquiryForm = document.getElementById('enquiryForm');
    const contactForm = document.getElementById('contactForm');
    
    if (enquiryForm) {
        handleFormSubmit(enquiryForm, 'successful.html');
    }
    
    if (contactForm) {
        handleFormSubmit(contactForm, 'successful.html');
    }
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});