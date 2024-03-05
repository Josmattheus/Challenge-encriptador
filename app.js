/*desactivar la segunda textbox al inicio porque no hay texto*/
window.onload = function() {
    /*dejar de mostrar textbox*/
    document.getElementById('parrafo-encriptado').style.display = 'none';
    /*mostrar imagen*/
}

function procesar(opcion) {
    let textoSinEncriptar = document.getElementById('parrafo-sin-encriptar').value.toLowerCase();
    let textoEncriptado = document.getElementById('parrafo-encriptado').value.toLowerCase();

    if (opcion == 'encriptar'){
        let resultado = encriptarLetras(textoSinEncriptar);
        document.getElementById('parrafo-encriptado').value = resultado;
    }
    else{
        let resultado = desencriptarLetras(textoEncriptado);
        document.getElementById('parrafo-sin-encriptar').value = resultado;
    }
}


function encriptarLetras(mensaje) {
    let resultado = '';

    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += mensaje[i];
        }
    }

    return resultado;
}

function desencriptarLetras(mensaje) {
    let resultado = '';

    for (let i = 0; i < mensaje.length; i++) {
        if (mensaje.substring(i, i + 2) === 'ai') {
            resultado += 'a';
            i++;
        } else if (mensaje.substring(i, i + 5) === 'enter') {
            resultado += 'e';
            i += 4;
        } else if (mensaje.substring(i, i + 4) === 'imes') {
            resultado += 'i';
            i += 3;
        } else if (mensaje.substring(i, i + 4) === 'ober') {
            resultado += 'o';
            i += 3;
        } else if (mensaje.substring(i, i + 4) === 'ufat') {
            resultado += 'u';
            i += 3;
        } else {
            resultado += mensaje[i];
        }
    }

    return resultado;
}
/*
function expandirAreaTexto(id) {
    const areaTexto = document.getElementById(id);
    areaTexto.style.height = 'auto'; // Reset the height to auto
    areaTexto.style.height = `${areaTexto.scrollHeight}px`; // Set the height to the scrollHeight
}
*/