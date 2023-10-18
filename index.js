let currentIndex = 0;
const images = document.querySelectorAll('#image-list li');
const carouselContainer = document.getElementById('carousel-container');
const imageList = document.getElementById('image-list');

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;//indice actual + 1.
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;   //Actualiza el carousel.
    imageList.style.transform = `translateX(${offset}%)`;
}

// Cambia de imagen cada 3 segundos.
setInterval(nextImage, 3000);