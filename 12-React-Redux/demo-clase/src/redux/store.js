import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunkMiddlewere from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddlewere)));
 
export default store;