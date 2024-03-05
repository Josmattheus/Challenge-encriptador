/*desactivar la segunda textbox al inicio porque no hay texto*/
window.onload = function() {
    /*dejar de mostrar textbox*/
    document.getElementById('segundo-textarea').style.display = 'none';
    document.getElementById('copiar-btn').style.display = 'none';
    /*mostrar imagen*/
}

function mostarImagenQuitarTexto(){
    /*mostrar y dejar de mostrar elementos de la segunda textarea*/
    document.getElementById('imagen-persona').style.display = 'inline-block';
    document.getElementById('desc1').style.display = 'inline-block';
    document.getElementById('desc2').style.display = 'inline-block';
    document.getElementById('copiar-btn').style.display = 'inline-block';
    document.getElementById('segundo-textarea').style.display = 'none';
}

function mostarTextoQuitarImagen(){
    /*mostrar y dejar de mostrar elementos de la segunda textarea*/
    document.getElementById('imagen-persona').style.display = 'none';
    document.getElementById('desc1').style.display = 'none';
    document.getElementById('desc2').style.display = 'none';
    document.getElementById('copiar-btn').style.display = 'inline-block';
    document.getElementById('segundo-textarea').style.display = 'inline-block';
}


function procesar(opcion) {
    let textoSinEncriptar = document.getElementById('primer-textarea').value.toLowerCase();
    let textoEncriptado = document.getElementById('segundo-textarea').value.toLowerCase();
    mostarTextoQuitarImagen();

    if (opcion == 'encriptar'){
        let resultado = encriptarLetras(textoSinEncriptar);
        document.getElementById('segundo-textarea').value = resultado;
    }
    else {
        let resultado = desencriptarLetras(textoSinEncriptar);
        document.getElementById('segundo-textarea').value = resultado;
    }

    revisarCambio();
}

/*
function revisarCambio(){
    let textoSinEncriptar = document.getElementById('primer-textarea').value;
    let textoEncriptado = document.getElementById('segundo-textarea').value;
    if(textoSinEncriptar == '' || textoEncriptado == ''){
        mostarImagenQuitarTexto();
    }
}
*/

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

function copiarContenido() {
    // Get the text content of the second textarea
    let contenido = document.getElementById('segundo-textarea').value;

    // Create a temporary textarea element
    let tempTextarea = document.createElement('textarea');
    
    // Set the value of the temporary textarea to the content you want to copy
    tempTextarea.value = contenido;

    // Append the temporary textarea to the document
    document.body.appendChild(tempTextarea);

    // Select the text in the temporary textarea
    tempTextarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextarea);

    // Optionally, provide some user feedback
    alert('Contenido copiado al portapapeles');
}

/*
function expandirAreaTexto(id) {
    const areaTexto = document.getElementById(id);
    areaTexto.style.height = 'auto'; // Reset the height to auto
    areaTexto.style.height = `${areaTexto.scrollHeight}px`; // Set the height to the scrollHeight
}
*/