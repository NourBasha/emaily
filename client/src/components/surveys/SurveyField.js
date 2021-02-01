// to make custom fields , lable and text



const SurveyField =  ({input, label, meta :{error, touched}})=>{


        return (
        <div>
            
            <label style={{fontSize:'16px'}}>{label}</label>
            <input style={{marginBottom:'0'}}  {...input} />
            <div className='red-text' style={{marginBottom:'30px'}}>
                
                  { touched && error}

            </div>
        </div>
    );
}

export default SurveyField;