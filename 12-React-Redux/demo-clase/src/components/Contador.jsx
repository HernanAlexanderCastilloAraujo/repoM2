import React from 'react';
import { connect } from 'react-redux';
import { aumentarContador } from '../redux/actions';

class Contador extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <>
               <h1>
        Contador:
        <h3>acá va el contador</h3>
        <h3>
            {this.props.count}
        </h3>
      </h1>
        <button onClick={this.props.aumentarCount}>Aumentar</button>
            </>
        )
    }
}

// el componente puede accerder al estado global

// el componente puede despachar a las acciones

const mapStateToProps = (state) => {
 return{
    count : state.contador
     
 }
}

const mapDispatchToProps = (dispatch) => {
    return {
        aumentarCount: () => dispatch(aumentarContador())
    }
}

export default connect(
    mapStateToProps, // me permite acceder al estado global
    mapDispatchToProps // me permite despachar acciones
)(Contador);

// cuando solo me interesa una de las dos funciones, puedo pasarle null a la otra