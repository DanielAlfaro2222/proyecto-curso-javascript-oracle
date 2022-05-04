'use strict';

const listadoPacientes = document.getElementById('tabla-pacientes');

// Escuchar el evento doble clic en cualquier elemento del tbody de la tabla y luego eliminar el nodo padre del elemento que disparo el evento.
listadoPacientes.addEventListener('dblclick', event => {
    event.target.parentNode.classList.add('eliminar-fila');
    setTimeout(() => event.target.parentNode.remove(), 500);
});