import { useEffect } from "react";
import Routes from "../router/routes";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/actions";




const App = (props) => {
  
  const dispatch = useDispatch(); /// instead of useing connect method on the component ;

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  return (
    <div className='app' >
      
          
            <Routes />
            
    </div>
  );
};



export default App; 
