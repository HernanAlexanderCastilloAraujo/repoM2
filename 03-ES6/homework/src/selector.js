let traverseDomAndCollectElements = function ( // funcion que recorre el DOM y recolecta elementos que matchien con el selector
  matchFunc, // función que matchea un elemento con un selector
  startEl = document.body // elemento desde donde se empieza a recorrer el DOM
) {
  // matchFunc es una función que matchea un elemento con un selector
  let resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl); // si el elemento matchea, lo pusheo al array
  for (let i = 0; i < startEl.children.length; i++) { // recorro los hijos del elemento
    resultSet = resultSet.concat(
      traverseDomAndCollectElements(matchFunc, startEl.children[i])
    );
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

let selectorTypeMatcher = function (selector) { // esta funcion me dice que tipo de selector es
  // selector es un string que puede ser un id, una clase o un tag con clase por ejemplo .Container, #main, div.container
  // tu código aquí
  // si es un id, devuelve "id"
  // si es una clase, devuelve "class"
  // si es un tag con clase, devuelve "tag.class"
  // si es un tag, devuelve "tag"

  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class";
  if (selector.includes(">")) return "childCombinator";
  if (selector.includes(" ")) return "descendantCombinator";
  return "tag";
};
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function (selector) { // esta funcion es una factory de funciones que matchean segun el tipo de selector
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  switch (selectorType) {
    case "id":
      // armar funcion que busque un match con un id
      matchFunction = (element) => selector === "#" + element.id;
      break;
    //****************************************** */
    case "class":
      // armar funcion que busque un match con una clase
      matchFunction = (element) =>
        element.classList.contains(selector.slice(1));
      break;
    //****************************************** */
    case "tag.class":
      // armar funcion que busque un match con un tag y una clase
      matchFunction = (element) => {
        const [tag, cls] = selector.split(".");
        return (
          matchFunctionMaker(tag)(element) &&
          matchFunctionMaker("." + cls)(element)
        );
      };
      break;
    //****************************************** */
    case "tag":
      // armar funcion que busque un match con un tag
      matchFunction = (element) => selector === element.tagName.toLowerCase();
      break;
    //****************************************** */
    case "childCombinator":
      // armar funcion que busque un match con un childCombinator
      matchFunction = (element) => {
        const [parent, child] = selector.split(" > ");
        return (
          matchFunctionMaker(parent)(element.parentElement) &&
          matchFunctionMaker(child)(element)
        );
      };
      break;
    //****************************************** */
    case "descendantCombinator":
      // armar funcion que busque un match con un descendantCombinator
      matchFunction = (element) => {
        let [parent, child] = selector.split(" ");
    while (element.parentElement) {
      if (matchFunctionMaker(parent)(element.parentElement) && matchFunctionMaker(child)(element)) {
        return true;
      }
      element = element.parentElement;

    }
    return false;
      }
  }
  return matchFunction;
};

const $ = function (selector) { // esta funcion es la que se exporta y que se usa para seleccionar elementos
  // selector es un string que puede ser un id, una clase o un tag con clase por ejemplo .Container, #main, div.container
  let elements; // este será el array final de elementos que cumple el selector
  let selectorMatchFunc = matchFunctionMaker(selector); // esta variable guarda la función que matchea un elemento con el selector
  elements = traverseDomAndCollectElements(selectorMatchFunc); // recorre el DOM y recolecta elementos que matchien
  return elements;
};
