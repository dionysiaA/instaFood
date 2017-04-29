import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/instagramReducers'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middleware = applyMiddleware(createLogger(), thunk);
const store = createStore(rootReducer, middleware);

export default store;
