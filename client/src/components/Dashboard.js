import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSurveys } from "../store/actions/actions";

import Typed from "react-typed";

import _ from "lodash";

const Dashboard = ({ getSurveys, surveys }) => {
  useEffect(() => {
    getSurveys();
  }, [getSurveys]);

  const DisplaySurveys = () => {
    let list = [];

    if (surveys) {
      list = _.map(
        surveys,
        ({ title, subject, body, yes, no, dateSent, lastResponded }, index) => {
          return (
            <div key={index} className="col s12 m6  survey-col">
              <div className="card horizontal ">
                <div className="card-stacked">
                  <div className="card-content ">
                    <div className="title">
                      <h5 className="card-title center"> {title} </h5>
                    </div>

                    <hr />

                    <div className="content">
                      <p className="subject">Subject: &nbsp; {subject} </p>

                      <p className="body">Content: &nbsp; {body} </p>

                      <p className="sent-date left bottom">
                        Date sent: &nbsp;{" "}
                        {new Date(dateSent).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="card-action">
                    <p className="choise"> Yes: {yes}</p>
                    <p className="choise"> No: {no}</p>
                    <p className="right latest-activity ">
                      Latest activity: &nbsp;
                      {!isNaN(new Date(lastResponded))
                        ? new Date(lastResponded).toLocaleDateString()
                        : "No Activity Yet"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      );
    }

    return list.reverse();
  };

  return (
    <div className="dashboard">
      <div className="container">
        {surveys.length ? (
          <div className="row surveys-row">
            <DisplaySurveys />
          </div>
        ) : (
          <div
            className="row welcome-message"
            style={{ height: "100vh", marginBottom: "0" }}
          >
            <h2 className="center">Welcome to Emaily</h2>

            <p className="center">
              <Typed
                strings={[
                  "make sure you have enough credit",
                  "start sending surveys now",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              ></Typed>
            </p>
          </div>
        )}
      </div>
      
      
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large green">
          <i className="large material-icons">add</i>
        </Link>
      </div>
              
    


    </div>
  );
};

const mapStateToProps = ({ surveys }) => {
  return {
    surveys: surveys.surveyList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSurveys: () => dispatch(getSurveys()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
