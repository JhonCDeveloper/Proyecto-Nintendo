function cambiarImagen(src) {
  document.getElementById('imagen-principal').src = src;

  // Remover clase activa de todas las miniaturas
  const miniaturas = document.querySelectorAll('.carrete-imagenes img');
  miniaturas.forEach(img => img.classList.remove('activa'));

  // Agregar clase activa a la miniatura clicada
  const miniaturaClicada = [...miniaturas].find(img => img.src === src);
  miniaturaClicada.classList.add('activa');
}