// Seleccionamos todos los elementos que tienen la clase 'scroll'
const elementosScroll = document.querySelectorAll('.scroll');

function mostrarElementos() {
  const alturaPantalla = window.innerHeight;

  elementosScroll.forEach(el => {
    // Obtenemos la distancia del elemento respecto a la parte superior de la pantalla
    const distancia = el.getBoundingClientRect().top;

    // Si el elemento ya ha entrado en la zona visible (con un margen de 100px)
    if (distancia < alturaPantalla - 100) {
      el.classList.add('activo');
    }
  });
}

// Escuchamos el evento de scroll y el de carga inicial de la página
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('DOMContentLoaded', mostrarElementos);