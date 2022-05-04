'use strict';

const API_PACIENTES = 'https://alura-es-cursos.github.io/api-pacientes/pacientes.json';

const ajax = new XMLHttpRequest();
const botonTraerMasPacientes = document.getElementById('btn-mas-pacientes');
const informacionResultadoPeticion = document.getElementById('info-resultado-peticion');

botonTraerMasPacientes.addEventListener('click', () => {
    // Cada vez que se da un clic en el boton, usando el objeto XMLHttpRequest se realiza la peticion y cuando la peticion esta siendo cargada se capturan los datos y luego se agregan los pacientes traidos en la respuesta a la peticion de la API
    ajax.open('GET', API_PACIENTES);

    ajax.addEventListener('load', () => {
        if (ajax.status === 200) {
            let respuesta = JSON.parse(ajax.responseText);

            for (let item of respuesta) {
                adicionarPaciente(crearFilaTabla(item));
            }

            informacionResultadoPeticion.textContent = '🤙 La peticion se realizo de manera correcta';
        } else {
            informacionResultadoPeticion.textContent = '😥 Uppss...Ocurrio un error, los datos no se pudieron solicitar de manera correcta';
        }

    });

    ajax.send();
});