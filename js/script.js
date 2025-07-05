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


  //   Lightbox

const galleryImages = document.querySelectorAll(".galeria-grid img");
const lightbox = document.getElementById("image-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// CONTACTO

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita el envío real
      alert("¡Gracias! Tu mensaje ha sido enviado correctamente.");
      form.reset(); // Limpia el formulario
    });
  });

//Flecha para subir arriba

  const btnSubir = document.getElementById('btn-subir');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnSubir.style.display = 'block';
    } else {
      btnSubir.style.display = 'none';
    }
  });

  btnSubir.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

