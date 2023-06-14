window.addEventListener('DOMContentLoaded', event => {
    // Cuando se carga el contenido del DOM

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        // Si existe el elemento con el id "sideNav" en el cuerpo del documento

        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
        // Crea una instancia de ScrollSpy de Bootstrap para el cuerpo del documento, con el objetivo de "#sideNav" y un desplazamiento de 74 píxeles
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    // Obtiene el elemento con la clase "navbar-toggler" en el cuerpo del documento
    // Obtiene todos los elementos con la clase "nav-link" dentro de "#navbarResponsive" y los convierte en un array

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            // Para cada elemento en el array de elementos responsivos del menú de navegación

            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                // Si el botón de alternancia de la barra de navegación no está oculto

                navbarToggler.click();
                // Simula un clic en el botón de alternancia de la barra de navegación
            }
        });
    });

});


const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus();
});
// Agrega un event listener al modal con el id "myModal" que se activa cuando se muestra el modal,
// y establece el foco en el elemento con el id "myInput"
