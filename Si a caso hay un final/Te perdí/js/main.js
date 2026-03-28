const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis');
      obs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('[data-ob]').forEach(el => obs.observe(el));