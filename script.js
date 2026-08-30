document.addEventListener('DOMContentLoaded', () => {

  // 1. Theme Toggle Mechanism
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      document.body.setAttribute('data-theme', 'light');
      themeToggleBtn.textContent = '☀️ Light Theme';
    } else {
      document.body.setAttribute('data-theme', 'dark');
      themeToggleBtn.textContent = '🌙 Dark Theme';
    }
  });

  // 2. Interactive Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const statusOutput = document.getElementById('form-status');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Simulate transmission output
    statusOutput.style.color = '#3fb950';
    statusOutput.textContent = '[SUCCESS] Payload transmitted successfully. Verification log generated.';
    
    contactForm.reset();
  });
});
