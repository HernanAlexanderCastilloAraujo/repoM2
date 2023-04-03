//alert("hola por segunda vez!")

const agregar = document.getElementById("agregar");

function cambiarColor(event) { 
const elemento = event.target; // si recibo en el evento que quien ejecutó el evento fue cuadro, entonces quiero que className sea cuadroRojo para que cambie de color, y viceversa
if(elemento.className === "recuadro"){
  elemento.className = "recuadroRojo";
} else {
    elemento.className = "recuadro";
}
}

function clickHandler(event) {
  // addEventListener le pasa el evento como parametro a la funcion que se ejecuta, este evento es un objeto que contiene informacion variada, por ejemplo, quien ejecutó el evento, que elemento lo ejecutó, en que posicion se ejecutó, etc.
  // la propiedad que nos interesa es target, que es el elemento que ejecutó el evento
  console.log("todo bien!");
  const contenedor = document.getElementById("contenedor");
  const newDiv = document.createElement("div"); // para ver el div hay que especificar donde se va a colocar el elemento, esto se hace con appendChild que recibe como parametro el elemento que se quiere agregar al DOM (en este caso el div) y lo agrega al final del elemento que se le pasa como parametro
  newDiv.innerText = "Hola, soy un nuevo div";
  newDiv.className = "recuadro"; // se le puede agregar una clase al div para colocarle estilo por ejemplo
  newDiv.addEventListener("click",cambiarColor) // se puede agragar un EventListener a un elemento creado por javascript...
  // Cada div recuadro que se crea, tiene su propio eventListener listo para escuchar el clck y ejecutar la funcion cambiarColor
  contenedor.appendChild(newDiv); // estoy interactuando con el DOM, por lo tanto, cuando se recargue la pagina, todos los divs que se hayan agregado desapareceran, porque no se guardan en el HTML, sino que se crean en el momento de la ejecucion del script
}

agregar.addEventListener("click", clickHandler);
