function ingresarDatos() {
    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)
    if (numero1 != 0 && numero2 != 0) {
        resultado.innerHTML = `${numero1} ${numero2}`
    }
    else if (numero1 == 0 || numero2 == 0) {
        resultado.innerHTML = `Alguno de los numeros ingresados es invalido`
    }
}