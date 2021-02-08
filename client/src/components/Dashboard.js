import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getSurveys } from "../store/actions/actions";

import Typed from "react-typed";

import _ from "lodash";

const Dashboard = ({ getSurveys, surveys , user }) => {

  const [noCredit, setNoCredit] = useState(false);

  const history = useHistory();

  const handleAddSurvey = () =>{
      if(user.credits<1){
          setNoCredit(true);
      }else {
        setNoCredit(false);
        history.push('/surveys/new')
      }
  }



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

      
      { noCredit 
        ? 
            ( <div className='no-credit'>
                    <p>You don't have enough credit to send surveys, please buy credit first then try again.</p>
              </div>)
        : null
      }

      <div className="container">
     
        { surveys.length? (
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
              {
                user.credits < 1 
                ?
                (<div> 
                     <div className='directions'> 
                      <p> To buy credit </p>
                  </div>
                    <div className='mock-data'>
                      
                        <ul >
                          <li>Use any mock email </li>
                          <li>Card Number: "4242" repeated </li>
                          <li>MM/YY: any future date   </li>
                          <li>CVC: any three numbers </li>
                        </ul>
                    </div>
                </div>)
                :null
              }
          
          </div>
        )}
      </div>
      
      
      <div className="fixed-action-btn" onClick={handleAddSurvey}>
        <div className="btn-floating btn-large green">
            <i className="large material-icons">add</i>
        </div>
      </div>
              
      

    </div>
  );
};

const mapStateToProps = ({ surveys, auth }) => {
  return {
    surveys: surveys.surveyList,
    user : auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSurveys: () => dispatch(getSurveys()),
  //  setLoadingPage : (flag) => dispatch(setLoading(flag))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
