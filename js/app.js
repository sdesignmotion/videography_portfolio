// JavaScript functionality for videography portfolio

// Mobile menu toggle with hamburger animation
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

// Smooth scrolling for navbar links
const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    // Handle AJAX form submission (assuming you have an endpoint for this)
    fetch('/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => alert('Form submitted successfully!'))
    .catch(error => console.error('Error:', error));
});

// Navigation link handling
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
