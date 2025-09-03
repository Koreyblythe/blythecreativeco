/* ========= Blythe Business Solutions — Global JS ========= */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    // close on link click (mobile)
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // Home page rotating services (if #service-rotator exists)
  const rotator = document.getElementById('service-rotator');
  if (rotator) {
    const items = [
      'Logo Design',
      'Brand Identity',
      'Web & Landing Pages',
      'Social Content',
      'Marketing Consulting'
    ];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % items.length;
      rotator.textContent = items[i];
    }, 2500);
  }

  // Contact page helpers
  const serviceSelect = document.querySelector('#service');
  const params = new URLSearchParams(window.location.search);
  const qService = params.get('service');
  if (serviceSelect && qService) {
    const val = qService.toLowerCase();
    if (['creative','vending'].includes(val)) serviceSelect.value = val;
  }

  // Mailto submit (no backend)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name')?.value?.trim() || '';
      const email = contactForm.querySelector('#email')?.value?.trim() || '';
      const phone = contactForm.querySelector('#phone')?.value?.trim() || '';
      const service = serviceSelect?.value || 'general';
      const message = contactForm.querySelector('#message')?.value?.trim() || '';

const to = 'KoreyBlythe@icloud.com';
      const subject = encodeURIComponent(`Inquiry – ${service === 'creative' ? 'Blythe Creative' : service === 'vending' ? 'Blythe Vending' : 'General'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}\n\n— Sent from blythecreatives.co`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
});
