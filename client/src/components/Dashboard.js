
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSurveys} from '../store/actions/actions';

import _ from 'lodash';



const Dashboard = ({getSurveys, surveys})=>{

    useEffect (()=>{

        getSurveys();

    },[getSurveys])

    const DisplaySurveys = () =>{

        let list = [];
    
            if(surveys){
             list=  _.map(surveys, ({title, subject, body, yes , no,dateSent }, index) => {
                    return <div 
                         key= {index}   
                         style = {{marginTop: '20px' }}
                         className='card  blue-grey darken-1'> 
                              <div className='card-content white-text'>
                                <h5 className='card-title'> {title} </h5>
                                    <label>Survey Subject</label>
                                    <p> {subject} </p>
                                    <label>Survey Body</label>
                                    <p> {body} </p>
                                
                                    <p className='right'>Set On {new Date(dateSent).toLocaleDateString()}</p>
                              </div>
                              <div className='card-action'>
                                    <a> Yes: {yes}</a>
                                    <a> No: {no}</a>
                              </div>
                    </div>
                });
            }
       
        return list.reverse();
        
    }


    return(
        <div>

          {/* { DisplaySurveys() } */}
          <DisplaySurveys />

            <div className="fixed-action-btn">
                <Link to='/surveys/new' className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}



const mapStateToProps = ({surveys}) => { 

    return{
        surveys : surveys.surveyList
    }
}


const mapDispatchToProps = (dispatch) =>{ 
    return {
        getSurveys : () => dispatch(getSurveys()) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);