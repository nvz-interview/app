import {createStore} from 'redux';

import rootReducer from './reducers';
import intialState from './initial';
import middleware from './middleware';

export default createStore(rootReducer, intialState, middleware);
