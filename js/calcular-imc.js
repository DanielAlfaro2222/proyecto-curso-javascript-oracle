'use strict';

const pacientes = document.querySelectorAll(".paciente");

for (let paciente of pacientes) {
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdIMC = paciente.querySelector(".info-imc");

    let pesoEsValido = validarPeso(peso);
    let alturaEsValida = validarAltura(altura);

    if(!pesoEsValido) {
        tdIMC.textContent = "Peso incorrecto";
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida){
        tdIMC.textContent = "Altura incorrecta";
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso, altura);
    }

}

function calcularIMC(peso = 0, altura = 0) {
    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validarPeso(peso) {

    return (peso < 0 || peso > 1000) ? false : true;
}

function validarAltura(altura) {

    return (altura < 0 || altura > 3.00) ? false : true;
}