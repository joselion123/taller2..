function ingresarDatos(){
    let estrato = parseFloat(document.getElementById("estrato").value)
    let MetrosCubicos = parseFloat(document.getElementById("MetrosCubicos").value)

    if (isNaN(MetrosCubicos)) {
        resultado.innerHTML = `Ingrese un valor en metros cubicos`
    }
    else {
        if (estrato == 1) {
            estrato = 5000;
        }
        if (estrato == 2) {
            estrato = 6500;
        }
        if (estrato == 3) {
            estrato = 7000;
        }
        if (estrato == 4) {
            estrato = 8000;
        }
        if (estrato == 5) {
            estrato = 9200;
        }

        let cotizacion = estrato * MetrosCubicos;
        resultado.innerHTML = `El costo cotizado es de: ${cotizacion}$`
    }
}
