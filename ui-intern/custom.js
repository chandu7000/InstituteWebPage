let currentIndex = 0;
const items = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
const intervalTime = 1000; // Time between slides in milliseconds

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            item.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Auto-slide functionality
let slideInterval = setInterval(nextSlide, intervalTime);

// Pause auto-slide on hover and resume when not hovering
const carousel = document.querySelector('.testimonial-carousel');
carousel.addEventListener('mouseover', () => clearInterval(slideInterval));
carousel.addEventListener('mouseout', () => slideInterval = setInterval(nextSlide, intervalTime));

// Initialize the first slide
showSlide(currentIndex);
