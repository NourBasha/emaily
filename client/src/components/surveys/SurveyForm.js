
import _ from 'lodash';
import { Link } from 'react-router-dom';

import {reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';


import validateEmails from '../../utils/validateEmail';

import FIELDS from './formFields';


const SurveyForm = (props) => {


    const RenderFields = () =>{

        return(
            _.map(FIELDS, ({name,label, placeholder}, index) =>{
                return <Field key={index} component={SurveyField} type='text' placeholder={`${placeholder}`} name={name} label={label} />
            })
        )
        
    }


     return(
         <div className='form'>
                    <h5 className='center'>Fill out your survey entries</h5>

                    <hr />

                <form className='survey-form'
                 onSubmit={props.handleSubmit(values =>{  props.review()}  )}>

                  { RenderFields() }

                    <Link to='/surveys' className='red btn-flat left white-text' > 
                        Cancel
                       <i className="tiny material-icons right">cancel</i>
                    </Link>

                    <button className='teal btn-flat right white-text' 
                              type='submit'> 
                        Next
                       <i className="tiny material-icons right">done</i>
                    </button>


                </form>
         </div>
     );



}

const validate = values =>{

    const errors = {};


        _.map(FIELDS,({name})=>{
            if(!values[name]){ // look inside the name property of each field 
                errors[name] = 'You Must Provie A Value';  // add a property using the same name 
            }
        });
        // same as below
        // if(!values.title){
        //     errors.title = 'message';
        // }

        errors.recipients = validateEmails(values.recipients || '');

    return errors;
}

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
}) (SurveyForm);