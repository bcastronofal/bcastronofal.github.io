async function includeSections() {
  const includeTargets = document.querySelectorAll('[data-include]');

  for (const target of includeTargets) {
    const file = target.getAttribute('data-include');
    const response = await fetch(file);

    if (!response.ok) {
      target.innerHTML = `<p>Could not load ${file}</p>`;
      continue;
    }

    target.outerHTML = await response.text();
  }
}

function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  let current = 'home';

  for (const section of sections) {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  }

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  await includeSections();
  setCurrentYear();
  updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav);
