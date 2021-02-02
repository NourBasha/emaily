
import {Router , Route, Switch, Redirect} from 'react-router-dom';
import history from '../utils/history';

import Header from '../components/header';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import NewSurvey from '../components/surveys/NewSurvey';

import {connect} from 'react-redux';



const Routes = ({user}) =>{


    return(
       <div >{/* solely for css work */}
            <Router  history={history}> 
               <Header/>
                <Switch>
                    <Route exact path='/'  >
                            {
                                user === false || user === null
                                ?   <Landing/> 
                                : <Redirect to={{pathname:'/surveys'}} />
                            }
                    </Route>
                    <Route exact path='/surveys'  component={Dashboard}/>
                    <Route exact path='/surveys/new'  component={NewSurvey}/>
                </Switch>
            </Router>
       </div>
    )
}


const mapStateToProps = ({auth})=>{
   return {
    user : auth.user
   }
}

export default connect (mapStateToProps) (Routes); 