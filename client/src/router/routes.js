
import {Router , Route, Switch} from 'react-router-dom';
import history from '../utils/history';

import Header from '../components/header';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import NewSurvey from '../components/surveys/NewSurvey';


const Routes = () =>{


    return(
       <div className='container' >{/* solely for css work */}
            <Router  history={history}> 
               <Header/>
                <Switch>
                    <Route exact path='/'  component={Landing}/>
                    <Route exact path='/surveys'  component={Dashboard}/>
                    <Route exact path='/surveys/new'  component={NewSurvey}/>
                </Switch>
            </Router>
       </div>
    )
}

export default Routes; 