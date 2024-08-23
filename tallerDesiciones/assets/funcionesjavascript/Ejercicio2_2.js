function ingresarDatos(){
    let cantidad= document.getElementById("cantidad").value
    let total=0
    if (cantidad <200) {
        total=cantidad*14000
        resultado.innerHTML = ` total a pagar ${total}`
    }
    if (cantidad >=200 && cantidad <=300) {
        total=cantidad*11000
                resultado.innerHTML = ` total a pagar ${total}`
    }
    if (cantidad >300) {
        total=cantidad*9000
                resultado.innerHTML = ` total a pagar ${total}`
    }
}