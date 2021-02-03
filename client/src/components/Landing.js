import Typed from "react-typed";

import google from '../assets/google.png';
import stripe from '../assets/stripe.png';
import sendgrid from '../assets/sendgrid.png';
import materialize from '../assets/mtz.png';

import emaily from '../assets/emaily-bg.jpg';


const Landing = (props) => {
  return (
    <div className="landing">

      <div className="container  " style={{ textAlign: "center" }}>
        <div className=" row landing-container">
          <h1 className="head-message darken-3">stay close to your clients</h1>
          <h4 className="typing">
            <Typed
              strings={[
                "Send Surveys",
                "Get Feedback",
                "Improve Communication",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </h4>
        </div>

      </div>

      <div className='steps' >

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#153942" fillOpacity="1" d="M0,64L60,74.7C120,85,240,107,360,149.3C480,192,600,256,720,261.3C840,267,960,213,1080,197.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
       
         <div className="steps-container center ">
              <ul>
                <li>Log in with google</li>
                <li>Buy credit</li>
                <li>Fill out a feedback survey</li>
                <li>Send it to your clients</li>
                <li>Improve business quiality</li>
              </ul>
          </div>

          <div  className='logos' style={{background:'white'}}>
            <svg className='inverted-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#153942" fillOpacity="1" d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>


            <div className='row '>
                <div className='col'>
                <img src={google}  alt='' />
                </div>
                <div className='col'>
                <img src={stripe}  alt='' />
                </div>
                <div className='col'>
                <img src={sendgrid}  alt='' />
                </div>
                <div className='col'>
                <img src={materialize}  alt=''  />
                </div>
               
            </div>
  

          </div>

      </div>

      <div className=" footer">
          <div style={{background:'white'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#153942" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,202.7C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

          </div>

        <div className="footer-container-wrapper">
          <div
            className="footer-container row"
            style={{ paddingLeft: "0", paddingRight: "0" }}
          >
            <div className="col s6 ">
              <h3>Emaily</h3>
              <p>
                This website uses Sendgrid library to send real E-mails to real
                users but with a mock credit card credintials only to showcase
                our software development abilities and to practice. We hope you
                enjoy your visit to our website and hopefully you will come back
                again!
              </p>
            </div>
            <div className="col s6  ">
              <div className="links-container">
                <h4>Related Links</h4>
                <div className="links">
                  <ul>
                    <li>
                      <a href="https://sendgrid.com/" className="right-align">
                        {" "}
                        Sendgrid{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://materializecss.com/">
                        {" "}
                        Materialize CSS{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Landing;
