// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:
let toDoItems = []; // array de objetos toDo listos para ser convertidos en elementos del DOM 

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
let createdBy = document.querySelector("#createdBy");
createdBy.innerHTML += " ALEX";

// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo(description) { //función para crear objetos toDo con dos propiedades: description y complete, description es el string que se muestra en pantalla y complete es un booleano que indica si el toDo está completado o no
  // Tu código acá:
  this.description = description;
  this.complete = false;
}

// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function () { // método para cambiar el estado de un toDo a completado
  this.complete = true;
};

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/

function buildToDo(todo, index) { // recibe un objeto toDo y un index, crea un elemento div con un span y un checkbox, el span muestra el texto del toDo y el checkbox permite marcarlo como completado, el span y el checkbox se agregan al div y se devuelve el div para ser agregado al DOM
  // Tu código acá:
  let toDoShell = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = index;
  toDoShell.className = "toDoShell";
  let toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  //  toDoText.id = index;
  if (todo.complete) {
    toDoText.className = "completeText";
    checkbox.checked = true;
  } else {
    toDoText.className = "";
  }
  checkbox.addEventListener("click", completeToDo);
  checkbox.className = "completeCheckbox";
  //toDoText.addEventListener("click",completeToDo)
  toDoShell.appendChild(toDoText);
  toDoShell.appendChild(checkbox);
  return toDoShell;
}

// La función 'buildToDos' debe crear un array de o bjetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {  // funcion que mapea el array de objetos toDo y devuelve un array de elementos para colocar en el DOM, le entrga a buildToDo un objeto toDo y un index
  // Tu código acá:
  return toDos.map(buildToDo);
}

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {  // funcion que muestra los toDos en pantalla, más exactamente en el div con id toDoContainer 
  // Tu código acá:
  let toDoContainer = document.querySelector("#toDoContainer"); // selecciono el div con id toDoContainer
  toDoContainer.innerHTML = "";  // seteo el innerHTML de toDoContainer como un string vacio para que no se repitan los toDos cuando se vuelve pintar
  let toDos = buildToDos(toDoItems); // llamo a la función buildToDos y le paso como parámetro el array toDoItems, la función buildToDos devuelve un array de elementos div con la clase toDoShell
  toDos.forEach((toDo) => { // itero sobre el array de elementos div con la clase toDoShell y voy agregando cada elemento al div con id toDoContainer
    toDoContainer.appendChild(toDo);
  });
}

// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() { // funcion que agrega un nuevo ToDo al array toDoItems, y luego llama a la funcion displayToDos para que se actualicen los toDos mostrados en pantalla
  // Tu código acá:
  let toDoInput = document.querySelector("#toDoInput"); // selecciono el input con id toDoInput para tomar el valor que se encuentra escrito en el mismo
  let newToDo = new ToDo(toDoInput.value); // creo un nuevo objeto toDo para luego agregarlo al array toDoItems y luego llamar a la funcion displayToDos, que a su vez llama a la funcion buildToDos que mapea el array de objetos, pasandolos por una funcion que los convierte en elementos html y los agrega a un array, y luego se itera sobre ese array para agregar cada elemento al div con id toDoContainer
  toDoItems.push(newToDo); // agrego el nuevo objeto toDo al array toDoItems
  toDoInput.value = ""; // seteo el valor del input toDoInput como un string vacio ("") para que en la vista se borre lo que se encontraba escrito cuando se clickea el boton AGREGAR
  displayToDos(); // funcion que llama a la demás funciones para pintar los toDos en pantalla
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:
let addButton = document.querySelector("#addButton"); // selecciono el boton con id addButton, este es el boton que se encarga de agregar un nuevo ToDo al array toDoItems
addButton.addEventListener("click", addToDo); // agrego un 'click' event listener al boton addButton, pasandole la funcion addToDo como callback, lo que significa que con este 'click' se desencadena todas las demás funciones q 

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) { // completeToDo recibe como parametro event, que es el elemento a quien se le marcó con un click que era un toDo completado 
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id; // index es igual al id del elemento que se le hizo click, que es el id del index del array toDoItems
  // Tu código acá:
  toDoItems[index].completeToDo(); // llamo al metodo completeToDo del objeto toDoItems que se encuentra en la posicion index, para que cambie el estado de completed a true
  displayToDos(); // vuelvo a pintar el container de toDos en pantalla con el toDo tachado, lo que significa que el estado de completed es true
}

// Una vez que llegaste a este punto verificá que todos los tests pasen

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //

// Acá debes insertar la llamada a 'displayToDos'
displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== "undefined") {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  };
}
