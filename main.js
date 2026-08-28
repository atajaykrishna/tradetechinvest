/* ============================================
   TradeTech Invest - Shared JavaScript
   Professional Interactions & Enhancements
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ============ Active Navigation Link ============
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // ============ Mobile Menu Toggle ============
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', function() {
      navLinksContainer.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.navbar')) {
        navLinksContainer.classList.remove('active');
      }
    });
  }
  
  // ============ Footer Year Auto-Update ============
  const footerText = document.querySelector('.footer div:first-child');
  if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, year);
  }
  
  // ============ Smooth Scroll for Anchor Links ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // ============ Fade-in Animation on Scroll ============
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and feature sections
  document.querySelectorAll('.card, .feature-section, .contact-info').forEach(el => {
    observer.observe(el);
  });
  
  // ============ Metric Counter Animation ============
  const metrics = document.querySelectorAll('.metric');
  metrics.forEach(metric => {
    const targetValue = metric.textContent;
    const isPercentage = targetValue.includes('%');
    const numericValue = parseFloat(targetValue);
    
    if (!isNaN(numericValue)) {
      let currentValue = 0;
      const duration = 1500; // ms
      const startTime = performance.now();
      
      function updateMetric(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        currentValue = numericValue * easedProgress;
        
        metric.textContent = currentValue.toFixed(1) + (isPercentage ? '%' : '');
        
        if (progress < 1) {
          requestAnimationFrame(updateMetric);
        } else {
          metric.textContent = targetValue;
        }
      }
      
      // Start animation when metric is in view
      const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(updateMetric);
            metricObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      metricObserver.observe(metric);
    }
  });
  
  // ============ Form Validation (if contact form exists) ============
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      // Simulate form submission
      showNotification('Thank you for your inquiry. We will respond within 24 hours.', 'success');
      contactForm.reset();
    });
  }
  
  // ============ Notification System ============
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '8px';
    notification.style.color = 'white';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '400px';
    notification.style.animation = 'slideIn 0.5s ease';
    
    if (type === 'success') {
      notification.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
      notification.style.backgroundColor = '#f44336';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.5s ease';
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Add notification animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});