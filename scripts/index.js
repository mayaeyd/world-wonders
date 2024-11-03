// const axios = require('axios');

axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        const wondersDiv = document.getElementById('wonders-container');
        const result = response.data;

        wondersDiv.innerHTML = '';

        
        result.forEach(wonder => {
            const wonderDiv = document.createElement('div');
            const image = document.createElement('img');
            const name = document.createElement('div');

            wonderDiv.classList.add('wonder-container');
            image.classList.add('image-container');
            name.classList.add('wonder-title');

            image.src=wonder.links.images[0];
            image.setAttribute('loading', 'lazy');
            name.textContent = wonder.name;

            wonderDiv.appendChild(image);
            wonderDiv.appendChild(name);
            wondersDiv.appendChild(wonderDiv);
        });

        new Masonry(wondersDiv,{
            itemSelector: '.wonder-container',
            gutter:4,
        });
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

