document.addEventListener('DOMContentLoaded', async () => {
    const headerResponse = await fetch('html-files/kissan-header.html');
    if (headerResponse.ok) {
        const headerText = await headerResponse.text();
        document.getElementById('header').innerHTML = headerText;
    } else {
        console.error('Failed to load: header.html');
    }
    
    const files = [
        'html-files/kissan-veggies.html',
        'html-files/kissan-fertilizers.html',
        'html-files/kissan-flowers.htm',
        'html-files/kissan-tools.html',
        'html-files/kissan-pesticides.htm'
        
        
    ];

    const sliderResponse = await fetch('html-files/slider.htm');
    if (sliderResponse.ok) {
        const sliderDiv = document.querySelector('.slider-content');
        const sliderText = await sliderResponse.text();
        sliderDiv.innerHTML = sliderText; 
        
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

    const contentDiv = document.getElementById('content');
        for (const file of files) {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            contentDiv.innerHTML += text; 
          
        } else {
            console.error('Failed to load:', file);
        }
    }
});
