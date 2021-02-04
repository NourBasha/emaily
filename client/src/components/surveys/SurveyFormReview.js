import { connect } from "react-redux";

import FIELDS from "./formFields";
import _ from "lodash";

import * as actions from "../../store/actions/actions";

import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ review, surveyValues, submitSurvey, history }) => {
  return (
    <div className="form-review">
        <div className="reviw-entries">
                    <h3 className='center'>Please review your entries</h3>

                    {_.map(FIELDS, ({ label, name }, index) => {
                    return (
                        <div key={index}>
                        <h5>{label}</h5>
                        <p>{surveyValues[name]}</p>
                        </div>
                    );
                    })}

                    <button
                    className="btn left yellow darken-3 white-text"
                    onClick={review}
                    >
                    Back
                    </button>

                    <button
                    onClick={() => submitSurvey(surveyValues, history)}
                    className="btn right  green white-text"
                    >
                    <i className="material-icons right">email</i>
                    Send Survey
                    </button>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveyValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
