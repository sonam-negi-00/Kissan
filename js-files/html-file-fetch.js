document.addEventListener('DOMContentLoaded', async () => {
    const headerResponse = await fetch('html-files/kissan-header.html');
    if (headerResponse.ok) {
        const headerText = await headerResponse.text();
        document.getElementById('header').innerHTML = headerText;
    } else {
        console.error('Failed to load: header.html');
    }
    
    const files = [
        'html-files/slider.htm',
        'html-files/kissan-veggies.html',
        'html-files/kissan-fertilizers.html',
        'html-files/kissan-flowers.htm',
        'html-files/kissan-tools.html',
        'html-files/kissan-pesticides.htm'
        
        
    ];

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