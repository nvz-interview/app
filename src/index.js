import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import {createGlobalStyle} from 'styled-components';

import ErrorBoundary from './components/error/ErrorBoundary';
import AppModule from './modules';

import {normalization} from './theme';

const GlobalStyle = createGlobalStyle`${normalization}`;

function App() {
    return (
        <ErrorBoundary>
            <Fragment>
                <GlobalStyle />
                <AppModule />
            </Fragment>
        </ErrorBoundary>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
