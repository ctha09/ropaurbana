// Manejo de la Pantalla de Carga
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    // Esperamos 2 segundos para que se vea la animación y luego ocultamos
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 2000);
});

// Manejo del Carrusel Automático
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    // Desplaza el contenedor el porcentaje correspondiente
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Cambia de slide cada 5 segundos
setInterval(moveCarousel, 5000);