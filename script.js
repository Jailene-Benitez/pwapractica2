const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg"]; // Reemplaza con tus propias imágenes
let currentIndex = 0;
const imageElement = document.getElementById("image");

function showImage() {
    imageElement.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

// Muestra la primera imagen al cargar la página
showImage();