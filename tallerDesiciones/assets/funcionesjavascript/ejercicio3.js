'use strict'
function ingresarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let sexo = document.getElementById("sexo").value;

    let permiso = Boolean;

    if (sexo == "Hombre") {
        permiso = true
    }
    else if (sexo == "Mujer") {
        permiso = false
    }

    if (edad >= 18 && permiso == true) {
        resultado.innerHTML = `${nombre} su edad es ${edad} y su sexo es ${sexo} bienvenido`
    }
    else {
        resultado.innerHTML = `<br> No puede entrar a la pagina`
    }
}