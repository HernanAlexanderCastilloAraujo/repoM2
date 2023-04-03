import {useState} from 'react'
import style from "./ContadorHooks.module.css";


// para trabajar con estados en un compoente funcional se utiliza el hook useState, que devuelve un array con dos elementos, el primero es el estado y el segundo es una funcion que modifica el estado, esta funcion recibe como parametro el valor inicial del estado,
const ContadorHooks = () => {

   const [count, setCount] = useState(0) //=> [estado, fnqueModificaElEstado]
   const [claro, setClaro] = useState(true)

const aumentar = () => {// esta funcion se ejecuta cuando se hace click en el boton aumentar
    setCount(count + 1)
}
const decrementar = () => { // esta funcion se ejecuta cuando se hace click en el boton decrementar
    setCount(count - 1)
    
}
const reiniciar = () => { // esta funcion se ejecuta cuando se hace click en el boton reiniciar
    setCount(count = 0)
}
const toggle = () => { // esta funcion se ejecuta cuando se hace click en el boton toggle
    setClaro(!claro)
}
return(
    // en el div claro? style.claro: style.oscuro se esta evaluando si la variable claro es true, si es true se aplica el estilo claro, si es false se aplica el estilo oscuro, el estilo claro y oscuro estan definidos en el archivo ContadorHooks.module.css...
    <>
    <div>
    <h1>Contador Hooks</h1>
    <p>{count}</p>
    <button onClick={decrementar}>DECREMENTAR</button>
    <button onClick={reiniciar}>REINICIAR</button>
<button onClick={aumentar}>AUMENTAR</button>
    </div>
    <hr />
    <div className={claro? style.claro: style.oscuro}>  
                {claro? <p>claro</p> : <p>oscuro</p>}
                     </div>
                <button onClick={toggle}>
                    TOGGLLE
                </button>

    </>
)
}

export default ContadorHooks