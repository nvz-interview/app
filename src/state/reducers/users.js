import {createAction, createActions, handleActions} from 'redux-actions';

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

const getUsersIDs = createAction('LOAD', () => async dispatch => {
    try {
        dispatch(request());
        dispatch(success({items: [1, 2, 3]}));
    } catch (err) {
        dispatch(failure(err));
    }
});

export const actions = {
    getUsersIDs
};
