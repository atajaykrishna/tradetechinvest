/* ============================================
   TradeTech Investments - Ultra-Fast SPA
   Instant Page Transitions, No Loading Time
   ============================================ */

// ============ PAGE TEMPLATES (Loaded instantly from memory) ============
const pageTemplates = {
  home: `
    <div class="page-transition">
      <div class="eyebrow">Investment Management · Dubai, UAE</div>
      <h1>Mathematical precision.<br>Modern infrastructure.</h1>
      <p class="lead">We are an investment management company deploying HFT trading, market making, digital assets and delta-neutral strategies. A selective team, maximum efficiency, zero external dependency.</p>
      
      <div class="grid-2">
        <div>
          <h2 style="font-size:1.6rem; margin-bottom:1rem;">A disciplined approach</h2>
          <p style="color:var(--muted); margin-bottom:1.5rem;">TradeTech Investments combines quantitative research and proprietary technology to capture consistent returns across asset classes. Our focus is on high-frequency trading, market making, and systematic digital asset opportunities — all within a robust delta-neutral framework.</p>
          <a href="#strategies" class="btn nav-trigger" data-page="strategies">Explore strategies →</a>
        </div>
        <div style="background:var(--mist); border-radius:20px; padding:2rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem;">
            <div><span class="metric">0%</span><div class="metric-label">external dependency</div></div>
            <div><span class="metric">100%</span><div class="metric-label">in-house tech</div></div>
          </div>
          <p style="color:var(--graphite); font-weight:450;">State-of-the-art proprietary infrastructure, built and operated entirely by our selective team. No reliance on third-party systems.</p>
        </div>
      </div>

      <div style="margin-top:3rem;">
        <h2 style="font-weight:450;">Why TradeTech</h2>
        <div class="grid-3">
          <div class="card">
            <h3>Mathematical edge</h3>
            <p>Systematic, model-driven strategies designed to extract alpha from market microstructure and volatility.</p>
          </div>
          <div class="card">
            <h3>Lean, expert team</h3>
            <p>Very limited, selective specialists — engineers and quants — ensuring maximum efficiency and minimal bureaucracy.</p>
          </div>
          <div class="card">
            <h3>Digital asset native</h3>
            <p>Dedicated trading across crypto and digital assets with institutional-grade risk controls and delta neutral execution.</p>
          </div>
        </div>
      </div>

      <div style="background:var(--navy); color:white; border-radius:24px; padding:2.5rem; margin-top:3rem;">
        <span style="color:#b8ccda; letter-spacing:0.1em; font-size:0.8rem;">FOR INVESTORS</span>
        <h2 style="color:white; margin-top:0.5rem;">Modern solutions in alternative investment</h2>
        <p style="color:#cfdee9; max-width:600px;">We welcome forward-thinking investors seeking exposure to quantitative, tech-driven strategies. TradeTech Investments operates with transparency and institutional discipline.</p>
        <a href="#contact" class="nav-trigger" data-page="contact" style="color:white; border-bottom:1px solid #9db5c9; text-decoration:none; padding-bottom:2px;">Get in touch →</a>
      </div>
    </div>
  `,

  strategies: `
    <div class="page-transition">
      <div class="eyebrow">Our Approach</div>
      <h1>Quantitative Strategies</h1>
      <p class="lead">Each strategy is designed with mathematical rigor and executed through proprietary technology, targeting consistent, risk-adjusted returns.</p>

      <div class="grid-2">
        <div class="card">
          <h3>High-Frequency Trading (HFT)</h3>
          <p>Ultra-low latency execution exploiting market microstructure inefficiencies. Our proprietary systems operate at microsecond speed, capturing fleeting opportunities across multiple venues.</p>
        </div>
        <div class="card">
          <h3>Market Making</h3>
          <p>Providing continuous liquidity across digital and traditional assets. We earn bid-ask spreads while maintaining market-neutral positions through sophisticated hedging techniques.</p>
        </div>
        <div class="card">
          <h3>Digital Assets Trading</h3>
          <p>Systematic strategies across cryptocurrency and digital asset markets. We leverage cross-exchange arbitrage, momentum, and mean-reversion signals with institutional-grade risk management.</p>
        </div>
        <div class="card">
          <h3>Delta Neutral Fund Growth</h3>
          <p>Portfolio construction focused on market-neutral returns. Our delta-neutral approach minimizes directional risk while capturing volatility and relative value opportunities.</p>
        </div>
      </div>

      <div class="feature-section">
        <h2>Investment Principles</h2>
        <ul class="feature-list">
          <li>Systematic, model-driven decision making</li>
          <li>Strict risk management with real-time monitoring</li>
          <li>Low correlation to traditional asset classes</li>
          <li>Scalable strategies with sustainable edge</li>
          <li>Transparent reporting and analytics</li>
        </ul>
      </div>

      <div style="text-align:center; margin-top:3rem;">
        <h2 style="font-weight:450;">Ready to invest?</h2>
        <p style="color:var(--muted); margin-bottom:2rem;">Discover how our quantitative strategies can enhance your portfolio.</p>
        <a href="#contact" class="btn btn-outline nav-trigger" data-page="contact">Schedule a consultation</a>
      </div>
    </div>
  `,

  technology: `
    <div class="page-transition">
      <div class="eyebrow">Infrastructure</div>
      <h1>Proprietary Technology</h1>
      <p class="lead">State-of-the-art infrastructure built entirely in-house. We maintain 0% external dependency, ensuring complete control over performance, security, and innovation.</p>

      <div class="feature-section">
        <div class="grid-3">
          <div class="card card-highlight">
            <h3>Low-Latency Systems</h3>
            <p>Custom-designed network architecture and execution engines optimized for microsecond performance.</p>
          </div>
          <div class="card card-highlight">
            <h3>Advanced Analytics</h3>
            <p>Machine learning and statistical models processing millions of data points in real-time.</p>
          </div>
          <div class="card card-highlight">
            <h3>Security First</h3>
            <p>Enterprise-grade security protocols protecting assets and infrastructure at every layer.</p>
          </div>
        </div>
      </div>

      <div class="grid-2" style="margin-top:4rem;">
        <div>
          <h2 style="font-size:1.6rem;">In-House Development</h2>
          <p style="color:var(--muted);">Our selective team of engineers and quantitative researchers develops every component internally. From execution algorithms to risk management systems, nothing is outsourced. This approach ensures complete alignment with our investment strategies and eliminates third-party risks.</p>
        </div>
        <div style="background:var(--light-bg); border-radius:20px; padding:2rem;">
          <div class="metric">0%</div>
          <div class="metric-label">External Dependency</div>
          <p style="color:var(--muted); margin-top:1rem;">Every line of code, every server, every network connection — designed, built, and maintained by our team in Dubai.</p>
        </div>
      </div>

      <div class="grid-4" style="margin-top:3rem;">
        <div class="card">
          <h3>Execution</h3>
          <p>Proprietary order routing and execution algorithms</p>
        </div>
        <div class="card">
          <h3>Risk</h3>
          <p>Real-time risk management and monitoring systems</p>
        </div>
        <div class="card">
          <h3>Data</h3>
          <p>High-frequency market data processing and storage</p>
        </div>
        <div class="card">
          <h3>Research</h3>
          <p>Quantitative research and backtesting platforms</p>
        </div>
      </div>
    </div>
  `,

  contact: `
    <div class="page-transition">
      <div class="eyebrow">Get in Touch</div>
      <h1>Connect with TradeTech</h1>
      <p class="lead">We welcome forward-thinking investors seeking modern solutions in alternative investment opportunities.</p>

      <div class="grid-2" style="margin-top:3rem;">
        <div class="contact-info">
          <h2 style="font-size:1.4rem;">Our Location</h2>
          
          <div class="contact-detail">
            <label>Office</label>
            <p>Dubai, United Arab Emirates</p>
          </div>
          
          <div class="contact-detail">
            <label>Email</label>
            <p><a href="mailto:info@tradetechinvest.com" style="color:var(--navy); text-decoration:none;">info@tradetechinvest.com</a></p>
          </div>
          
          <div class="contact-detail">
            <label>Response Time</label>
            <p>Within 24 hours</p>
          </div>
          
          <div style="margin-top:2rem;">
            <p style="color:var(--muted);">For investment inquiries, partnership opportunities, or general information, please reach out via email. Our team will respond promptly.</p>
          </div>
        </div>

        <div>
          <form id="contact-form" style="background:var(--light-bg); padding:2rem; border-radius:16px;">
            <h2 style="font-size:1.4rem; margin-bottom:1.5rem;">Send a Message</h2>
            
            <div style="margin-bottom:1rem;">
              <label for="name" style="display:block; margin-bottom:0.5rem; color:var(--muted);">Full Name</label>
              <input type="text" id="name" name="name" style="width:100%; padding:0.75rem; border:1px solid var(--softline); border-radius:8px;" placeholder="Your name" required>
            </div>
            
            <div style="margin-bottom:1rem;">
              <label for="email" style="display:block; margin-bottom:0.5rem; color:var(--muted);">Email Address</label>
              <input type="email" id="email" name="email" style="width:100%; padding:0.75rem; border:1px solid var(--softline); border-radius:8px;" placeholder="you@email.com" required>
            </div>
            
            <div style="margin-bottom:1rem;">
              <label for="phone" style="display:block; margin-bottom:0.5rem; color:var(--muted);">Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" style="width:100%; padding:0.75rem; border:1px solid var(--softline); border-radius:8px;" placeholder="+1 XX XXX XXXX">
            </div>
            
            <div style="margin-bottom:1.5rem;">
              <label for="message" style="display:block; margin-bottom:0.5rem; color:var(--muted);">Message</label>
              <textarea id="message" name="message" rows="5" style="width:100%; padding:0.75rem; border:1px solid var(--softline); border-radius:8px;" placeholder="Tell us about your investment goals..." required></textarea>
            </div>
            
            <button type="submit" class="btn">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  `
};

