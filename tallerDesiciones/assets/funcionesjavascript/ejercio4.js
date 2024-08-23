function ingresarDatos() {
    let numero = parseFloat(document.getElementById("numero").value);
    let absoluto=parseFloat(Math.abs(numero))
    resultado.innerHTML = `El resultado es ${absoluto}`

}