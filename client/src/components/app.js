import React from 'react';

import MainPage from './main-page/main-page';
import AnalyseToolPage from './analysis-page/analysis-page';
import CurrencyPage from './currencies/currencies';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/"><MainPage /></Route>
                    <Route path="/analysis"><AnalyseToolPage /></Route>
                    <Route path="/currencies"><CurrencyPage /></Route>
                    <Route path="*"><Redirect to={{ pathname: "/"}} /></Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;