document.addEventListener('DOMContentLoaded', function() {
    var mostrarPopup = document.getElementById('mostrar-popup');
    var popup = document.getElementById('popup');
    var cerrarPopup = document.getElementById('cerrar-popup');

    mostrarPopup.addEventListener('click', function() {
        popup.style.display = 'flex'; // Mostrar pop-up
    });

    cerrarPopup.addEventListener('click', function() {
        popup.style.display = 'none'; // Ocultar pop-up
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none'; // Ocultar pop-up
        }
    });
});