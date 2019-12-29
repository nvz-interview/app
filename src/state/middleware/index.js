import {createStore, compose} from 'redux';

import {createDevToolsMiddleware} from './utils';

const reducers = [];
reducers.push(createDevToolsMiddleware(createStore));

export default compose(...reducers);
