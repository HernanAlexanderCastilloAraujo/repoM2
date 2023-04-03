const {createStore} = require('redux');

const initialState = {
    name: "Alex",
    verdad: true,
    count: 0,
}


const reducer = (state = initialState, action) => {
if(action.type === 'INCREMENT'){
    return {
        ...state,
        count: state.count + 1
    }
}
if(action.type === 'CAMBIAR_NOMBRE'){
    return {
        ...state,
        name: action.payload
    }
}
if(action.type === 'CAMBIAR_VERDAD'){
    return {
        ...state,
        verdad: !state.verdad
    }
}
}

const store = createStore(reducer)

const action1 ={
    type: 'INCREMENT'
}

const action2 ={
    type: 'CAMBIAR_NOMBRE',
    payload: 'Juan'
}

store.dispatch(action1)

store.dispatch(action2)

console.log(store.getState())

const nombrePorUsuario = "Javier"

const action3 ={
    type: 'CAMBIAR_NOMBRE',
    payload: nombrePorUsuario
}

store.dispatch(action3)
console.log(store.getState())

const action4 ={
    type: 'CAMBIAR_VERDAD',

}

store.dispatch(action4)
console.log(store.getState())
store.dispatch(action4)
console.log(store.getState()) 