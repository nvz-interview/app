import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: purple;
  }
`;

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        </Fragment>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
