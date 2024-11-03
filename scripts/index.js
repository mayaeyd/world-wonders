// const axios = require('axios');



axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        const wondersDiv = document.getElementById('wonders-container');
        const result = response.data;

        wondersDiv.innerHTML = '';
        
        result.forEach(wonder => {
            const wonderDiv = document.createElement('div');
            const image = document.createElement('img');

            wonderDiv.classList.add('wonder-container');
            image.classList.add('image-container');

            image.src=wonder.links.images[0];

            wonderDiv.appendChild(image);
            wondersDiv.appendChild(wonderDiv);
        });
        new Masonry(wondersDiv, {
            itemSelector: '.wonder-container',
            columnWidth: '.wonder-container',
            percentPosition: true
        });
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

