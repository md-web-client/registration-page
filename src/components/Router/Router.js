import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MaleNurseLogin, /* LunchLadyLogin, BaldGuyLogin */ } from '../App';
import { navigate } from '../../helpers'

export default class Router extends Component {
  
  render(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/register']} 
          component={MaleNurseLogin}
        />
        <Route exact path="/users" 
          component={MaleNurseLogin}
        />
        <Route
          component={routeProps => (
            <section>
              <a onClick={() => navigate(routeProps.history, '/')} >404 return to home page</a>
            </section>
          )}
        />
      </Switch>
    </BrowserRouter>
  )};
}

