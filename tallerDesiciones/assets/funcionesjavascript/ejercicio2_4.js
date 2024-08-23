function ingresarDatosÇ(){
let cantidad=document.getElementById("cantidad").value
let total=0;
if (cantidad>=100){
    total=cantidad*6500
    resultado.innerHTML = ` total a pagar ${total}`
}
if (cantidad>=50 && cantidad<=99){
    total=cantidad*7000
    resultado.innerHTML = ` total a pagar ${total}`
}
if (cantidad>=30 && cantidad<=49){
    total=cantidad*9500
    resultado.innerHTML = ` total a pagar ${total}`
}
if (cantidad<30){
    total=1000000/cantidad
    resultado.innerHTML = ` total a pagar ${total}`
}
}