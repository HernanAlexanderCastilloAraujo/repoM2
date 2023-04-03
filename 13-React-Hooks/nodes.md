```javascript

```

Hooks.
Repaso de Hooks utilizados en el bootcamp, también algunos adicionales.

useState
Sirve para definir y actualizar estados en componentes funcionales, al actualizar un estado, se re-renderiza el compoenente y se muetra la nueva información

EJEMPLO
```javascript
import {useState} from 'react';
function Example(){
    const[count, setCount] = useState(0)

    const increment _= ()=> {
        setCount(count + 1);
    }

    return (
        <div>
        <button onClick={increment}>Suma 1</button>
        <p>{count}</p>
        </div>
    )
}
```

useEffect
Simula el ciclo de vida del componente.


```javascript
import {useState, useEffect} from 'react';



const Detail = () => {
 const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
}

// como componentDidMount se ejucuta una sola vez al montar el componente
useEffect(() => {
console.log('componentDidMount');
}, []);

// como componentDidUpdate se ejecuta cada vez que se moidifica el estado count
useEffect(() => {
console.log('componentDidUpdate');
}, [count]);

// como componentWillUnmount se ejecuta cuando se desmonta el componente
useEffect(() => {
return () => {
console.log('componentWillUnmount');
}
}, [count])

} 
```

useParams
da la informacion que se encuentra despues de los ":" en la URL

useSelector 
permite seleccionar estados globales, es un hook de react-redux
```javascript
const character = useSelector((state) => state.characteDetail)

```

useDispatch
permite permite ejecutar acciones para modificar el estado global, es un hook de react-redux
```javascript
const dispatch = useDispatch();

dispatch(getCharacterDetail(character)) // donde getCharacterDetail es una accion

```
es una buena practica realizar una carpeta de Hooks, para no sobrecargar los componentes.

useReducer
es un hook de react-redux, se utiliza pra manejar estados complejos, y realizar acciones en una aplicación React utilizando un patrón de diseño llamado Reducer.

```javascript

const initialState = {
    counter: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        default: 
        throw new Error();
        
        }
}

function Counter(){
const [state, dispatch] = useReducer(reducer, initialState)
return(
<>
Count: {state.counter}
<button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
<button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
</>
)

}
```

useRef
Se utiliza para crear una referencia mutable que persiste a lo largo del ciclo de vida de un componente. Con este hook podemos manipular el DOM, PERO NO ES ACONSEJABLE HACERLO!, permite manipular el DOM

```javascript

function TextInputWithFocusButton(){
    const inputEl = React.useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };


return (
    <>
 <input ref={inputEl} type="text"/>
 <button onClick={onButtonClick}>Focus the input</button>   
    </>
)
}
```