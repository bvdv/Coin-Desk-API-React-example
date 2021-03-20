import React from 'react';
import './main-page.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

const mainPage = () => {
    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">React App</h1>
                <p className="lead">Coin Desk API &amp; Document analyse tool - React app examples</p>
            </div>
            <div className="container">
                <Router>
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Coin Desk API</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>sorting by currency</li>
                                    <li>auto-refresh table </li>
                                    <li>last updated</li>
                                    <li>and more...</li>
                                </ul>
                                <a href="/currencies"><button type="button" className="btn btn-lg btn-block btn-outline-primary">Get started</button></a>
                                {/* <Link to="/currencies"><button type="button" className="btn btn-lg btn-block btn-outline-primary">Get started</button></Link> */}
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Document Analyse Tool</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>all unique tags</li>
                                    <li>most commonly used</li>
                                    <li>longest path in the document tree</li>
                                    <li>and more...</li>
                                </ul>
                                <a href="/analysis"><button type="button" className="btn btn-lg btn-block btn-outline-primary">Get started</button></a>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        </div>

    );
}
export default mainPage;