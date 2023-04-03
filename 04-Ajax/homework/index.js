//Listar amigos

const responseHandler = (response) => { // funcion que lista la respues de la api
  const [lista] = $("#lista");
  const [gifCargando] = $("#gifCargando");
  const [letreroVerAmigos] = $("#letreroVerAmigos");

  if (gifCargando) {
    gifCargando.parentElement.removeChild(gifCargando);
    letreroVerAmigos.parentElement.removeChild(letreroVerAmigos);
  }
  lista.innerHTML = ""; // borramos los elementos de la lista antes de de listar
  response.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = element.name;
    lista.appendChild(newLi);
  });
};

const fetchUsers = () => {
  $.get("http://localhost:5000/amigos", responseHandler);
};

const [boton] = $("#boton");
boton.addEventListener("click", fetchUsers);

//****************************************************************** */
// mostrar un solo amigo

const responseFriend = (response) => { // funcion que muestra un amigo
  const [amigo] = $("#amigo");
  amigo.innerHTML = response.name;
};

const searchFriend = () => { // funcion que hace una peticion por id
  const [input] = $("#input");
  const id = input.value;
  $.get(`http://localhost:5000/amigos/${id}`, responseFriend);
  input.value = "";
};

const [search] = $("#search");
search.addEventListener("click", searchFriend);

//****************************************************************** */

//eliminar un amigo

const deleteFriend = () => { // funcion que hace una peticion de tipo "delete" al servidor
  const [inputDelete] = $("#inputDelete");
  const id = inputDelete.value;
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success:
      responseHandler, // con la respuesta queremos que los amgiso se vuelvan a listar
  });
  inputDelete.value = "";
};

const [deleteB] = $("#delete");
deleteB.addEventListener("click", deleteFriend);
