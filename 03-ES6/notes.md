```javascript
```
ES6

KEYWORDS LET Y VAR:
```javascript
var variableVar = "variableVar"
let variableLet = "variableLet"
const variableConst = "variableConst"

console.log(variableVar) //variableVar      esta variable tiene alcance de contexto
console.log(variableLet) //variableLet      tiene alcance de llaves
console.log(variableConst) //variableConst  tiene alcance de llaves

{
    var variableVar2 = "variableVar"
let variableLet2 = "variableLet"
const variableConst2 = "variableConst"

console.log(variableLet2) //variableLet
console.log(variableConst2) // variableConst
}
console.log(variableVar2) //variableVar
console.log(variableLet2) //variable is not defined
console.log(variableConst2) // el codigo no entra a está linea porque ya se ha roto

//********************************************* */

let miNumero = 5;
// let miNumero = 5; no se puede volver a declarar con el mismo nombre
miNumero = 7; // se puede reasignar

const miPalabra = "string" //no se puede reasignar
// miPalabra = "Hola" // esto no se puede hacer

 
```

Por lo anterior anotado, es una buena practica escribir las funciones con VAR ya que no se van a reasignar...
Const permite modificar objetos, ya que lo que guarda la variable es la referencia...



FUNCIONES FLECHA..
```javascript

//FUNCION NORMAL

const sumar = function(num1, num2) {
    const sum = num1 + num2;
    return sum
}

const sumar2 =(num1, num2) => num1 + num2; // aquí la funcion tiene un return implicito

const sumar3 = (num1, num2) =>{ // esta funcion no retorna nada
 const suma = num1 + num2
}

// otra ventaja es cuando se usa para los métodos

const nums =[1,2,3,4,5,6,7,8,9]

const pares = nums.filter((num) => num % 2 === 0)
console.log(pares)

// otra ventaja de las funciones flecha es que marcan el objeto en en el que están, lo que soluciona los problemas de contexto.... osea que toma el this del objeto que está ejecutando el método...
const bob = {
    name: 'Bob',
    friends: ['Alice', 'John'],
    printFriends1(){
        this.friends.forEach(function(friend){
            console.log(this.name + ' knows ' + friend);
        });
    },
    printFriends2() {
        this.friends.forEach(friend => {
            console.log(this.name + ' knows ' + friend);
        });
    }
}
bob.printFriends1(); 
// undefined knows Alice
// undefined knows John
bob.printFriends2();
// Bob knows Alice
// Bob knows John

```

CLASS: 
```javascript
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

}

class jugadorDeFutbol extends Persona{ // simulamos herencia
constructor(nombre,edad, num, posicion){
    super(nombre,edad);
    this.num = num;
this.posicion = posicion;
}
}
```

TEMPLATE STRINGS
```javascript
const nombre = "Julios"
const edad = 20
const ciudad = "Cali"

//Forma normal
console.log("Mi nombre es: "+ nombre+" y tengo " + edad + " de dedad, y vivo en la ciudad de " + ciudad + "!") 
console.log(`Mi nombre es: ${nombre} y tengo ${edad} de dedad, y vivo en la ciudad de ${ciudad}!`)
```

OBJETOS LITERALES...
```javascript
//Objeto no literal
const cualquierFuncion =(altura, ancho, profundidad, id){
    let nombre = "Mueble"
    const obj = {
        ancho: ancho,
        altura: altura,
        profundidad: profundidad,
        id: id,
        nombre: nombre,

    } 
}

//Objeto literal
const cualquierFuncion2 =(altura, ancho, profundidad, id){
    let nombre = "Mueble"
    const obj = {
        ancho,
        altura,
        profundidad,
        id,
        nombre,

    } 
}

// Ambos objetos, tendrían las mismas propiedades... 
// en los objetos literales el objeto toma el nombre de la variable que esté declarada

```

DESCTRUCTORING

```javascript
const persona = {
    nombre: 'Alex',
    edad: 25,
    ciudad: 'Bogotá'
}

// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.ciudad;

// console.log(nombre, edad, ciudad); Alex, 25, Bogotá

// ahora con destructuring

const { nombre, edad, ciudad } = persona;
console.log(nombre, edad, ciudad); // Alex, 25, Bogotá

const miArray = ["Juan", 20, "Bogotá" ];

const [nombre2, edad2, ciudad2] = miArray; // en la destructuración de arrays, el orden es importante

console.log(nombre2, edad2, ciudad2); // Juan, 20, Bogotá

```

REST Y SPREAD
```javascript
//REST
function f(x, ...y) {
  console.log(x, y);
  return x * y.length;
}

f(1, 2, 3, 4, 5, 6, "Hola"); // 1 [ 2, 3, 4, 5, 6, 'Hola' ]
console.log(f(1, 2, 3, 4, 5, 6, "Hola")); //1 [ 2, 3, 4, 5, 6, 'Hola' ]
// 6

//permite que me llegue un numero indefinido de parametros guardandolos en un array


//************************************** /
//SPREAD
const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const MiArray2 = [...miArray, 15, 16];

miArray.push(11);

console.log(miArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
console.log(MiArray2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// el segundo array no se modifica, no es afectado por el push
// se puede hacer lo mismo con los objetos

```


BABEL
Cuando escribimos codigo en ES6, existe un "traductor" que lleva este codigo a JS puro...