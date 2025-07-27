// Toggle nav menu for small screens
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Simple login validation
function validateForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!username || !password) {
    errorMessage.textContent = "Please fill in all fields.";
    return false;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters.";
    return false;
  }

  errorMessage.style.color = "green";
  errorMessage.textContent = "Login successful!";
  return false; // Prevent real form submission
}