import {LOADING} from '../actions/action_types';


const initialState = { 
    loading : false
}


const LoadingReducer = (state = initialState , action)=>{

    switch (action.type) {
        case LOADING:
            return{
                ...state,
                loading: action.payload
            }
    
        default: return state;
    }
}

export default LoadingReducer ; 