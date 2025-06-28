// ...existing code...
const hamburger = document.getElementById('hamburger-menu');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Horizontal scroll arrows for .contentbox
const contentbox = document.querySelector('.contentbox');
const leftArrow = document.querySelector('.scroll-arrow.left');
const rightArrow = document.querySelector('.scroll-arrow.right');

if (contentbox && leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    contentbox.scrollBy({ left: -contentbox.offsetWidth, behavior: 'smooth' });
  });
  rightArrow.addEventListener('click', () => {
    contentbox.scrollBy({ left: contentbox.offsetWidth, behavior: 'smooth' });
  });
}
// ...existing code...
// fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => io.observe(el));
