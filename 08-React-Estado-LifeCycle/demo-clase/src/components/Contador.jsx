import React from "react";
import style from "./Contador.module.css";

// para trabajar el estado en un componente de clase se utiliza el metodo constructor, que recibe como parametro las props, y dentro del constructor se llama al metodo super, que recibe como parametro las props, y dentro del constructor se inicializa el estado, el estado es un objeto que contiene las propiedades que se quieren manejar, en este caso se inicializa el estado con la propiedad count, que tiene como valor inicial 0, y la propiedad text, que tiene como valor inicial "Hola", ademas se tiene la propiedad claro, que es igual a true...

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: "Hola",
            claro: true,
        }

    }
    aumentar = () => { // esta funcion se ejecuta cuando se hace click en el boton aumentar, sería un método de la clase
        this.setState({ // setState es una funcion que nos da REACT para modificar el estado, recibe como parametro un objeto con las propiedades que se quieren modificar, en este caso se modifica la propiedad count, ademas, como segundo parametro recibe un callback, que se ejecuta luego de que se modifica el estado, en este caso se imprime en consola el valor de la propiedad count, luego de que se modifica el estado
            count: this.state.count + 1,
        }, () => {
            console.log(this.state.count)
        }
        )
        // console.log(this.state.count)


    }
    decrementar = () => {
        //si se quisiera modificar el estado dos veces de la forma convencional como en el siguiente ejemplo, no funcionaría, porque solo se ejecutaría el segundo setState, para poder modificar el estado dos veces, se debe crear una funcion que reciba como parametro el estado y las props, y que retorne un objeto con las propiedades que se quieren modificar, y esta funcion se debe pasar como parametro a setState, en este caso se modifica el estado dos veces, ya que se crea un contexto diferente para cada setState
        // this.setState({
        //     count: this.state.count - 1,
        // })
           // this.setState({
        //     count: this.state.count - 1,
        // })
        //*************************** */
        this.setState((state, props) => ({
            count: state.count - 1,
        }))
        this.setState((state, props) => ({
            count: state.count - 1,
        }))
    }
    reiniciar = () => {
        this.setState({
            count: 0,
        })
    }

    // toggle = function(){
    //     this.claro && this.setState({claro: false})
    //     !this.claro && this.setState({claro: true})
    // }

    toggle = () =>{
       this.setState({claro: !this.state.claro})
    }
    componentDidMount() { // funcion que se ejecuta cuando el componente se monta, es decir, cuando se renderiza por primera vez
        console.log("componente montado")
        // aca se quiere hacer algo parecido a lo que hacia ajax, iba a buscar a una fuente externa la informacion a motrar
    }
    componentDidUpdate() { // funcion que se ejecuta cuando el componente se actualiza, es decir, cuando se renderiza por segunda vez o mas
        console.log("componente actualizado")
    }
    componentWillUnmount() { // funcion que se ejecuta cuando el componente se desmonta, es decir, cuando se elimina del DOM
        console.log("componente desmontado")
    }
    render() {
        return (
            
            <>
                <h3>Contador</h3>
                <p>{this.state.text}</p>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={this.decrementar}>DECREMENTAR</button>
                    <button onClick={this.reiniciar}>REINICIAR</button>
                    <button onClick={this.aumentar}>AUMENTAR</button>
                </div>
                <hr />
                <div className={this.state.claro? style.claro: style.oscuro}>  
                {this.state.claro? <p>claro</p> : <p>oscuro</p>}
                     </div>
                <button onClick={this.toggle}>
                    TOGGLLE
                </button>
            </>
        )
    }

}
export default Contador;