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