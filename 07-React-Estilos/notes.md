```javascript

```

ESTILOS EN REACT

LEGACY
webpack nos permite importar reglas de estilos de css que tengamos en otros archivos de css
```javascript
import React from 'react';
import "./app.css"

class App extends React.Component {
    render(){
        return (
        <div className="App">
        <h1>Título</h1>
        </div>
        )
    }
}

export default App;

```
el problema de trabajar así es que los estilos se pisarían si queremos camibar algo de dos componentes que tengan la misma clase...

//*********************************** *//

INLINE STYLING(CSS IN JS):
Se escribe el css en objetos de javascript
```javascript

const divStyle = {
    color:"blue",
    backgroundImage:"url(" + imgUrl + "),
}
function HelloWorldComponent(){
    return <div style ={divStyle}>Hello word!</div>
}
```
hacemos un objeto con las reglas css y se lo pasamos al atributo style de un tag...
esta es la forma de dar estilos que muestra REACT en su documentacion...


//********************************* */

CSS MODULES: consiste en crear una carpeta para cada componente y dentro de ella colocar un css para el componente, pueden haber varios componentes con la misma clase, soluciona el prblema de no poder tener varios componentes con la misma clase y diferentes estilos, sin embargo, no perimte heredar el css... ya que tenemos que escribir todo el bloque de css de nuevo...
Osea que perdemos los estilos globales....

//************************************ */
STYLED COMPONENTS 
Consiste en decargar un libreria que nos ayuda a crear objetos con estilos muy similares a los css normales, además estos objetos se pueden importar desde otro archivo, luego utilizaremos estos objetos como tags...