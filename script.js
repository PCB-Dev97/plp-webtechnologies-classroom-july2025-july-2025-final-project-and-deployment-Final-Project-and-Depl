// Responsive navigation menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Simple contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation and feedback
    document.getElementById('formMessage').textContent = "Thank you for reaching out!";
    this.reset();
});