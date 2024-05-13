let txt = document.getElementById("txt")

let montoInput = document.getElementById("pantallaA")

let montopor = document.getElementById("pantallaB")

let resultado = document.getElementById("resultado")

let btnBorrar = document.getElementById("borrar")




function agregarNumero(numero) {
    txt.value += numero
    
}

function limpiar() {
    txt.value = ""
    montoInput.value = ""
    montopor.value = ""
    resultado.value = ""
}


function borrar() {
    txt.value = txt.value.slice(0, -1)
    montoInput.value = montoInput.value.slice(0, -1)
    montopor.value = montopor.value.slice(0, -1)
    resultado.value = resultado.value.slice(0, -1)
}


function calcular () {
    if(txt.value === ""){
        alert("Ingrese una operación")
    }
    let resultado = eval(txt.value)
    txt.value = resultado
    montoInput.value = resultado
}


function porcentaje(numero){
    montoInput.value = numero * montoInput.value / 100 
}
function porcentajeC() {
    resultado.value = montopor.value * montoInput.value / 100
}









