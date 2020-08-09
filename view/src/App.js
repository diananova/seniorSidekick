import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import landing from './pages/landing';
import login from './pages/login';
import signup from './pages/signup';
import questionnaire from './pages/questionnaire';
import results from './pages/results';
import userdetails from './pages/userDetails';
import home from './pages/home'; 

import React from 'react';
function App() {
  return (
      <Router>
    <div>
       <Switch>
          <Route exact path="/" component={landing}/>
          <Route exact path="/home" component={home}/> 
          <Route exact path="/login" component={login}/>
          <Route exact path="/signup" component={signup}/>     
          <Route exact path="/questionnaire" component={questionnaire}/>  
          <Route exact path="/results" component={results}/>  
          <Route exact path="/userdetails" component={userdetails}/> 
           
          </Switch>
    </div>
</Router>
  );
}
export default App;