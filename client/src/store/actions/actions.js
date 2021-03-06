import axios  from 'axios';
import {FETCH_USER,GET_SURVEYS, LOADING} from './action_types';



export const fetchUser =  () => async dispatch => {

    const res =  await axios.get('/api/current_user');

    dispatch({type:FETCH_USER, payload: res.data});

    } 
   

export const handleCreditToken = (token) => async dispatch =>{

    const res = await axios.post('/api/stripe',token);


    dispatch({type:FETCH_USER, payload: res.data});
}

export const submitSurvey = (values) => async dispatch =>{

  const res = await axios.post('/api/surveys',values);
    
   dispatch({type:FETCH_USER, payload: res.data});
    
    setTimeout(() => {
        dispatch({type:LOADING, payload: null});
    }, 500);

}


export const getSurveys = () => async dispatch =>{

    const res = await axios.get('/api/surveys');
    
    dispatch({type:GET_SURVEYS, payload: res.data});
}

export const setLoading = (load) => dispatch =>{

    dispatch({type:LOADING, payload: load});
}

export const deleteSurvey = (surveyID) => async dispatch => {

    const res = await axios.delete('/api/delete-survey', {data:{surveyID}});

    dispatch({type:GET_SURVEYS, payload: res.data});

   setTimeout(() => {
    dispatch({type:LOADING, payload: false});
   }, 300);
}

