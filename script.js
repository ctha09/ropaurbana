// Manejo del Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 2000);
});

// Manejo del Carrusel
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Rotación cada 4 segundos
setInterval(moveCarousel, 4000);
