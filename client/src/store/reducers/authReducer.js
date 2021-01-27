import {FETCH_USER} from '../actions/action_types';


const initialState = { 
    user : null
}


const AuthReducer = (state = initialState , action)=>{
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return{
                ...state,
                user: action.payload || false // if there is a string, take it, empty string? take the false 
            }
    
        default: return state;
    }
}

export default AuthReducer ; 