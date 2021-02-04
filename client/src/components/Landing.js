import Typed from "react-typed";

import google from '../assets/google.png';
import stripe from '../assets/stripe.png';
import sendgrid from '../assets/sendgrid.png';
import materialize from '../assets/mtz.png';



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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#153942" fillOpacity="1" d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,213.3C672,235,768,245,864,218.7C960,192,1056,128,1152,128C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
       
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
