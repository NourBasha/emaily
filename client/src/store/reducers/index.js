import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import SurveyReducer from './surveyReducer';
import {reducer} from 'redux-form';
import LoadingReducer from './loading';



const RootReducer = combineReducers({
        auth : AuthReducer,
        form : reducer,
        surveys : SurveyReducer,
        loading : LoadingReducer
})

export default RootReducer;