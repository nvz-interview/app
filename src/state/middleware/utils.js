export function createDevToolsMiddleware(createStore) {
    let devToolsMiddleware = function devToolsMiddleware() {
        return createStore;
    };

    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__();
    }

    return devToolsMiddleware;
}
