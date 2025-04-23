const slides = document.querySelector('.slides');
const navItems = document.querySelectorAll('.nav-item');

function toggleSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    navItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

toggleSlide(0);