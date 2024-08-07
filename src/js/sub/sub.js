// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones "Comprar"
    const botonesComprar = document.querySelectorAll('.producto__button');

    // Agrega un evento de clic a cada botón
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            event.preventDefault(); // Previene la acción predeterminada del enlace
            alert('El producto se ha agregado al carrito de compras');
        });
    });
});
