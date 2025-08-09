document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!fullName || !email || !subject ) {
    alert("Please fill in all fields.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  alert("Form submitted successfully!");
  this.reset();
});