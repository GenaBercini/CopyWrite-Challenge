import { createStore, applyMiddleware } from 'redux'
import textReducer from '../reducer/redux'
import thunk from 'redux-thunk';

const store = createStore(textReducer, applyMiddleware(thunk));

export default store;