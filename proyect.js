let txt = document.getElementById("txt")

let montoInput = document.getElementById("pantallaA")

let montopor = document.getElementById("pantallaB")

let resultado = document.getElementById("resultado")

let btnBorrar = document.getElementById("borrar")

/*Para calcular la edad: date.now () retorna demilisegundos desdeel 1 de enero de 1970. Obtiene el tiempo actual
en milisegundos. Gettime () retorna el número desde la medianoche (1 de enero de 1970, UTC) para una fecha y
hora específica.*/

/*Math.abs: retorna el valor absoluto deun número */

let naci = document.getElementById("naci")
let edad = document.getElementById("edad")
let boton = document.getElementById("boton")

function calcularEdad(fecha) {
    let diferenciaFecha = date.now() - fecha.gettime()
    fecha = new Date (diferenciaFecha)
    return Math.abs(fecha.getUTCFullYear()-1970)    
}
boton.addEventListener("click", function () {
    edad.value = calcularEdad(new Date (naci))
})


function agregarNumero(numero) {
    txt.value += numero
    
}



function limpiar() {
    txt.value = ""
    montoInput.value = ""
    montopor.value = ""
    resultado.value = ""
}


/* Slice: quita la última posición (a, b); a = primera posición, b = la última posición
(-1) va a tomar la última posición del arreglo*/
function borrar() {
    txt.value = txt.value.slice(0, -1)
    montoInput.value = montoInput.value.slice(0, -1)
    montopor.value = montopor.value.slice(0, -1)
    resultado.value = resultado.value.slice(0, -1)
}


/* Eval: evalua lo que contiene adentro y devuelve un valor*/
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
















