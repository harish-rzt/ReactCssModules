//Redux
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/index.js';

// const reducer = combineReducers({rootReducer});

const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware),
)(createStore);

export default finalCreateStore(rootReducer);