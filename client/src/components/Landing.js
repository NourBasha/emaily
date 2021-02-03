import Typed from "react-typed";

const Landing = (props) => {
  return (
    <div className='landing'>
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

        <div className="row steps-container">
          <div className="col s8 offset-s2  m4 offset-m4">
            <div className="steps hoverable">
              <ul>
                <li>log in with google</li>
                <li>buy credit</li>
                <li>fill survey</li>
                <li>send survey</li>
                <li>improve your business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" footer">

           <div className='footer-container-wrapper'>
           <div className='footer-container row' style={{paddingLeft:'0', paddingRight:'0'}}>
              <div className='col s6 '>
                <h3>Emaily</h3>
                    <p>
                        This website uses Sendgrid library to send real E-mails to real
                        users but with a mock credit card credintials only to showcase our
                        software development abilities and to practice. We hope you enjoy
                        your visit to our website and hopefully you will come back again!
                    </p>
              </div>
              <div className='col s6  '>

              <div className='links-container'>
              <h3 >Related Links</h3>
                  <div className='links'>
                  <ul>
                        <li>
                            <a href='https://sendgrid.com/' className='right-align'> Sendgrid </a>
                        </li>
                        <li>
                            <a href='https://materializecss.com/'> Materialize CSS </a>
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
