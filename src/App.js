import React from 'react';
import { Root, Routes } from 'react-static';

//
import { Link, Router } from 'components/Router';

import './app.css';

const App = () => {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
};

export default App;