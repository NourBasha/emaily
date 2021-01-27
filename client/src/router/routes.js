
import {Router , Route, Switch} from 'react-router-dom';
import history from '../utils/history';
import Header from '../components/header';
import Landing from '../components/Landing';

const Routes = () =>{

    const Dashboard = () => <h4>Dashboard</h4>
    const SurveyNew = () => <h4>New survey</h4>


    return(
       <div className='container' >{/* solely for css work */}
            <Router  history={history}> 
               <Header/>
                <Switch>
                    <Route exact path='/'  component={Landing}/>
                    <Route exact path='/surveys'  component={Dashboard}/>
                    <Route exact path='/surveys/new'  component={SurveyNew}/>
                </Switch>
            </Router>
       </div>
    )
}

export default Routes; 