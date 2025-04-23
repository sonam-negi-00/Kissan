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
    
        initializeSlider();
    } else {
        console.error('Failed to load: slider.htm');
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
