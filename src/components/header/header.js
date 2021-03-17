import React from 'react';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-link" href="/currencies">currencies</a>
              <a class="nav-link" href="/analysis">analysis</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;