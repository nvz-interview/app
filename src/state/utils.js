import {omit, isEmpty, isFunction} from 'lodash';

export function createDevToolsMiddleware(createStore) {
    let devToolsMiddleware = function devToolsMiddleware() {
        return createStore;
    };

    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__();
    }

    return devToolsMiddleware;
}

export function merge(additions, subtractions = []) {
    return (state, {payload = {}}) => {
        return omit(
            {
                ...state,
                ...payload,
                ...additions
            },
            subtractions
        );
    };
}

export function inject(...injectors) {
    return ({dispatch, getState}) => {
        return next => {
            return action => {
                const params = injectors.reduce((aggregator, injector) => {
                    return {...aggregator, ...injector(getState, action)};
                }, {});

                if (isFunction(action)) {
                    return action(dispatch, params, getState);
                }
                if (!isEmpty(action) && isFunction(action.payload)) {
                    return action.payload(dispatch, params, getState);
                }

                return next(action);
            };
        };
    };
}
