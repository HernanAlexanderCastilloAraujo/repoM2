import { GET_USERS, GET_USER_DETAIL, CLEAN_DETAIL, ADD_USER } from "./actions"

const initialState = {
     users: [
       
     ],
     myUsers: [
     ],
        userDetail: {}
}


const rootReducer = (state = initialState, action ) => {
    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                userDetail: {}
            }

        case ADD_USER:
            return {
                ...state,
                myUsers: [...state.myUsers, action.payload]
            }


        default : 
return {...state}

    }


}

export default rootReducer