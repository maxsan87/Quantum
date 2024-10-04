document.addEventListener('DOMContentLoaded', function() {
    var mostrarPopupButtons = document.querySelectorAll('.anadir');
    var popup = document.getElementById('popup');
    var cerrarPopup = document.getElementById('cerrar-popup');

    mostrarPopupButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            popup.style.display = 'flex'; // Mostrar pop-up
        });
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
var SubMenu= document.querySelector('.submenu');
var openSubMenu= document.querySelector('.openmenu');

openSubMenu.addEventListener('click', function(){
    SubMenu.classList.toggle('show');
})
    document.addEventListener('click',function(e){  
    if(SubMenu.classList.contains('show')
        && !SubMenu.contains(e.target)
        && !openSubMenu.contains(e.target)){

            SubMenu.classList.remove('show');
        }
    
});