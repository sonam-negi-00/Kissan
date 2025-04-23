document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelector('.slides');
const navItems = document.querySelectorAll('.nav-item');

function toggleSlide(index) {
    console.log('Toggling slide to index:', index);
    if (slides) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    navItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
} else {
    console.error('Slides element not found!');
    }
}

toggleSlide(0);
});