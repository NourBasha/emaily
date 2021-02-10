// to make custom fields , lable and text

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="field">
      {label === "Recipients\u2019 List"
        ? [
           <span key={label}>
              <label>{label}</label>,
            <input {...input} placeholder="Comma separated E-mails" />
           </span>,
          ]
        : [
          <span key={label}>
             <label>{label}</label>, <input {...input} />
          </span>
        ]}

      <div className="error-message">{touched && error}</div>
    </div>
  );
};

export default SurveyField;
