'use strict';

const campoFiltro = document.getElementById('filtro-tabla');

campoFiltro.addEventListener('input', () => {
    const pacientes = document.querySelectorAll('.paciente');

    for (let paciente of pacientes) {
        let nombre = paciente.children[0].textContent.toLowerCase();
            
        if (nombre.includes(campoFiltro.value.toLowerCase())) {
            paciente.classList.remove('ocult-pacient');
        } else {
            paciente.classList.add('ocult-pacient');
        }
    }
})