// ============ SPA ROUTER - Instant Page Transitions ============
class SPARouter {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.currentPage = 'home';
    this.isTransitioning = false;
    this.init();
  }

  init() {
    // Load initial page
    const initialPage = window.location.hash.replace('#', '') || 'home';
    this.navigateTo(initialPage, false);
    
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const navTrigger = e.target.closest('[data-page]');
      if (navTrigger) {
        e.preventDefault();
        const page = navTrigger.getAttribute('data-page');
        this.navigateTo(page, true);
      }
    });
    
    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
      const page = window.location.hash.replace('#', '') || 'home';
      this.navigateTo(page, false);
    });
    
    // Preload all pages in memory
    this.preloadPages();
  }

  preloadPages() {
    // All pages are already in memory as template strings
    // This ensures instant transitions
    console.log('All pages preloaded in memory');
  }

  navigateTo(page, updateHash) {
    if (this.isTransitioning || !pageTemplates[page]) return;
    
    this.isTransitioning = true;
    this.currentPage = page;
    
    // Update hash without triggering scroll
    if (updateHash) {
      history.pushState(null, '', `#${page}`);
    }
    
    // Update active nav link
    this.updateActiveNav(page);
    
    // Fade out current page
    this.appContainer.style.opacity = '0';
    this.appContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      // Inject new page content (instant from memory)
      this.appContainer.innerHTML = pageTemplates[page];
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Fade in new page
      requestAnimationFrame(() => {
        this.appContainer.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
        this.appContainer.style.opacity = '1';
        this.appContainer.style.transform = 'translateY(0)';
      });
      
      // Initialize page-specific features
      this.initPageFeatures(page);
      
      this.isTransitioning = false;
      
      // Remove transition after complete
      setTimeout(() => {
        this.appContainer.style.transition = '';
      }, 200);
    }, 100);
  }

  updateActiveNav(page) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === page) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  initPageFeatures(page) {
    // Initialize metrics animation
    if (page === 'home') {
      this.animateMetrics();
    }
    
    // Initialize form
    if (page === 'contact') {
      this.initContactForm();
    }
    
    // Initialize cards animation
    this.animateCards();
  }

  animateMetrics() {
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach(metric => {
      const targetValue = metric.textContent;
      const isPercentage = targetValue.includes('%');
      const numericValue = parseFloat(targetValue);
      
      if (!isNaN(numericValue)) {
        let currentValue = 0;
        const duration = 1000; // Faster animation for instant feel
        const startTime = performance.now();
        
        function updateMetric(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          currentValue = numericValue * progress;
          
          metric.textContent = Math.round(currentValue) + (isPercentage ? '%' : '');
          
          if (progress < 1) {
            requestAnimationFrame(updateMetric);
          } else {
            metric.textContent = targetValue;
          }
        }
        
        requestAnimationFrame(updateMetric);
      }
    });
  }

  animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50); // Staggered animation
    });
  }

  initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
          showNotification('Please fill in all required fields', 'error');
          return;
        }
        
        if (!isValidEmail(email)) {
          showNotification('Please enter a valid email address', 'error');
          return;
        }
        
        const subject = `Investment Inquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:info@tradetechinvest.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        showNotification('Opening your email client...', 'success');
        window.location.href = mailtoLink;
        
        setTimeout(() => {
          contactForm.reset();
        }, 1000);
      });
    }
  }
}

// ============ NOTIFICATION SYSTEM ============
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.padding = '15px 25px';
  notification.style.borderRadius = '8px';
  notification.style.color = 'white';
  notification.style.zIndex = '1000';
  notification.style.maxWidth = '90%';
  notification.style.width = 'auto';
  notification.style.animation = 'slideIn 0.3s ease';
  notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  
  if (type === 'success') {
    notification.style.backgroundColor = '#4CAF50';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#f44336';
  }
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============ INITIALIZE SPA ============
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.style.display = 'none';
  }
  
  // Initialize SPA Router
  const router = new SPARouter();
  
  // Initialize mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinksContainer.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.navbar')) {
        navLinksContainer.classList.remove('active');
      }
    });
  }
  
  // Footer year update
  const footerText = document.querySelector('.footer div:first-child');
  if (footerText) {
    const year = new Date().getFullYear();
    footerText.innerHTML = footerText.innerHTML.replace(/\d{4}/, year);
  }
  
  // Add necessary styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translate(-50%, -100%); opacity: 0; }
      to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translate(-50%, 0); opacity: 1; }
      to { transform: translate(-50%, -100%); opacity: 0; }
    }
    
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    
    .loader-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #eef2f5;
      border-top: 3px solid #0a1f2e;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    #app {
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
  `;
  document.head.appendChild(style);
});
