import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MaleNurseLogin, Users, /* LunchLadyLogin, BaldGuyLogin */ } from '../Pages';
import { navigate } from '../../helpers'

export default class Router extends Component {

  render(){
  return (
    <BrowserRouter>
      <Route exact path="/" component={()=>(
        <Redirect to="/register"/>
      )}/>
      <Switch>
        <Route exact path={['/Register', '/register']}
          component={routeProps => (
            <MaleNurseLogin {...routeProps} />
          )}
        />
        <Route exact path={['/Users', '/users']}
          component={routeProps => (
            <Users {...routeProps} />
          )}
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

