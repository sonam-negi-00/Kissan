function initializeSlider() {
    const slides = document.querySelector('.slides');
    const navItems = document.querySelectorAll('.nav-item');

    function toggleSlide(index) {
        console.log('toggleSlide called with index:', index);
        if (slides) {
            slides.style.transform = `translateX(-${index * 100}%)`;
            navItems.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        } else {
            console.error("The '.slides' element was not found in the DOM (after loading slider.htm).");
        }
    }

    if (slides && navItems.length > 0) {
        toggleSlide(0); // Show the first slide by default
        navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                toggleSlide(index);
            });
        });
    }
}
