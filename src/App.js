import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages';
import CalendarPage from './pages/calendar';





function App() {
  return (
    <Router>
      <Switch>
         <Route path='/' component={Home} exact />
         <Route path='/calendar' component={CalendarPage} exact />
       </Switch>
    </Router>
  );
}

export default App;
