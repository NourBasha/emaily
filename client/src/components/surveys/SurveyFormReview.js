import { connect } from "react-redux";

import FIELDS from "./formFields";
import _ from "lodash";

import * as actions from "../../store/actions/actions";

import { useHistory } from "react-router-dom";

import LoadingOverlay from 'react-loading-overlay';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useEffect } from "react";

const SurveyFormReview = ({ review, surveyValues, submitSurvey, surveySending , setLoading }) => {
 
  const history = useHistory();

  useEffect(()=>{

    if(surveySending===null){
      setTimeout(() => {
        
         setLoading(false);

         setTimeout(() => {
            history.push('/surveys');
         }, 800);
         
        
      }, 1000);
    }
  },[surveySending,history,setLoading])


  const handleSend = ()=>{

     setLoading(true);
     submitSurvey(surveyValues);

  }


 
  return (
    <div className='form-review-container'>
        {
            surveySending  === true
            ?  <div className='overlay'> 
                  <LoadingOverlay
                    className = 'loading-overlay'
                    active={surveySending} 
                    spinner={<PropagateLoader   color={'#0e8befb8'} />}
                  >
                
                  </LoadingOverlay>
              </div>
            : surveySending === null 
              ? <div className='sent-success-message white-text '>
                  Sent Successfully &nbsp;             
                 <span className='sent-success-icon'> 
                    <i className='small material-icons'>done</i>
                 </span>
                 </div> 
              : null
          }
      <div className="form-review">
        <div className="review-entries">
          
                    <h5 className='center head-message'>Please review your entries</h5>
                    <hr/>

                    {_.map(FIELDS, ({ label, name }, index) => {
                    return (
                        <div key={index}>
                        <h5 className='label'>{label}</h5>
                        <p>{surveyValues[name]}</p>
                        </div>
                    );
                    })}

                      <hr/>

                    <button
                        className="btn left yellow darken-3 white-text"
                        onClick={review}
                        >
                        Back
                    </button>

                    <button
                        onClick={handleSend}
                        className="btn right  green white-text"
                        >
                        <i className="material-icons right">email</i>
                        Send Survey
                    </button>


        </div>
         
     </div>


        
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveyValues: state.form.surveyForm.values,
    surveySending : state.loading.loading
  };
};

export default connect(mapStateToProps, actions)(SurveyFormReview);
