import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/singIn" component={Registro} />
      </Switch>
    </Router>
   
  );
}

export default App;
