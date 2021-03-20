import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link" href="/currencies">currencies</a>
              <a className="nav-link" href="/analysis">analysis</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;