let indice = 0;

function mover(direccion) {
    const carrusel = document.querySelector('.imagenes');
    const imagenes = document.querySelectorAll('.imagenes img');
    const numImagenes = imagenes.length;
    const anchoImagen = imagenes[0].clientWidth;
    
    indice = (indice + direccion + numImagenes) % numImagenes;
    
    const desplazamiento = -indice * anchoImagen;
    carrusel.style.transform = `translateX(${desplazamiento}px)`;
}