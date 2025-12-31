// Select the hamburger and the close button
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;


// Toggle menu when hamburger clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.add('show');
  body.classList.add('menu-open');
});

// Close menu when ✕ clicked
closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('show');
  body.classList.remove('menu-open');
});



