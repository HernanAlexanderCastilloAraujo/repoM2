const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
const contador = store.getState().contador;
valor.innerText = contador;
}


// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

// Botón de incremento:
document.getElementById("incremento").addEventListener("click", function() {
  store.dispatch(incremento());
});

// Botón de decremento:
document.getElementById("decremento").addEventListener("click", function() {
  store.dispatch(decremento());
});

// Botón incremento impar:
document.getElementById("incrementoImpar").addEventListener("click", function() {
  if (store.getState().contador % 2 !== 0) {
    store.dispatch(incremento());
  }
});


// Botón incremento asincrónico:
document.getElementById("incrementoAsync").addEventListener("click", function() {
  setTimeout(() => {
    store.dispatch(incremento());
  }, 3000);
}); 