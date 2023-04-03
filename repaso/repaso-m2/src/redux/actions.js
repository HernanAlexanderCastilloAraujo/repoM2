export const GET_USERS = 'GET_USERS';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const ADD_USER = 'ADD_USER';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

 export  const getUsers = () => {
    return function(dispatch){
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            dispatch({type: GET_USERS, payload: data})
        })
    }
}

export const getUserDetail = (id) => {
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type: GET_USER_DETAIL, payload: data})
        })
    }
}


export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}

export const addUser = (user) =>{
    return { type: ADD_USER, payload: user}
}