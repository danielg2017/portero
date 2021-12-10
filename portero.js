var piso = ""; //input piso
var divPiso = document.getElementById("piso");
var dpto = ""; //input dpto
var divDpto = document.getElementById("dpto"); // hace lo mismo que para el div piso
var visor = document.getElementById("visor"); //div visor
var seleccionado = "piso";

function marcar(numero) {
    if (seleccionado == "piso") {
        if (piso.length <= 1) {
            piso = piso + numero;
            divPiso.innerText = piso;
        }
    } else if (seleccionado == "dpto") {
        dpto = numero;
        divDpto.innerText = dpto;
    }
}

function llamar() {
    console.log("llamar");
    if (piso == "") {
        visor.innerText = "Debe ingresar un valor en piso";
        return;
    } else if (dpto == "") {
        visor.innerText = "Debe ingresar un valor en dpto";
        return;
    } else if (parseInt(piso) > 42) {
        visor.innerText = "El piso no puede ser mayor a 42";
        return;
    } else if (parseInt(dpto) < 1 || parseInt(dpto) > 8) {
        visor.innerText = "El departamento debe ser entre 1 y 8";
        return;
    }
    visor.innerText = "Llamando al piso " + piso + ", dpto " + dpto;

    // cambiar el texto del visor usando piso y dpto
}

function seleccionar(tipo) {
    seleccionado = tipo;
}

function borrar() {
    //piso y depto sea '', y limpiar los divs innerText = ''
    divPiso.innerHTML = "&nbsp;";
    divDpto.innerHTML = "&nbsp;";
    visor.innerHTML = "&nbsp;";
    piso = "";
    dpto = "";
    console.log("borrar");
}
