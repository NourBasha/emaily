import axios  from 'axios';
import {FETCH_USER} from './action_types';



export const fetchUser =  () => async dispatch => {

    const res =  await axios.get('/api/current_user');

    dispatch({type:FETCH_USER, payload: res.data});

    } 
   
 

export const handleCreditToken = (token) => async dispatch =>{

    const res = await axios.post('/api/stripe',token);

    console.log('coming res from stripe confirmatoin is : ',res.data);

    dispatch({type:FETCH_USER, payload: res.data});
}

