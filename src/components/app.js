import React from 'react';
import './app.css';

import MainPage from './main-page/main-page';
import AnalyseTool from './analysis-tool/analysis-tool';
import CurrencyPage from './currencies/currencies';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//import { BrowserRouter, Route, Redirect } from 'react-router-dom';
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/"><MainPage /></Route>
                    <Route path="/analysis"><AnalyseTool /></Route>
                    <Route path="/currencies"><CurrencyPage /></Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;