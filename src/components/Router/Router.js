import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MaleNurseLogin, /* LunchLadyLogin, BaldGuyLogin */ } from '../App';

export default class LunchLadyLogin extends Component {
  
  render(){
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/register']} 
          component={MaleNurseLogin}
        />
        <Route exact path="/users" 
          component={MaleNurseLogin}
        />
        <Route>
          404
        </Route>
      </Switch>
    </Router>
  )};
}

