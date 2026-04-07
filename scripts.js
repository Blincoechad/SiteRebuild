  // hamburger menu toggle
  const ham = document.getElementById('ham');
  const links = document.getElementById('nav-links');
  ham.addEventListener('click', () => links.classList.toggle('open'));

  // close menu on link click
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // scroll reveal for cards
  const cards = document.querySelectorAll('.product-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.animation = `fadeUp 0.5s ease ${(Array.from(cards).indexOf(e.target) % 4) * 0.08}s forwards`;
        e.target.style.opacity = '0';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(c => { c.style.opacity = '0'; io.observe(c); });
