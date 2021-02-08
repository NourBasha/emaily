import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = (props) => {

  const RenderContent = () => {
    switch (props.auth) {
      case null:
        return <li></li>;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return [
          <li key="1">
           
            <Payments />
          </li>,
          <li key="2" title='current credit' style={{ margin: "0 10px" }}>
                
            Credit : {props.auth.credits}{" "}
          </li>,
          <li key="3">
            <a href="/api/logout" title='logout'>logout</a>
          </li>,
        ];
    }
  };

  return (
    <div className='header'>
      <nav className=" header-nav ">
        <div className="nav-wrapper ">
         <Link to={props.auth ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </Link>
        
         
      
          <ul className="right">
              <RenderContent />
            </ul>
        
         
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth.user,
  };
};

export default connect(mapStateToProps)(Header);
