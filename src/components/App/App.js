import React, { Component } from 'react';
import './App.css';
import Fields from '../Fields/Fields.js';
import { LunchLadyHairNet, BaldGuy, BaldGuyB, NurseHat } from '../../Svg';
import { peekAndAnimateAvatar } from 'try-out-a-package-to-be-removed-later';

export class LunchLadyLogin extends Component {
  componentDidMount(){
    peekAndAnimateAvatar();
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <form autoComplete="off">
          <div className="svgContainer">
            <LunchLadyHairNet/>
            <BaldGuyB/>
          </div>
          <Fields/>
        </form>
      </div>
  )};
}
export class MaleNurseLogin extends Component {
  componentDidMount(){
    peekAndAnimateAvatar();
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <div  className="form" >
          <div className="svgContainer">
            <NurseHat/>
            <BaldGuy/>
          </div>
          <Fields/>
        </div>
      </div>
  )};
}
export class BaldGuyLogin extends Component {
  componentDidMount(){
    peekAndAnimateAvatar()
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <form autoComplete="off">
          <div className="svgContainer">
            <BaldGuy/>
          </div>
          <Fields/>
        </form>
      </div>
  )};
}

