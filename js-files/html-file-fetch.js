document.addEventListener('DOMContentLoaded', async () => {
    const files = [
       
        'html-files/kissan-veggies.html',
        
        
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