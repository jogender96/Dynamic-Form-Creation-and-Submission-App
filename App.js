import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormCreation from './components/FormCreation';
import FormFill from './components/FormFill';
import FormList from './components/FormList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FormList} />
        <Route path="/create" component={FormCreation} />
        <Route path="/forms/:id" component={FormFill} />
      </Switch>
    </Router>
  );
}

export default App;
