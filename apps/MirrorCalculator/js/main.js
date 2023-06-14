const display = document.querySelector(".display"); // Selecciona el elemento HTML con la clase "display" y lo almacena en la variable display
const buttons = document.querySelectorAll(".btn"); // Selecciona todos los elementos HTML con la clase "btn" y los almacena en la variable buttons

buttons.forEach(button => {
    button.addEventListener("click", () => { // Agrega un event listener para el evento click a cada botón
        const ClickButton = button.textContent; // Obtiene el texto del botón que se ha hecho clic y lo almacena en la variable ClickButton

        if (button.id=== "c"){ // Si el botón tiene el id "c"
            display.textContent = "0"; // Establece el contenido de display como "0"
            return; // Termina la ejecución de la función
        }

        if (button.id === "del"){ // Si el botón tiene el id "del"
            if(display.textContent.length === 1 || display.textContent === "Failed"){ // Si el contenido de display tiene una longitud de 1 o es igual a "Failed"
                display.textContent="0"; // Establece el contenido de display como "0"
            } else{
                display.textContent = display.textContent.slice(0, -1); // Elimina el último carácter del contenido de display
            }
            return; // Termina la ejecución de la función
        }

        if(button.id === "same"){ // Si el botón tiene el id "same"
            try{
                display.textContent = eval(display.textContent); // Evalúa la expresión matemática contenida en display y establece el resultado como el nuevo contenido de display
            } catch{
                display.textContent = "Failed"; // Si ocurre un error al evaluar la expresión, establece el contenido de display como "Failed"
            }
            return; // Termina la ejecución de la función
        }

        if(display.textContent==="0" || display.textContent === "Failed"){ // Si el contenido de display es "0" o "Failed"
            display.textContent = ClickButton; // Establece el contenido de display como el texto del botón que se ha hecho clic
        } else {
            display.textContent += ClickButton; // Agrega el texto del botón que se ha hecho clic al contenido actual de display
        }
    })
})
