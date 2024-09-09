// NAV Bar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});


// Add animation on scroll
document.addEventListener('scroll', function () {
    const reviewsSection = document.querySelector('.reviews');
    const reviewsSectionPosition = reviewsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (reviewsSectionPosition < screenPosition) {
        reviewsSection.classList.add('active');
    }
});

// On Form Submit

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});