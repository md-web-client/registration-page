import React, { Component } from 'react';
import './App.css';
import Fields from './Fields.js'
import { LunchLadyHairNet, BaldGuy, NurseHat } from './Svg'
import { repositionSvgJavascript } from './repositionSvgJavascript.js'


export class LunchLadyLogin extends Component {
  componentDidMount(){
    repositionSvgJavascript()
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
    repositionSvgJavascript()
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
    repositionSvgJavascript()
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

