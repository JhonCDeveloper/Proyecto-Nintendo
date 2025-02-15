let indiceActual = 0;

function cambiarImagen(src) {
  const imagenPrincipal = document.getElementById('imagen-principal');
  imagenPrincipal.src = src;

  // Quitar la clase activa a todas las miniaturas
  const miniaturas = document.querySelectorAll('.carrete-imagenes img');
  miniaturas.forEach(img => img.classList.remove('activa'));

  // Clase activa a la miniatura seleccionada
  const miniaturaClicada = [...miniaturas].find(img => img.src === src);
  if (miniaturaClicada) {
    miniaturaClicada.classList.add('activa');
  }
}

function cambiarImagenAutomatica() {
  const miniaturas = document.querySelectorAll('.carrete-imagenes img');
  if (miniaturas.length === 0) return;

  indiceActual = (indiceActual + 1) % miniaturas.length;
  const nuevaSrc = miniaturas[indiceActual].src;

  cambiarImagen(nuevaSrc);
}

let intervalo;

function iniciarCambioAutomatico() {
  intervalo = setInterval(cambiarImagenAutomatica, 3000);
}

function detenerCambioAutomatico() {
  clearInterval(intervalo);
}

document.querySelectorAll('.carrete-imagenes img').forEach((img, index) => {
  img.addEventListener('click', () => {
    detenerCambioAutomatico();
    cambiarImagen(img.src);
    indiceActual = index; // Se actualiza la imagen actual para que se continúe a partir de ella

    // 🔄 Reanudar el pase automático luego de hacer clic
    iniciarCambioAutomatico();
  });
});

// Llamada de función para activarla
iniciarCambioAutomatico();