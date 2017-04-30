import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middleware = applyMiddleware(createLogger(), thunk);
const store = createStore(mainReducer, middleware);

export default store;
