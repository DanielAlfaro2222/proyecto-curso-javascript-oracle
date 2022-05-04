'use strict';

const botonAdicionar = document.getElementById('adicionar-paciente');
const formulario = document.getElementById('form-adicionar');
const tabla = document.getElementById('tabla-pacientes');
const listaErrores = document.getElementById('lista-errores');

function obtenerDatosFormulario(formulario) {
    /**
     * Funcion encargada de capturar los datos ingresados en el formulario.
     * 
     * Retorna un objeto con todos los datos del paciente.
     */
    return {
        nombre: formulario.nombre.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(+formulario.peso.value, +formulario.altura.value)
    }
}

function crearColumnaTabla(valor, clase) {
    let columna = document.createElement('td');
    columna.textContent = valor;
    columna.classList.add(clase);

    return columna;
}

function crearFilaTabla(paciente) {
    // Funcion encargada de crear la nueva fila de la tabla con todos los datos del paciente.

    let pacienteTr = document.createElement("tr");

    pacienteTr.classList.add('paciente', 'container-row-table');

    const claseColumna = 'container-row-table__column';

    for (let dato of Object.values(paciente)) {
        pacienteTr.appendChild(crearColumnaTabla(dato, claseColumna));
    }

    return pacienteTr;
}

function validarDatosFormulario(formulario) {
    let errores = [];

    if (formulario.nombre.value.length === 0) {
        errores.push('El campo nombre no puede ir vacio');
    }

    if (formulario.peso.value.length === 0) {
        errores.push('El campo peso no puede ir vacio');
    }

    if (formulario.altura.value.length === 0) {
        errores.push('El campo altura no puede ir vacio');
    }

    if (formulario.gordura.value.length === 0) {
        errores.push('El campo porcentaje de gordura no puede ir vacio');
    }

    if (formulario.altura.value >= 3 || formulario.altura.value < 0) {
        errores.push('Ingrese una altura valida');
    }

    if (formulario.peso.value >= 1000 || formulario.peso.value < 0) {
        errores.push('Ingrese un peso valido');
    }

    if (formulario.gordura.value > 100 || formulario.gordura.value < 0) {
        errores.push('Ingrese un % de gordura valido');
    }

    return errores;
}

function mostrarErrores(errores) {
    for (let error of errores) {
        let elemento = document.createElement('li');
        elemento.classList.add('container-errors-form__element');
        elemento.textContent = error;
        listaErrores.appendChild(elemento);
    }
}

function adicionarPaciente(fila) {
    return tabla.appendChild(fila);
}

botonAdicionar.addEventListener("click", event => {
    // Prevenir que la pagina se recargue cada vez que el usuario envia los datos del formulario.
    event.preventDefault();

    const datosPaciente = obtenerDatosFormulario(formulario);

    let errores = validarDatosFormulario(formulario);

    // Eliminar los mensajes de error anteriores
    listaErrores.innerHTML = "";

    if (errores.length !== 0) {
        mostrarErrores(errores);

        return;
    }

    const filaTabla = crearFilaTabla(datosPaciente);

    // Despues de crear la nueva fila de la tabla, se la agrego a la tabla.
    adicionarPaciente(filaTabla);

    // Establece el valor de cada campo del formulario con su valor por defecto, es decir limpia el formulario despues de agregar al nuevo paciente.
    formulario.reset();
});