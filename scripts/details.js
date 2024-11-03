const wonderIndex = localStorage.getItem('wonder-index');

axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        const wonder =response.data[wonderIndex];
        const slideshow = document.getElementById('slideshow');
        const indicators = document.getElementById('indicators');

        //loop through every source
        wonder.links.images.forEach((imageSrc, index) =>{ 
            const imageElement = document.createElement('img');
            //identify images as slideshow slides
            imageElement.classList.add('mySlides');
            imageElement.src=imageSrc;
            imageElement.style.width = '100%';

            //add image element to the slideshow container at the beginning 
            //positions newer images on top of older ones
            slideshow.insertBefore(imageElement, slideshow.firstChild);

            const dot = document.createElement('span');
            dot.classList.add('w3-badge', 'demo', 'w3-border', 'w3-transparent', 'w3-hover-white');
            //change slide to corresponding index
            dot.onclick = () => currentDiv(index + 1);
            indicators.appendChild(dot);
        });

        document.getElementById('wonder-name').innerText = wonder.name;

        //show initial slide
        showDivs(slideIndex);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

let slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}