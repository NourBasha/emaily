import {GET_SURVEYS} from '../actions/action_types';


const initialState = { 
    surveyList : []
}


const SurveyReducer = (state = initialState , action)=>{
    switch (action.type) {
        case GET_SURVEYS:
            return{
                ...state,
                surveyList: action.payload
            }
    
        default: return state;
    }
}

export default SurveyReducer ; 