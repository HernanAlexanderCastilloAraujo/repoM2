const num1 = 5;
const num2 = 10;
const nombre = "Juan";
const apellido = "Perez";
num3 = 25;

// en commonJS se trabaja exportando con un objeto llamado exports, esta forma de exporta se puede realizar gracias a que nodejs tiene un modulo llamado module que tiene un objeto llamado exports

// exports.num1 = num1;
// exports.num2 = num2;
// exports.nombre = nombre;

//una mejor forma de "exportar" con el objeto exports es con la siguiente sintaxis

module.exports = {
  num1,
  num2,
  nombre,
  apellido,
  num3,
};
