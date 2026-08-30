document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Interactivity
  const toggleBtn = document.getElementById('theme-toggle');
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  });

  // 2. Interactive Form Handling
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusMsg.style.color = 'green';
    statusMsg.textContent = 'Thank you! Your message has been sent successfully.';
    form.reset();
  });
});
