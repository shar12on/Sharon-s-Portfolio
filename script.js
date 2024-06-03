// validateForm.js

document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contact-form');
  var formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');

      if (nameInput.value.trim() === '') {
          formMessage.innerHTML = 'Please enter your name.';
          return;
      }
      if (emailInput.value.trim() === '') {
          formMessage.innerHTML = 'Please enter your email.';
          return;
      }
      if (messageInput.value.trim() === '') {
          formMessage.innerHTML = 'Please enter your message.';
          return;
      }

      // If all validations pass, you can submit the form
      formMessage.innerHTML = 'Form submitted successfully!';
      // Here you can submit the form using AJAX or let it submit naturally

      // Clear the form after submission (optional)
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
  });
});

