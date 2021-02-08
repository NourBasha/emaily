import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getSurveys, deleteSurvey , setLoading} from "../store/actions/actions";


import LoadingOverlay from 'react-loading-overlay';
import PropagateLoader from 'react-spinners/PropagateLoader';

import Typed from "react-typed";

import _ from "lodash";

const Dashboard = ({ getSurveys, surveys , user, deleteSurvey ,surveyDeleteingFlag, setDeletingFlag }) => {

  const [noCredit, setNoCredit] = useState(false);
  const [welcomeMessagem , setWelcomeMessage] = useState(false);
  const [sortType, setSortType] = useState(1);

  const history = useHistory();

  const handleAddSurvey = () =>{
      if(user.credits<1){
          setNoCredit(true);
      }else {
        setNoCredit(false);
        history.push('/surveys/new')
      }
  }

const handleDeleteSurvey = (surveyID)=>{

  console.log(surveyID);
  setDeletingFlag(true);
  deleteSurvey(surveyID);
}

  useEffect(() => {
    
    getSurveys();




    if(user){

      if(user.credits<1){

        setNoCredit(true);

      }else {
        setNoCredit(false);
      }

    }

    setTimeout(() => {
      setWelcomeMessage(true);
    }, 900);

//  document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems, {
//       direction: 'top'
//     });
//   });

  }, [getSurveys,noCredit,user]);

  const DisplaySurveys = () => {

    let list = [];

    if (surveys) {

      list = surveys;
    console.log('before',list);

   
    
    if(sortType === 1 ){ // date sent
        list.sort((a,b)=>{
            if(a.dateSent < b.dateSent ){
              return 1 ;
            }else if(a.dateSent > b.dateSent){
              return -1;
            }
        });
    }
     if (sortType === 2) { // total number of votes
      list.sort((a,b)=>{
       
        if((a.yes + a.no ) < (b.yes + b.no )){
          console.log('a > b',a.yes + a.no );
          return 1 ;
        }else if((a.yes + a.no) > (b.yes + b.no)){
          return -1;
        }else {
          return 0 ;
        }
    });
    console.log('after',list);
    }


  
      list = _.map(
        list,
        ({ title, subject, body, yes, no, dateSent, lastResponded , _id}, index) => {
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
                  <span className='delete-survey-span' onClick={ () => handleDeleteSurvey(_id)}> 
                       <i className='small material-icons right delete-icon'>delete</i>
                  </span>
                </div>
              </div>
            </div>
          );
        }
      );
    }

   
    return list;
  };


  const handleSort = ()=>{
    
  }

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
         [ <div className="row surveys-row">
            <DisplaySurveys />
          </div>,
           
          //   <div className="fixed-action-btn sorting-action" onClick={handleSort}>
          //   <div className="btn-floating btn-large small">
          //       <i className="large material-icons">sort</i>
          //   </div>
          // </div>
          // ,
           <div className='overlay'> 
           <LoadingOverlay
             className = 'loading-overlay'
             active={surveyDeleteingFlag} 
             spinner={<PropagateLoader   color={'#0e8befb8'} />}
           >
         
           </LoadingOverlay>
       </div>]
        ) :  
          welcomeMessagem ?  (
          <div
            className="row welcome-message"
            style={{ height: "100vh", marginBottom: "0" }}
          >
            <div className='message-wrapper'>
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
              {
                user
                ?   
                  noCredit  
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
                   
                :null
              }
          
          </div>
        )
            :null
        
        
        }
      </div>
      
      
      <div className="fixed-action-btn" onClick={handleAddSurvey}>
        <div className="btn-floating btn-large green">
            <i className="large material-icons">add</i>
        </div>
      </div>
              
      

    </div>
  );
};

const mapStateToProps = ({ surveys, auth, loading }) => {
  return {
    surveys: surveys.surveyList,
    user : auth.user,
    surveyDeleteingFlag : loading.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSurveys: () => dispatch(getSurveys()),
    deleteSurvey : (surveyID) => dispatch(deleteSurvey(surveyID)),
    setDeletingFlag : (val ) => dispatch(setLoading(val))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
