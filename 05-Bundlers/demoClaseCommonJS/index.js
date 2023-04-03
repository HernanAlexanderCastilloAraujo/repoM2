// la exportacion con common JS es comunmente untilizada en el back, ya que es robusta...
const { num1, num2, nombre, apellido, num3 } = require("./datos.js");
const { sumar, printName } = require("./funciones");
console.log(sumar(num1, num2, num3));
printName(nombre, apellido);
