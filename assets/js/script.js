// Track download clicks
document.querySelector('.download-btn')?.addEventListener('click', function() {
  console.log('Download button clicked');
  
  // You can add analytics tracking here
  // gtag('event', 'download', { 'app_name': 'Electron Kiosk' });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});