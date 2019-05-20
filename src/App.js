import React, { Component } from 'react';
import './App.css';
import Fields from './Fields.js'
import LunchLady from './LunchLady.js'
import { repositionSvgJavascript } from './repositionSvgJavascript.js'


class App extends Component {
  componentDidMount(){
    repositionSvgJavascript()
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <form autoComplete="off">
          <h1 style={{marginLeft: '95px', marginBottom: '30px', fontSize: '30px'}}>Lunch Lady</h1>
          <div className="svgContainer">
            <LunchLady/>
          </div>
          <Fields/>
          
        </form>
      </div>
  )};
}

export default App;
