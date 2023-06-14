const generatePassword = (base, length) => {
    let password = ""; // Variable para almacenar la contraseña generada

    for (let x = 0; x < length; x++) { // Bucle para generar cada carácter de la contraseña
        let random = Math.floor(Math.random() * base.length); // Generar un número aleatorio para seleccionar un carácter de la cadena base
        password += base.charAt(random); // Agregar el carácter seleccionado a la contraseña
    }

    return password; // Devolver la contraseña generada
};

const generate = () => {
    let length = parseInt(inputLength.value); // Obtener la longitud deseada de la contraseña desde un elemento de entrada HTML

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Cadena de caracteres base que incluye letras mayúsculas y minúsculas
    const numbers = "0123456789"; // Cadena de caracteres que incluye números
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><"; // Cadena de caracteres que incluye símbolos especiales

    if (checkbox1.checked) base += numbers; // Agregar los números a la cadena base si la casilla de verificación 1 está marcada

    if (checkbox2.checked) base += symbols; // Agregar los símbolos especiales a la cadena base si la casilla de verificación 2 está marcada

    generatedPassword.innerText = generatePassword(base, length); // Generar la contraseña utilizando la cadena base y la longitud especificada, y mostrarla en un elemento HTML
};

window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate(); // Cuando se hace clic en el botón de generar, llamar a la función generate para generar una nueva contraseña
    });
});
