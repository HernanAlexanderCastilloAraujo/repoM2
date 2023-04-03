```javascript
```

REDUX
Una de las grandes deficiencias que viene a solucionar redux es el tener que modificar estados por medio de funciones de un componente padre, redux proporciona un estado global, a donde cada componente puede acceder, para entrar al estado global cada componente debe "subscribirse"
 NO todos los compomentes tiene que estar subscritos al estado global "store". El componente puede tener su propio estado interno...
Redux no es dependiente de REACT, son tecnologías diferentes pero se complementan muy bien

Cuando el estado global se modifica le avisa a los componentes que están subscritos


 Como se modifica el estado de REDUX
 Hay una sola forma de manipular los estados globales, quien modifica el EG tiene funciones definidas, recibe mensajes donde se indica cual es la funcion que se debe ejecutar para modificar el EG, quien modifica el EG  se llama REDUCER, es una funcion.
 Los mensajes donde se indica qué se debe modificar en el EG, en muchas ocasiones llevan parametros, por ejemplo, para modificar un nombre, hay que indicar por cual nombre se debe modificar. estos mensajes se llaman actions y son objetos. la propiedad donde nos indica la funcion que se debe utilizar se llama type, este es un string. 

 Cuando la action debe llevar un parametro para reescribir algun estado, este irá en la propiedad payload, NO es obligatorio que todas las actions lleven payload.

 El enviar la action se la da el nombre de dispatch...

 El reducer a partir del estado que tiene crea un objeto nuevo con una copia del estado cambiando la propiedad 
necesaria.
  

TRES PRINCIPIOS DE REDUX
1. solo hay una store
2. la unica manera de modificar el estado es emitiendo una action
3. los cambios se aplican con funciones puras.

