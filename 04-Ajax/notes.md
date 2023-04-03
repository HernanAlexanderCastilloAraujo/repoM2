```javascript
```


Una pagina web se compone principalmente por servidor, base de datos y cliente, el cliente va a pedir información al servidor, y siempre va a recibir una respuesta por esa petición...

Para hacer estas peticiones se deben ajustar a unas serie de reglas (protocolo http) 
las cuatro peticiones principales son:

GET: pedir informacion a la base de datos
POST: guardar informacion en la base de datos
PUT: modificacion de informacion en la base de datos
DELETE: eliminar informacion en la base de datos

RECORDAR QUE HAY MÁS MÉTODOS HTTP

Las peticiones seran REQUEST y las respuestas serán RESPONSES....
Las responses se dan en archivos .json, este NO es un objeto de javascript, generalmente la informacion viene en un array que contiene objetos... 

Cuando se viene ejecutando codigo JS  y se quiere solicitar informacion al servidor, esta se puede demorar, ahí entra el termino EVENT LOOP...
EVENT LOOP quiere decir que le encargamos la tarea de pedir y esperar la informacion a alguien más (otra API) Ajax en este caso...

AJAX: Ajax es una web API y se encarga de hacer las peticiones a los servidores, cuando Ajax haya terminado de hacer la peticion y la reciba la manda a una Callback QUEUE que es una fila de espera para que JS  haga lo que queda pendiente con la informacion, ahí aparece el termino promesa...

La promesa en pocas palabras es establecer un plan de acción cuando suceda algo...
El plan de accion en este caso, es pintar o hacer alguna accion con la informacion, si Ajax tiene exito en la peticion y tambien hay que tener un plan de accion para una peticion no exitosa por parte de Ajax...





