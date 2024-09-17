document.addEventListener('DOMContentLoaded', function() {
    var mostrarPopup = document.getElementById('mostrar-popup');
    var popup = document.getElementById('popup');
    var cerrarPopup = document.getElementById('cerrar-popup');

    // Mostrar el pop-up al hacer clic en el botón
    mostrarPopup.addEventListener('click', function() {
        popup.style.display = 'flex'; // Mostrar pop-up
    });

    // Cerrar el pop-up al hacer clic en el icono de cerrar
    cerrarPopup.addEventListener('click', function() {
        popup.style.display = 'none'; // Ocultar pop-up
    });

    // Cerrar el pop-up al hacer clic fuera del contenido del pop-up
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // Ocultar pop-up
        }
    });
});