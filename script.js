// Adding some interactive behavior with JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const heroHeading = document.querySelector('.hero h1');

    // Example of interactive behavior with text fade-in
    setTimeout(() => {
        heroHeading.style.opacity = '1';
        heroHeading.style.transition = 'opacity 2s ease-in-out';
    }, 500);
});
