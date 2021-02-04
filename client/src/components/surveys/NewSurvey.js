
// newSurvey shows form and the preview

import { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

import {reduxForm} from 'redux-form';


const NewSurvey = (props) => {

    const [showFormReview, setFormReviewVisible] = useState(false);

    return (

        <div className='container' style={{height:'100vh'}}> 
                    {
                        !showFormReview
                        ?
                            (
                                <SurveyForm  review={()=>setFormReviewVisible(true)} />       
                            )
                        : 
                         (    <SurveyFormReview   review={()=>setFormReviewVisible(false)}  />)        
                    }
        </div>

    );
}


export default reduxForm({
    form : 'surveyForm'
})( NewSurvey);