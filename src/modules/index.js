import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {ThemeProvider} from 'styled-components';

import theme from '../theme';

import Dashboard from './dashboard/Dashboard';
import NotFound from './misc/NotFound';

import Header from '../components/header/Header';

console.log(theme);

export default function AppModule() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route to="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}
