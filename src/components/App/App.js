import React, { Component } from 'react';
import './App.css';
import Fields from '../Fields/Fields.js'
import { LunchLadyHairNet, BaldGuy, NurseHat } from '../../Svg'
import { repositionSvgJavascript } from 'try-out-a-package-to-be-removed-later'
import { repositionAndPeek } from './func'

export class LunchLadyLogin extends Component {
  componentDidMount(){
    repositionAndPeek()
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <form autoComplete="off">
          <div className="svgContainer">
            <LunchLadyHairNet/>
            <BaldGuy/>
          </div>
          <Fields/>
        </form>
      </div>
  )};
}
export class MaleNurseLogin extends Component {
  componentDidMount(){
    repositionAndPeek()
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <form autoComplete="off">
          <div className="svgContainer">
            <NurseHat/>
            <BaldGuy/>
          </div>
          <Fields/>
        </form>
      </div>
  )};
}
export class BaldGuyLogin extends Component {
  componentDidMount(){
    repositionAndPeek()
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

