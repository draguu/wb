// Shared nav & footer injection
const NAV_HTML = `
<nav id="navbar" class="py-5">
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <a href="index.html" class="flex items-center">
      <img src="assets/weybec_logo_website.png" alt="Weybec Studios" style="height:52px;width:auto;display:block;">
    </a>
    <div class="hidden md:flex items-center gap-8">
      <a href="work.html"     class="nav-link text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">Work</a>
      <a href="services.html" class="nav-link text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">Services</a>
      <a href="about.html"    class="nav-link text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">Studio</a>
      <a href="contact.html"  class="btn-primary text-sm" style="padding:10px 22px;">Start a Project</a>
    </div>
    <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
      <i data-lucide="menu" id="icon-menu" class="w-5 h-5"></i>
      <i data-lucide="x"    id="icon-x"    class="w-5 h-5 hidden"></i>
    </button>
  </div>
  <div id="mobile-menu" style="display:none;" class="flex-col gap-3 px-6 pt-4 pb-6 border-t md:hidden">
    <a href="work.html"     class="block py-2 font-medium text-gray-600">Work</a>
    <a href="services.html" class="block py-2 font-medium text-gray-600">Services</a>
    <a href="about.html"    class="block py-2 font-medium text-gray-600">Studio</a>
    <a href="contact.html"  class="btn-primary mt-2" style="justify-content:center;display:flex;">Start a Project</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer style="background:#fff;border-top:1px solid #f3f4f6;padding:4rem 0 2rem;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div style="margin-bottom:1rem;">
          <img src="assets/weybec_logo_website.png" alt="Weybec Studios" style="height:44px;width:auto;">
        </div>
        <p class="text-sm text-gray-400 leading-relaxed mb-4">A premium CGI animation studio dedicated to visual excellence. 100% Blender-native.</p>
        <div style="display:flex;gap:14px;align-items:center;">
          <a href="https://www.instagram.com/weybecstudio" target="_blank" rel="noopener" style="color:#374151;transition:color 0.2s;" onmouseover="this.style.color='#22c55e'" onmouseout="this.style.color='#374151'"><i data-lucide="instagram" style="width:20px;height:20px;"></i></a>
          <a href="https://www.linkedin.com/in/weybecstudio" target="_blank" rel="noopener" style="color:#374151;transition:color 0.2s;" onmouseover="this.style.color='#22c55e'" onmouseout="this.style.color='#374151'"><i data-lucide="linkedin" style="width:20px;height:20px;"></i></a>
          <a href="https://www.facebook.com/weybec" target="_blank" rel="noopener" style="color:#374151;transition:color 0.2s;" onmouseover="this.style.color='#22c55e'" onmouseout="this.style.color='#374151'"><i data-lucide="facebook" style="width:20px;height:20px;"></i></a>
          <a href="https://www.youtube.com/@WeybecStudio" target="_blank" rel="noopener" style="color:#374151;transition:color 0.2s;" onmouseover="this.style.color='#22c55e'" onmouseout="this.style.color='#374151'"><i data-lucide="youtube" style="width:20px;height:20px;"></i></a>
        </div>
      </div>
      <div>
        <div style="font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink);margin-bottom:1rem;">Services</div>
        <ul style="display:flex;flex-direction:column;gap:8px;list-style:none;padding:0;margin:0;">
          <li><a href="services.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">3D Ad Films</a></li>
          <li><a href="services.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">Character Animation</a></li>
          <li><a href="services.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">Kids Content</a></li>
          <li><a href="services.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">Motion Graphics</a></li>
          <li><a href="services.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">AI-Assisted Content</a></li>
        </ul>
      </div>
      <div>
        <div style="font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink);margin-bottom:1rem;">Studio</div>
        <ul style="display:flex;flex-direction:column;gap:8px;list-style:none;padding:0;margin:0;">
          <li><a href="about.html"   class="text-sm text-gray-400 hover:text-green-600 transition-colors">About Us</a></li>
          <li><a href="work.html"    class="text-sm text-gray-400 hover:text-green-600 transition-colors">Portfolio</a></li>
          <li><a href="contact.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">Careers</a></li>
          <li><a href="contact.html" class="text-sm text-gray-400 hover:text-green-600 transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <div style="font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink);margin-bottom:1rem;">Contact</div>
        <ul style="display:flex;flex-direction:column;gap:10px;list-style:none;padding:0;margin:0;">
          <li style="display:flex;align-items:flex-start;gap:8px;">
            <i data-lucide="map-pin" style="width:15px;height:15px;color:var(--green);flex-shrink:0;margin-top:2px;"></i>
            <span class="text-sm text-gray-400">Vadodara, Gujarat, India</span>
          </li>
          <li style="display:flex;align-items:center;gap:8px;">
            <i data-lucide="mail" style="width:15px;height:15px;color:var(--green);flex-shrink:0;"></i>
            <a href="mailto:contact@weybec.com" class="text-sm text-gray-400 hover:text-green-600 transition-colors">contact@weybec.com</a>
          </li>
          <li style="display:flex;align-items:center;gap:8px;">
            <i data-lucide="globe" style="width:15px;height:15px;color:var(--green);flex-shrink:0;"></i>
            <span class="text-sm text-gray-400">weybec.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div style="border-top:1px solid #f3f4f6;padding-top:1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
      <p class="text-xs text-gray-300">&copy; 2026 Weybec Studio. All rights reserved.</p>
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="text-xs text-gray-300">Made with</span>
        <span style="font-size:0.85rem;">🐸</span>
        <span class="text-xs text-gray-300">and a lot of green</span>
      </div>
      <div style="display:flex;gap:1rem;">
        <a href="#" class="text-xs text-gray-300 hover:text-gray-500 transition-colors">Privacy</a>
        <a href="#" class="text-xs text-gray-300 hover:text-gray-500 transition-colors">Terms</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.outerHTML = FOOTER_HTML;

  if (window.lucide) lucide.createIcons();

  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));
  }

  const mbBtn = document.getElementById('mobile-menu-btn');
  const mbMenu = document.getElementById('mobile-menu');
  const iMenu = document.getElementById('icon-menu');
  const iX    = document.getElementById('icon-x');
  if (mbBtn) {
    mbBtn.addEventListener('click', () => {
      const open = mbMenu.style.display === 'flex';
      mbMenu.style.display = open ? 'none' : 'flex';
      mbMenu.style.flexDirection = 'column';
      iMenu.classList.toggle('hidden', !open);
      iX.classList.toggle('hidden', open);
    });
  }

  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.style.color = 'var(--green-mid)';
      a.style.fontWeight = '700';
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
