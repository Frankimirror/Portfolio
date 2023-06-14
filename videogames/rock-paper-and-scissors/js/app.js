const ROCK = "rock"; // Constante que representa la opción "rock"
const PAPER = "paper"; // Constante que representa la opción "paper"
const SCISSORS = "scissors"; // Constante que representa la opción "scissors"

const ROCKBTN = document.getElementById("rock"); // Obtiene el elemento HTML con el id "rock" y lo almacena en la variable ROCKBTN
const PAPERBTN = document.getElementById("paper"); // Obtiene el elemento HTML con el id "paper" y lo almacena en la variable PAPERBTN
const SCISSORSBTN = document.getElementById("scissors"); // Obtiene el elemento HTML con el id "scissors" y lo almacena en la variable SCISSORSBTN
const RESULTEXT = document.getElementById("start-text"); // Obtiene el elemento HTML con el id "start-text" y lo almacena en la variable RESULTEXT
const USERIMAGE = document.getElementById("user-image"); // Obtiene el elemento HTML con el id "user-image" y lo almacena en la variable USERIMAGE
const MACHINEIMAGE = document.getElementById("machine-image"); // Obtiene el elemento HTML con el id "machine-image" y lo almacena en la variable MACHINEIMAGE

const TIE = 0; // Constante que representa un empate
const WIN = 1; // Constante que representa una victoria
const LOST = 2; // Constante que representa una derrota

ROCKBTN.addEventListener("click", () =>{
    playgame(ROCK); // Agrega un event listener para el evento click al botón ROCKBTN y llama a la función playgame con la opción "rock"
});

PAPERBTN.addEventListener("click", () =>{
    playgame(PAPER); // Agrega un event listener para el evento click al botón PAPERBTN y llama a la función playgame con la opción "paper"
});

SCISSORSBTN.addEventListener("click", () =>{
    playgame(SCISSORS); // Agrega un event listener para el evento click al botón SCISSORSBTN y llama a la función playgame con la opción "scissors"
});

function calcResult(userOption, machineOption){
    if(userOption === machineOption){ // Si la opción del usuario es igual a la opción de la máquina
        return TIE; // Retorna el resultado de empate
    } else if (userOption === ROCK){ // Si la opción del usuario es "rock"
        if (machineOption === PAPER) return LOST; // Si la opción de la máquina es "paper", retorna el resultado de derrota
        if (machineOption === SCISSORS) return WIN; // Si la opción de la máquina es "scissors", retorna el resultado de victoria
    } else if (userOption === PAPER){ // Si la opción del usuario es "paper"
        if (machineOption === SCISSORS) return LOST; // Si la opción de la máquina es "scissors", retorna el resultado de derrota
        if (machineOption === ROCK) return WIN; // Si la opción de la máquina es "rock", retorna el resultado de victoria
    } else if (userOption === SCISSORS){ // Si la opción del usuario es "scissors"
        if(machineOption === ROCK) return LOST; // Si la opción de la máquina es "rock", retorna el resultado de derrota
        if (machineOption === PAPER) return WIN; // Si la opción de la máquina es "paper", retorna el resultado de victoria
    } 
}

function playgame(userOption){
    USERIMAGE.src="img/"+userOption+".png"; // Cambia la imagen del usuario en el HTML según la opción seleccionada

    RESULTEXT.innerHTML = "Machine is thinking and chossing!"; // Cambia el texto en el HTML para indicar que la máquina está pensando y eligiendo

    const INTERVAL = setInterval(function(){ // Crea un intervalo de tiempo
        const machineOption = calcMachineOption(); // Calcula la opción de la máquina
        MACHINEIMAGE.src="img/"+machineOption+".png"; // Cambia la imagen de la máquina en el HTML según la opción seleccionada por la máquina
    }, 200);
    
    
    setTimeout(function() { // Después de un tiempo determinado
        clearInterval(INTERVAL); // Limpia el intervalo de tiempo
        const machineOption = calcMachineOption(); // Calcula la opción de la máquina nuevamente
        const result = calcResult(userOption, machineOption); // Calcula el resultado del juego según las opciones seleccionadas
    
        MACHINEIMAGE.src="img/"+machineOption+".png"; // Cambia la imagen de la máquina en el HTML a la opción seleccionada por la máquina

        switch(result){ // Realiza acciones según el resultado del juego
            case TIE:
                RESULTEXT.innerHTML = "You have tied"; // Cambia el texto en el HTML para indicar un empate
                break;
            case WIN:
                RESULTEXT.innerHTML = "You have win"; // Cambia el texto en el HTML para indicar una victoria
                break;
            case LOST:
                RESULTEXT.innerHTML = "You have lost"; // Cambia el texto en el HTML para indicar una derrota
                break;
        }
    }, 2000); // Después de 2 segundos

}

function calcMachineOption (){
   const NUMBER = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2
   switch (NUMBER){ // Retorna una opción de la máquina basada en el número aleatorio generado
    case 0:
        return ROCK;
    case 1: 
        return PAPER;
    case 2:
        return SCISSORS;
   }   
}
