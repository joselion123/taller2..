function ingresarDatos(){
    let permiso=document.getElementById("peso").value
    let tipo= document.getElementById("tipo").value
    let tamaño= document.getElementById("tamaño").value
    let total=0
    if (tipo="A" && tamaño==1){
    total=(peso*2000)+2000
    resultado.innerHTML = ` total a pagar ${total}`
    }
    if (tipo="A" && tamaño==2){
        total=(peso*2000)+1000
     resultado.innerHTML = ` total a pagar ${total}`
    }
    if (tipo="B" && tamaño==1){
    total=(peso*2000)-500
    resultado.innerHTML = ` total a pagar ${total}`   
    }
    if (tipo="A" && tamaño==1){
        total=(peso*2000)-900
     resultado.innerHTML = ` total a pagar ${total}`
        }    
}