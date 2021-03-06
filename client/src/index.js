import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import ReactDOM from 'react-dom';
import App from './components/App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import RootReducer from './store/reducers';

import './scss/index.scss';



const store = createStore(RootReducer, {},applyMiddleware(reduxThunk));


ReactDOM.render(
    <React.Fragment>
       <Provider store={store}>
            <App />
       </Provider>
    </React.Fragment>

    , document.querySelector('#root')
)
