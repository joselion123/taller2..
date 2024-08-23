function ingresarDatos() {
    let numero = parseFloat(document.getElementById("numero").value)
    let porcentjae = numero * 0.05;
    if (isNaN(numero)) {
        resultado.innerHTML = `No ingreso nada`
    }
    else {
        resultado.innerHTML = `Valor original   ${numero} *5%  = ${porcentjae}`
    }
}