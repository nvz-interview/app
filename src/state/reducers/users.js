import {createAction, createActions, handleActions} from 'redux-actions';
import axios from 'axios';

import {merge} from '../utils';

const USERS_IDS_OPTIONS = {prefix: 'USERS/IDS/LOAD'};

const {request, success, failure} = createActions(
    'SUCCESS',
    'REQUEST',
    'FAILURE',
    USERS_IDS_OPTIONS
);

const INITIAL = {items: []};

export default handleActions(
    {
        [request]: merge({request: true}),
        [success]: merge({request: false, success: true}),
        [failure]: merge({request: false, failure: true}, ['success'])
    },
    INITIAL,
    [USERS_IDS_OPTIONS]
);

const {REACT_APP_FE_SERVER} = process.env;

const getUsersIDs = createAction('LOAD', () => async dispatch => {
    try {
        dispatch(request());

        const {data: ids} = await axios.get(`${REACT_APP_FE_SERVER}/users/ids`);

        dispatch(success({items: ids}));
    } catch (err) {
        dispatch(failure(err));
    }
});

export const actions = {
    getUsersIDs
};
