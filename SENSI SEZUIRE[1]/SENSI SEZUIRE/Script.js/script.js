// Smooth scroll for same‑page links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple required checks
    if (!data.name || !data.email || !data.occupation) {
      showStatus('Please fill in your name, email, and occupation.', true);
      return;
    }
    // Very light email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showStatus('Please enter a valid email address.', true);
      return;
    }

    // Demo: just simulate success locally. Replace with your own submit handler / API call.
    form.reset();
    showStatus("Thanks! You're on the early access list. We'll be in touch soon.");
  
    function showStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.style.display = 'block';
  statusEl.style.color = isError ? 'var(--error)' : 'var(--success)';
}

// Footer year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
