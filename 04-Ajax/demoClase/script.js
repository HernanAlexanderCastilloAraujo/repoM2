// quien va a hacer la peticion a la API es AJAX, 
// vamos a utilizar la libreria jquery quien ya trae ajax


const responseHandler = (response) => {
    const [userList] = $("#userList") // selector con jquery, recordar que jquery entrega un array, por lo tanto debemos sacar el elemento del array, por ejemplo con distractoring
    // recordar que response no viene como respuesta de javascript pero AJAX lo convierte a un objeto de javascript...
    // la respuesta de la API es un array de objetos, por lo tanto debemos iterar sobre el array para sacar los objetos y mostrarlos en el DOM
    response.forEach(element => {
        const newLi = document.createElement('li'); // creando un li por cada elemento del array de usuarios
        newLi.innerHTML = element.name; // asignando el nombre del usuario al li
        userList.appendChild(newLi); // agregando el li al ul
    });


}
const fetchUsers = () => {
    const [userList] = $("#userList") 
    userList.innerHTML = "" // limpiando el ul
    $.get("http://jsonplaceholder.typicode.com/users", responseHandler) // peticion de tipo get a la API, el segundo parametro que se pasa es una callback, que es la funcion que dicta que hacemos con la respuesta...
// la peticion debe estar debajo de la funcion responseHandler, ya que la funcion responseHandler debe estar definida antes de ser llamada
}
const [loadUsers] = $("#loadUsers")
loadUsers.addEventListener("click", fetchUsers) // agregando un evento al boton, que al hacer click, se ejecute la funcion fetcUsers qu a su vez, inicia la peticion a la API

//NOTAR que aquí SÍ importa que la funcion fetchUsers debe estar definida antes de hacer la peticion a la API ya que fetchUsers es una variable donde en algun momento se guarda un funcion, para que no importe la posicion de la funcion, se deberia utilizar una funcion con nomgre


