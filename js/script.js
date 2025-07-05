// CABECERA RESPONSIVE
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('active');
    });
  });

// CARRUSEL

  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrusel-track');
    const imagenes = document.querySelectorAll('.carrusel-track img');
    let index = 0;

    setInterval(() => {
      index++;
      if (index >= imagenes.length) {
        index = 0;
      }

      const ancho = imagenes[0].clientWidth;
      track.style.transform = `translateX(-${index * ancho}px)`;
    }, 3000); // cambia cada 3 segundos
  });
