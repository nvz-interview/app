import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StateProvider} from 'react-redux';

import {createGlobalStyle} from 'styled-components';

import ErrorBoundary from './components/error/ErrorBoundary';
import AppModule from './modules';

import {normalization} from './theme';
import store from './state';

const GlobalStyle = createGlobalStyle`${normalization}`;

function App() {
    return (
        <ErrorBoundary>
            <StateProvider store={store}>
                <GlobalStyle />
                <AppModule />
            </StateProvider>
        </ErrorBoundary>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
