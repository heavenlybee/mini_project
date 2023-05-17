import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import LogOut from './components/pages/LogOut';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/services' component={Services} />
          <Route path='/log-out' component={LogOut} />
          </Switch>
        </Router>
    </>
  );
}

export default App;