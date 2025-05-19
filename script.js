// Simple form validation
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value.trim();
  const pw = this.password.value;

    if (!email || !pw) {
    alert('Please fill in both fields.');
    return;
  }
  if (pw.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }

  // Submit form (here just log to console)
  console.log('Logging in with', { email, pw });
  alert('Form submitted! (see console)');
});

// Placeholder arrow handlers (no real slides)
document.getElementById('prev').addEventListener('click', () => {
  alert('Prev slide');
});
document.getElementById('next').addEventListener('click', () => {
  alert('Next slide');
});
