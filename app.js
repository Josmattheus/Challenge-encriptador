let mensajeNoEnc = document.getElementById('parrafo-sin-encriptar');
let mensajeEnc = document.getElementById('parrafo-encriptado');
let mensaje = "";

function encriptarLetras(mensaje) {
    let contador = 0;

    while (mensaje.indexOf('a') > -1 || mensaje.indexOf('e') > -1 || mensaje.indexOf('i') > -1 || mensaje.indexOf('o') > -1 || mensaje.indexOf('u') > -1) {
        if (mensaje[contador] === 'a') {
            mensaje = mensaje.substring(0, contador) + 'ai' + mensaje.substring(contador + 1);
            contador += 2;
        } else if (mensaje[contador] === 'e') {
            mensaje = mensaje.substring(0, contador) + 'enter' + mensaje.substring(contador + 1);
            contador += 5;
        } else if (mensaje[contador] === 'i') {
            mensaje = mensaje.substring(0, contador) + 'imes' + mensaje.substring(contador + 1);
            contador += 4;
        } else if (mensaje[contador] === 'o') {
            mensaje = mensaje.substring(0, contador) + 'ober' + mensaje.substring(contador + 1);
            contador += 4;
        } else if (mensaje[contador] === 'u') {
            mensaje = mensaje.substring(0, contador) + 'ufat' + mensaje.substring(contador + 1);
            contador += 4;
        }

        contador++;
    }

    return mensaje;
}

function desencriptarLetras(mensaje) {
    let contador = 0;

    while (mensaje.indexOf('ai') > -1 || mensaje.indexOf('enter') > -1 || mensaje.indexOf('imes') > -1 || mensaje.indexOf('ober') > -1 || mensaje.indexOf('ufat') > -1) {
        if (mensaje.substring(contador, contador + 2) === 'ai') {
            mensaje = mensaje.substring(0, contador) + 'a' + mensaje.substring(contador + 2);
            contador++;
        } else if (mensaje.substring(contador, contador + 5) === 'enter') {
            mensaje = mensaje.substring(0, contador) + 'e' + mensaje.substring(contador + 5);
            contador++;
        } else if (mensaje.substring(contador, contador + 4) === 'imes') {
            mensaje = mensaje.substring(0, contador) + 'i' + mensaje.substring(contador + 4);
            contador++;
        } else if (mensaje.substring(contador, contador + 4) === 'ober') {
            mensaje = mensaje.substring(0, contador) + 'o' + mensaje.substring(contador + 4);
            contador++;
        } else if (mensaje.substring(contador, contador + 4) === 'ufat') {
            mensaje = mensaje.substring(0, contador) + 'u' + mensaje.substring(contador + 4);
            contador++;
        }

        contador++;
    }

    return mensaje;
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//iterativa que revisa si la textbox de texto sin ecnriptar esta vacia o no
function revisarCaja(parrafoId){
    if (mensajeEnc == ""){ //si parrafo vacio, desactiva el boton
        document.getElementById(parrafoId).setAttribute('disabled');
    }
}

function encriptar(){
    let mensaje = mensajeNoEnc.value
    //caso mensaje vacio
    if (mensaje == "")
    return;

    else{
        asignarTextoElemento('parrafo-encriptado',`${asignarTextoElemento(encriptarLetras(mensajeNoEnc))}`); //encriptar el parrafo
        revisarCaja('boton-encriptar');
        return;
    }
}

function desencriptar(){
    let mensaje = mensajeEnc.value
    //caso mensaje vacio
    if (mensaje == "")
    return;

    else{
        asignarTextoElemento('parrafo-sin-encriptar',`${asignarTextoElemento(desencriptarLetras(mensajeNoEnc))}`) //desencriptar el parrafo
        revisarCaja('boton-desencriptar');
        return;
    }
}

revisarCaja('boton-encriptar');
revisarCaja('boton-desencriptar');

/*
document.getElementById('boton-encriptar').addEventListener('click', function() {
    encriptar(mensajeNoEnc.value);
});

document.getElementById('boton-desencriptar').addEventListener('click', function() {
    desencriptar(mensajeNoEnc.value);
});
*/