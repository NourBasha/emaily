import {LOADING} from '../actions/action_types';


const initialState = { 
    loading : false
}


const LoadingReducer = (state = initialState , action)=>{

    console.log('loading reducer : ',state.loading );

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