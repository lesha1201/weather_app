import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/(home)?" exact component={Home} />
        <Route component={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
