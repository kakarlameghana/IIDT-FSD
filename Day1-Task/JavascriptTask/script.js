document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registration-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateName(nameInput.value)) {
      showError('name');
    } else {
      hideError('name');
    }
    if (!validateEmail(emailInput.value)) {
      showError('email');
    } else {
      hideError('email');
    }
    if (!validatePassword(passwordInput.value)) {
      showError('password');
    } else {
      hideError('password');
    }
    if (validateName(nameInput.value) && validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
      alert('Successfully registered!');
      form.reset();
    }
  });

  function validateName(name) {
    const pattern = /^[a-zA-Z\s-]+$/;
    return pattern.test(name);
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validatePassword(password) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pattern.test(password);
  }

  function showError(field) {
    document.getElementById(`${field}-error`).style.display = 'block';
  }

  function hideError(field) {
    document.getElementById(`${field}-error`).style.display = 'none';
  }
});
