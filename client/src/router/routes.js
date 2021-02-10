import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../utils/history";

import Header from "../components/header";
import Landing from "../components/Landing";
import Dashboard from "../components/Dashboard";
import NewSurvey from "../components/surveys/NewSurvey";

import { connect } from "react-redux";
import ThankUser from "../components/ThankUser";

const Routes = ({ user }) => {
  return (
    <div>
      {/* solely for css work */}
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to={{ pathname: "/surveys" }} /> : <Landing />}
          </Route>
          <Route exact path="/surveys">
            {user ? <Dashboard /> : <Redirect to={{ pathname: "/" }} />}
          </Route>
          <Route exact path="/surveys/new">
            {user ? <NewSurvey /> : <Redirect to={{ pathname: "/" }} />}
          </Route>

          <Route exact path="/reply/thanks" component={ThankUser} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

export default connect(mapStateToProps)(Routes);
