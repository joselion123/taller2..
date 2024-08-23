function ingresarDatos() {
    let numero = parseInt(document.getElementById("numero").value)
    let raiz = Math.sqrt(numero);
    if (numero < 0) {
        resultado.innerHTML = ` <h3> El resultado es imaginario `
    }
    else {
        resultado.innerHTML = `<h3> √${numero} = ${raiz} `
    }

}