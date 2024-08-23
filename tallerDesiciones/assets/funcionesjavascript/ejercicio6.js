function ingresarDatos() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero1 > 0 && numero2 > 0) {
        resultado.innerHTML = `Los numeros positivos ingresados fueron ${numero1} y ${numero2}`
    }
    else if (numero1 > 0) {
        resultado.innerHTML = `El numero positivo es ${numero1}`
    }
    else if (numero2 > 0) {
        resultado.innerHTML = `El numero positivo es ${numero2}`
    }
}