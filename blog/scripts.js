
// Smooth scrolling for navigation links
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

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');

    if (!navLinks) {
        console.error("Element with ID 'nav-links' not found.");
    }
    if (!menuBtn) {
        console.error("Element with ID 'menuBtn' not found.");
    }
    if (!closeBtn) {
        console.error("Element with ID 'closeBtn' not found.");
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.add('show');
        });
    }

    if (closeBtn && navLinks) {
        closeBtn.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalClose = document.getElementById('modalClose');

  const serviceDetails = {
    'AI Mobile App': {
      title: 'AI Mobile App Development',
      content: `Prabony AI creates intelligent and future-ready mobile applications that go beyond basic functionality—they think, learn, and adapt. By leveraging cutting-edge AI technologies such as machine learning, natural language processing (NLP), and computer vision, our apps offer predictive user experiences, intelligent automation, and highly personalized content.<br><br>Our mobile applications are intuitive, responsive, and scalable—built to perform seamlessly across both Android and iOS platforms. With AI deeply embedded at their core, these apps are not just smart—they’re transformative. Prabony AI ensures that every mobile solution we deliver empowers businesses to innovate, engage users meaningfully, and stay ahead in a fast-evolving digital landscape.`
    },
    'AI Web App': {
      title: 'AI Web App Development',
      content: `Prabony AI specializes in building powerful web applications infused with AI to deliver dynamic, data-driven experiences. These web apps are designed to analyze real-time behavior, predict outcomes, and interact intelligently with users using technologies like natural language processing, computer vision, and recommendation systems.<br><br>Whether it's a smart dashboard, AI-powered chatbot, or a personalized user portal, our web apps are responsive, secure, and optimized for performance. Prabony AI ensures your online platforms are not only functional but future-ready, giving your business a significant digital edge.`
    },
    'AI Agents': {
      title: 'AI Agents',
      content: `Prabony AI builds autonomous agents that simulate human-like decision-making and interaction using artificial intelligence. These agents can operate across platforms, manage tasks, and converse with users naturally, improving customer experience and productivity.<br><br>With advanced machine learning models, reinforcement learning, and NLP, our AI agents adapt over time, becoming smarter with usage. From chatbots to intelligent assistants, Prabony AI empowers businesses with agents that reduce manual effort and increase efficiency.`
    },
    'AI Automation': {
      title: 'AI Automation',
      content: `Prabony AI helps businesses automate complex workflows and repetitive tasks using artificial intelligence. Our solutions integrate with existing systems to streamline operations, reduce errors, and increase overall speed and accuracy.<br><br>From intelligent document processing to automated customer interactions and predictive maintenance, we use AI to improve every part of your workflow. Prabony AI enables you to scale faster, save costs, and shift your human capital toward higher-value work.`
    },
    'AI Design': {
      title: 'AI Design',
      content: `Prabony AI offers creative AI-powered design tools that help teams generate content, optimize layouts, and customize user experiences. From generative art to real-time design feedback, we use AI to accelerate and enhance the creative process.<br><br>Whether you're designing branding elements, product visuals, or user interfaces, our AI solutions enable creativity with speed and precision. Let Prabony AI elevate your design workflow with automation and intelligence.`
    },
    'AI SaaS': {
      title: 'AI SaaS Development',
      content: `Prabony AI develops scalable Software-as-a-Service (SaaS) platforms powered by artificial intelligence. Our platforms help organizations deploy intelligent tools—such as smart dashboards, prediction engines, and AI-driven automation—directly to the cloud.<br><br>Whether you're targeting retail, finance, education, or health sectors, we build cloud-native SaaS solutions that combine robust backend systems with user-friendly interfaces and powerful AI capabilities. With Prabony AI, your SaaS becomes smarter and more impactful.`
    }
  };

  document.querySelectorAll('.btn-read-more').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      const title = card.querySelector('h3').textContent.trim();

      if (serviceDetails[title]) {
        modalTitle.textContent = serviceDetails[title].title;
        modalDescription.innerHTML = serviceDetails[title].content;
        modal.style.display = 'flex';
      }
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(14, 14, 14, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(14, 14, 14, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-card, .team-card, .testimonial-card, .blog-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        const terms = contactForm.querySelector('input[type="checkbox"]').checked;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (!terms) {
            alert('Please agree to the terms and conditions.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Newsletter subscription
const newsletterForms = document.querySelectorAll('.newsletter, .newsletter-signup');
newsletterForms.forEach(form => {
    const submitButton = form.querySelector('button');
    const emailInput = form.querySelector('input[type="email"]');
    
    if (submitButton && emailInput) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = emailInput.value;
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate subscription
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
});

// Testimonials animation control
const testimonialColumns = document.querySelectorAll('.testimonials-column');
testimonialColumns.forEach(column => {
    column.addEventListener('mouseenter', () => {
        column.style.animationPlayState = 'paused';
    });
    
    column.addEventListener('mouseleave', () => {
        column.style.animationPlayState = 'running';
    });
});

const scroller = document.querySelector('.testimonial-scroller');

function updateTestimonialsForViewport() {
  const testimonialColumns = document.querySelectorAll('.testimonials-column');
  if (!testimonialColumns.length) return;

  if (window.innerWidth <= 768 && scroller) {
    testimonialColumns.forEach(column => {
      const cards = column.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        card.style.display = index >= 3 ? 'none' : 'block';
        card.style.marginTop = '1rem'; // add space at top for mobile view
      });
    });

    scroller.style.overflowY = 'auto';
    scroller.style.scrollSnapType = 'y mandatory';
    testimonialColumns.forEach(col => col.style.animation = 'none');
  } else {
    testimonialColumns.forEach(column => {
      const cards = column.querySelectorAll('.testimonial-card');
      cards.forEach(card => {
        card.style.display = 'block';
        card.style.marginTop = '0'; // remove space for desktop
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const mobileTestimonialCards = document.querySelectorAll('.mobile-testimonials .testimonial-card');
    mobileTestimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});


window.addEventListener('resize', updateTestimonialsForViewport);
document.addEventListener('DOMContentLoaded', updateTestimonialsForViewport);

// ✅ Fix nav close button position on click
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.getElementById('nav-links');

if (closeBtn && navLinks) {
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeBtn.style.position = 'fixed'; // Ensure it doesn't jump
    closeBtn.style.top = '1rem';
    closeBtn.style.right = '1.2rem';
  });
} 
// Portfolio and team horizontal scroll
const horizontalScrollContainers = document.querySelectorAll('.portfolio-row, .team-cards');
horizontalScrollContainers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Service cards hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = '#0e0e0e';
    });
});

// Typing animation for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing animation after page load
    setTimeout(typeWriter, 1000);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Button click animations
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
// Close mobile nav menu when any nav link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const navMenu = document.getElementById('nav-links');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('Prabony AI website loaded successfully!');
