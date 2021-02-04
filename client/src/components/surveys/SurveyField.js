// to make custom fields , lable and text



const SurveyField =  ({input, label, meta :{error, touched}})=>{


        return (
        <div className='field'>
            
            <label >{label}</label>
            <input  {...input} />
            <div className='error-message' >
                
                  { touched && error}

            </div>
        </div>
    );
}

export default SurveyField;