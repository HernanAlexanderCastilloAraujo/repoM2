import { AUMENTAR_CONTADOR, GET_USERS  } from "./actions";


const initialState = {

    users: [],
    user: {},
    contador: 8
}

const reducer = (state = initialState, action) => {
// en el reducer no debe ir ninguna peticion a alguna api externa
    switch (action.type) {
        case AUMENTAR_CONTADOR:
            return {...state, contador: state.contador + 1};
        case GET_USERS:
            return {...state, users: action.payload};
        default:
            return {...state};
}
}

export default reducer;

// se necesita un caso que pida la imformacion de los usuarios y la guarde en el array

// se necesita un caso en el que se puede agregar un usuario en el array

// se necesita un caso en el que pueda acceder al detalle de un usuario