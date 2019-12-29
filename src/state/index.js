import {createStore} from 'redux';

import rootReducer from './slices';
import intialState from './initial';
import middleware from './middleware';

export default createStore(rootReducer, intialState, middleware);
