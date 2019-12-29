import {createStore, applyMiddleware, compose} from 'redux';
import {inject, createDevToolsMiddleware} from '../utils';

const reducers = [applyMiddleware(inject(() => ({}))), createDevToolsMiddleware(createStore)];

export default compose(...reducers);
