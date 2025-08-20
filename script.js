// Simple navigation highlighting and form interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current page nav item
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
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
    
    // Form submission handling
    const contactForms = document.querySelectorAll('form, .contact-form-card, .contact-form-content');
    contactForms.forEach(form => {
        const submitButton = form.querySelector('.form-button, button[type="submit"]');
        if (submitButton) {
            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get form inputs
                const nameInput = form.querySelector('input[placeholder*="name"], input[placeholder*="Name"]');
                const emailInput = form.querySelector('input[type="email"], input[placeholder*="email"], input[placeholder*="Email"], input[placeholder*="ID"]');
                const messageInput = form.querySelector('textarea, input[placeholder*="message"], input[placeholder*="Message"], input[placeholder*="Idea"]');
                
                // Simple validation
                let isValid = true;
                let errorMessage = '';
                
                if (nameInput && !nameInput.value.trim()) {
                    errorMessage += 'Please enter your name.\n';
                    isValid = false;
                }
                
                if (emailInput && !emailInput.value.trim()) {
                    errorMessage += 'Please enter your email.\n';
                    isValid = false;
                } else if (emailInput && !isValidEmail(emailInput.value)) {
                    errorMessage += 'Please enter a valid email address.\n';
                    isValid = false;
                }
                
                if (messageInput && !messageInput.value.trim()) {
                    errorMessage += 'Please enter a message.\n';
                    isValid = false;
                }
                
                if (!isValid) {
                    alert(errorMessage);
                    return;
                }
                
                // Simulate form submission
                const originalText = this.innerHTML;
                this.innerHTML = 'Sending...';
                this.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    
                    // Reset form
                    if (nameInput) nameInput.value = '';
                    if (emailInput) emailInput.value = '';
                    if (messageInput) messageInput.value = '';
                    
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            });
        }
    });
    
    // Newsletter subscription handling
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        const submitButton = form.querySelector('.newsletter-btn');
        const emailInput = form.querySelector('.newsletter-input');
        
        if (submitButton && emailInput) {
            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (!emailInput.value.trim()) {
                    alert('Please enter your email address.');
                    return;
                }
                
                if (!isValidEmail(emailInput.value)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                const originalText = this.textContent;
                this.textContent = 'Subscribing...';
                this.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for subscribing to our newsletter!');
                    emailInput.value = '';
                    this.textContent = originalText;
                    this.disabled = false;
                }, 1500);
            });
        }
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .blog-card, .service-detail-card, .blog-detail-card, .contact-info-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.hero-btn, .services-btn, .explore-btn, .cta-button, .section-cta-btn, .form-button, .newsletter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('open');
            mobileMenuButton.classList.toggle('open');
        });

        // Close mobile menu when clicking on nav items
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                mobileMenuButton.classList.remove('open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.remove('open');
                mobileMenuButton.classList.remove('open');
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileMenu.classList.remove('open');
                mobileMenuButton.classList.remove('open');
            }
        });
    }
    
    // Scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.hero-content, .section-header, .service-card, .blog-card, .industry-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('.hero-content, .section-header, .service-card, .blog-card, .industry-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility function to handle external links
function handleExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// Add loading states
function addLoadingStates() {
    // Removed opacity effect for images to prevent flicker on refresh
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    handleExternalLinks();
    addLoadingStates();
});

// Handle window resize
window.addEventListener('resize', function() {
    // Reset any mobile-specific styles or calculations
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && window.innerWidth > 768) {
        mobileMenu.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && closeBtn && navLinks) {
        // Open mobile menu
        menuBtn.addEventListener('click', () => {
            navLinks.classList.add('active');
        });

        // Close mobile menu
        closeBtn.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });

        // Close menu on link click (optional)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});


// Service descriptions data
const serviceData = {
    "AI Mobile App": `Prabony AI creates intelligent and future-ready mobile applications that go beyond basic functionality—they think, learn, and adapt. By leveraging cutting-edge AI technologies such as machine learning, natural language processing (NLP), and computer vision, our apps offer predictive user experiences, intelligent automation, and highly personalized content.

Our mobile applications are intuitive, responsive, and scalable—built to perform seamlessly across both Android and iOS platforms. With AI deeply embedded at their core, these apps are not just smart—they’re transformative. Prabony AI ensures that every mobile solution we deliver empowers businesses to innovate, engage users meaningfully, and stay ahead in a fast-evolving digital landscape.`,

    "AI Web App": `Prabony AI specializes in building powerful web applications infused with AI to deliver dynamic, data-driven experiences. These web apps are designed to analyze real-time behavior, predict outcomes, and interact intelligently with users using technologies like natural language processing, computer vision, and recommendation systems.

Whether it's a smart dashboard, AI-powered chatbot, or a personalized user portal, our web apps are responsive, secure, and optimized for performance. Prabony AI ensures your online platforms are not only functional but future-ready, giving your business a significant digital edge.`,

    "AI Agents": `Prabony AI builds autonomous agents that simulate human-like decision-making and interaction using artificial intelligence. These agents can operate across platforms, manage tasks, and converse with users naturally, improving customer experience and productivity.

With advanced machine learning models, reinforcement learning, and NLP, our AI agents adapt over time, becoming smarter with usage. From chatbots to intelligent assistants, Prabony AI empowers businesses with agents that reduce manual effort and increase efficiency.`,

    "AI SaaS": `Prabony AI develops scalable Software-as-a-Service (SaaS) platforms powered by artificial intelligence. Our platforms help organizations deploy intelligent tools—such as smart dashboards, prediction engines, and AI-driven automation—directly to the cloud.

Whether you're targeting retail, finance, education, or health sectors, we build cloud-native SaaS solutions that combine robust backend systems with user-friendly interfaces and powerful AI capabilities. With Prabony AI, your SaaS becomes smarter and more impactful.`,

    "AI Design": `Prabony AI offers creative AI-powered design tools that help teams generate content, optimize layouts, and customize user experiences. From generative art to real-time design feedback, we use AI to accelerate and enhance the creative process.

Whether you're designing branding elements, product visuals, or user interfaces, our AI solutions enable creativity with speed and precision. Let Prabony AI elevate your design workflow with automation and intelligence.`,

    "AI Automation": `Prabony AI helps businesses automate complex workflows and repetitive tasks using artificial intelligence. Our solutions integrate with existing systems to streamline operations, reduce errors, and increase overall speed and accuracy.

From intelligent document processing to automated customer interactions and predictive maintenance, we use AI to improve every part of your workflow. Prabony AI enables you to scale faster, save costs, and shift your human capital toward higher-value work.`
};

document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Handle all "Read More" clicks
    document.querySelectorAll('.service-detail-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const projectTitle = this.closest('.service-detail-card').querySelector('.service-detail-title').textContent.trim();
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = serviceData[projectTitle] || "Details not available.";
            modal.style.display = 'block';
        });
    });

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close on outside click
    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// FAQ Section - Toggle Answers
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                // Close other answers
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
});

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://api.builder.io/api/v1/image/assets/TEMP/f01661b6567a919b93868db60e059b7231d48bef?width=2880',
        'https://api.builder.io/api/v1/image/assets/TEMP/c341a91fcc333ddba8e097bf725334083b66f785?width=298'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();
