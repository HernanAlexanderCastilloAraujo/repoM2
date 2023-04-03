const sumar = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const printName = (nombre, apellido) => {
  console.log(`${nombre} ${apellido}`);
};

module.exports = {
  sumar,
  printName,
};
