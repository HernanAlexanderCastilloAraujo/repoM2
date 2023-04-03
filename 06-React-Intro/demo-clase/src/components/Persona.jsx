const Persona = (props) => { // FUNCION COMPONENTE (no tiene estado) // props es un objeto que contiene los atributos que le pasamos al componente (en este caso name y age) luego esta funcion retorna un elemento JSX (HTML) // En este caso, el elemento JSX es un div que contiene dos h2 y un h3 // En el primer h2, mostramos el valor de la propiedad index del objeto props, sumado en 1, y el valor de la propiedad name del objeto props // En el segundo h2, mostramos el valor de la propiedad name del objeto props, y el valor de la propiedad age del objeto props // En el tercer h2, mostramos el valor de la propiedad age del objeto props
    return (
        <div>
            <h2>{props.index + 1}...{props.name}</h2>
            <h3>soy {props.name} y tengo {props.age} años</h3>
        </div>
    );
}

export default Persona; // Exportamos el componente