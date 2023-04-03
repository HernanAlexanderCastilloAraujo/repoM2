const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const arr2 = arr.map((num) => num * 2);

const otraFuncion = () => {
    console.log("Otra funcion");
}

const FuncionImportante = () => {
    console.log("Funcion importante");
}
// con el export default creo dos canales, uno para la funcion que va por defecto y otro por el objeto que se exporta, por el export deafult no se puede exportar mas de un objeto o funcion o variable
export default FuncionImportante;