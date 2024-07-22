const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
const contenedorsubtitulo = document.querySelector(".contenedor-subtitulo");
const contenedorparrafo = document.querySelector(".contenedor-parrafo");
copia.style.display = "none";

// Desplazamiento para el cifrado César
const desplazamiento = 3;

// Función para encriptar texto usando el cifrado César
function encriptar(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        if (char >= 97 && char <= 122) { // letras minúsculas
            char = ((char - 97 + desplazamiento) % 26) + 97;
        } else if (char >= 65 && char <= 90) { // letras mayúsculas (si se quisiera incluir)
            char = ((char - 65 + desplazamiento) % 26) + 65;
        }
        textoEncriptado += String.fromCharCode(char);
    }
    return textoEncriptado;
}

// Conectando función con el botón
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value.toLowerCase());
    if (textoEncriptado.length === 0 || /^\s+$/.test(textoEncriptado)) {
        textArea.focus();
        Swal.fire({
            icon: 'info',
            iconColor: '#9C1F1F',
            background: '#a7b9c0',
            title: '¡Ups!',
            confirmButtonColor: '#9C1F1F',
            text: 'El campo se encuentra vacío. Escriba el texto que desea encriptar',
        });
        textArea.value = "";
    } else if (/[^a-z ]/.test(textoEncriptado)) {
        textArea.focus();
        Swal.fire({
            icon: 'info',
            iconColor: '#9C1F1F',
            background: '#a7b9c0',
            title: 'Recuerda!!!',
            confirmButtonColor: '#9C1F1F',
            text: 'Solo se permiten letras minúsculas y sin acentos',
        });
        textArea.value = "";
    } else {
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        contenedorsubtitulo.style.display = "none";
        contenedorparrafo.style.display = "none";
        textArea.value = "";
        textArea.focus();
        copia.style.display = "block";
    }
}

// Función para desencriptar texto usando el cifrado César
function desencriptar(texto) {
    let textoDesencriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        if (char >= 97 && char <= 122) { // letras minúsculas
            char = ((char - 97 - desplazamiento + 26) % 26) + 97;
        } else if (char >= 65 && char <= 90) { // letras mayúsculas (si se quisiera incluir)
            char = ((char - 65 - desplazamiento + 26) % 26) + 65;
        }
        textoDesencriptado += String.fromCharCode(char);
    }
    return textoDesencriptado;
}

// Conectando función con el botón
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value.toLowerCase());
    if (textoDesencriptado.length === 0 || /^\s+$/.test(textoDesencriptado)) {
        textArea.focus();
        Swal.fire({
            icon: 'info',
            iconColor: '#9C1F1F',
            background: '#a7b9c0',
            title: '¡Ups!',
            confirmButtonColor: '#9C1F1F',
            text: 'El campo se encuentra vacío. Escriba el texto que desea desencriptar',
        });
        textArea.value = "";
    } else if (/[^a-z ]/.test(textoDesencriptado)) {
        textArea.focus();
        Swal.fire({
            icon: 'info',
            iconColor: '#9C1F1F',
            background: '#a7b9c0',
            title: 'Recuerda!!!',
            confirmButtonColor: '#9C1F1F',
            text: 'Solo se permiten letras minúsculas y sin acentos.',
        });
        textArea.value = "";
    } else {
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        contenedorsubtitulo.style.display = "none";
        contenedorparrafo.style.display = "none";
        textArea.focus();
        copia.style.display = "block";
    }
}

// Función para copiar el texto
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    textArea.focus();
    mensaje.value = "";
    Swal.fire({
        icon: 'info',
        iconColor: '#9C1F1F',
        background: '#a7b9c0',
        title: 'Información',
        confirmButtonColor: '#9C1F1F',
        text: 'Texto copiado al portapapeles',
    });
}
