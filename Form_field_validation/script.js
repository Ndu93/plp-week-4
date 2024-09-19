document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset all error messages
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    let isValid = true;

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters long.";
      isValid = false;
    }
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      isValid = false;
    }

    // Age validation
    const age = document.getElementById("age").value;
    if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById("ageError").textContent =
        "Please enter a valid age between 18 and 100.";
      isValid = false;
    }

    // Terms and conditions validation
    if (!document.getElementById("terms").checked) {
      document.getElementById("termsError").textContent =
        "You must agree to the Terms and Conditions.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      // Here you would typically send the form data to a server
    }
  });
