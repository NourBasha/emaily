import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import SurveyReducer from './surveyReducer';
import {reducer} from 'redux-form';



const RootReducer = combineReducers({
        auth : AuthReducer,
        form : reducer,
        surveys : SurveyReducer
})

export default RootReducer;