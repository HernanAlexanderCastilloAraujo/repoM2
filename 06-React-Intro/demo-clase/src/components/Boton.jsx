import React from "react";
 // componente creado con una clase, el constructor recibe las propiedades del componente (props) // el metodo render retorna un elemento JSX (HTML) // en este caso, el elemento JSX es un boton que muestra el valor de la propiedad name del objeto props
class Boton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <button>{this.props.name}</button>
        </>)
    }
}

export default Boton;