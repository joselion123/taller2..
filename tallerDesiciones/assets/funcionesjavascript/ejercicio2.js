'use strict'
function ingresarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    if (edad >= 18) {
        return resultado.innerHTML = `<br> <h2> ${nombre}  su edad es ${edad}`;
    }
    else if (edad < 18) {
        return resultado.innerHTML = `<br> <h2>Usted es menor de edad no puede usar la app`;
    }
}