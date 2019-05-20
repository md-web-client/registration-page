import React, { Component } from 'react';
import './App.css';
import Fields from './Fields.js'
import LunchLady from './LunchLady.js'


class App extends Component {
  componentDidMount(){
    var email = document.querySelector('#email'), password = document.querySelector('#password'), mySVG = document.querySelector('.svgContainer'), armL = document.querySelector('.armL'), armR = document.querySelector('.armR'), eyeL = document.querySelector('.eyeL'), eyeR = document.querySelector('.eyeR'), nose = document.querySelector('.nose'), mouth = document.querySelector('.mouth'), mouthBG = document.querySelector('.mouthBG'), mouthSmallBG = document.querySelector('.mouthSmallBG'), mouthMediumBG = document.querySelector('.mouthMediumBG'), mouthLargeBG = document.querySelector('.mouthLargeBG'), mouthMaskPath = document.querySelector('#mouthMaskPath'), mouthOutline = document.querySelector('.mouthOutline'), tooth = document.querySelector('.tooth'), tongue = document.querySelector('.tongue'), chin = document.querySelector('.chin'), face = document.querySelector('.face'), eyebrow = document.querySelector('.eyebrow'), outerEarL = document.querySelector('.earL .outerEar'), outerEarR = document.querySelector('.earR .outerEar'), earHairL = document.querySelector('.earL .earHair'), earHairR = document.querySelector('.earR .earHair'), hair = document.querySelector('.hair');
    var caretPos, curEmailIndex, screenCenter, svgCoords, eyeMaxHorizD = 20, eyeMaxVertD = 10, noseMaxHorizD = 23, noseMaxVertD = 10, dFromC, eyeDistH, mouthStatus = "small";
    const TweenMax = window.TweenMax
    const Expo = window.Expo
    const Quad = window.Quad
    function getCoord(e) {
      var 	carPos = email.selectionEnd,
        div = document.createElement('div'),
        span = document.createElement('span'),
        copyStyle = getComputedStyle(email),
        emailCoords = {}, caretCoords = {}, centerCoords = {}
      ;
      [].forEach.call(copyStyle, function(prop){
        div.style[prop] = copyStyle[prop];
      });
      div.style.position = 'absolute';
      document.body.appendChild(div);
      div.textContent = email.value.substr(0, carPos);
      span.textContent = email.value.substr(carPos) || '.';
      div.appendChild(span);
      
      emailCoords = getPosition(email);							//console.log("emailCoords.x: " + emailCoords.x + ", emailCoords.y: " + emailCoords.y);
      caretCoords = getPosition(span);							//console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
      centerCoords = getPosition(mySVG);							//console.log("centerCoords.x: " + centerCoords.x);
      svgCoords = getPosition(mySVG);
      screenCenter = centerCoords.x + (mySVG.offsetWidth / 2);		//console.log("screenCenter: " + screenCenter);
      caretPos = caretCoords.x + emailCoords.x;					//console.log("caretPos: " + caretPos);
      
      dFromC = screenCenter - caretPos; 							//console.log("dFromC: " + dFromC);
      var pFromC = Math.round((caretPos / screenCenter) * 100) / 100;
      if(pFromC < 1) {
        
      } else if(pFromC > 1) {
        pFromC -= 2;
        pFromC = Math.abs(pFromC);
      }

      eyeDistH = -dFromC * .05;
      if(eyeDistH > eyeMaxHorizD) {
        eyeDistH = eyeMaxHorizD;
      } else if(eyeDistH < -eyeMaxHorizD) {
        eyeDistH = -eyeMaxHorizD;
      }
      
      var eyeLCoords = {x: svgCoords.x + 84, y: svgCoords.y + 76};
      var eyeRCoords = {x: svgCoords.x + 113, y: svgCoords.y + 76};
      var noseCoords = {x: svgCoords.x + 97, y: svgCoords.y + 81};
      var mouthCoords = {x: svgCoords.x + 100, y: svgCoords.y + 100};
      var eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
      var eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
      var eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;
      var eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
      var eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
      var eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;
      var noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
      var noseX = Math.cos(noseAngle) * noseMaxHorizD;
      var noseY = Math.sin(noseAngle) * noseMaxVertD;
      var mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
      var mouthX = Math.cos(mouthAngle) * noseMaxHorizD;
      var mouthY = Math.sin(mouthAngle) * noseMaxVertD;
      var mouthR = Math.cos(mouthAngle) * 6;
      var chinX = mouthX * .8;
      var chinY = mouthY * .5;
      var chinS = 1 - ((dFromC * .15) / 100);
      if(chinS > 1) {chinS = 1 - (chinS - 1);}
      var faceX = mouthX * .3;
      var faceY = mouthY * .4;
      var faceSkew = Math.cos(mouthAngle) * 5;
      var eyebrowSkew = Math.cos(mouthAngle) * 25;
      var outerEarX = Math.cos(mouthAngle) * 4;
      var outerEarY = Math.cos(mouthAngle) * 5;
      var hairX = Math.cos(mouthAngle) * 6;
      var hairS = 1.2;
      
      TweenMax.to(eyeL, 1, {x: -eyeLX , y: -eyeLY, ease: Expo.easeOut});
      TweenMax.to(eyeR, 1, {x: -eyeRX , y: -eyeRY, ease: Expo.easeOut});
      TweenMax.to(nose, 1, {x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut});
      TweenMax.to(mouth, 1, {x: -mouthX , y: -mouthY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut});
      TweenMax.to(chin, 1, {x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut});
      TweenMax.to(face, 1, {x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: "center top", ease: Expo.easeOut});
      TweenMax.to(eyebrow, 1, {x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut});
      TweenMax.to(outerEarL, 1, {x: outerEarX, y: -outerEarY, ease: Expo.easeOut});
      TweenMax.to(outerEarR, 1, {x: outerEarX, y: outerEarY, ease: Expo.easeOut});
      TweenMax.to(earHairL, 1, {x: -outerEarX, y: -outerEarY, ease: Expo.easeOut});
      TweenMax.to(earHairR, 1, {x: -outerEarX, y: outerEarY, ease: Expo.easeOut});
      TweenMax.to(hair, 1, {x: hairX, scaleY: hairS, transformOrigin: "center bottom", ease: Expo.easeOut});
      
      document.body.removeChild(div);
    };

    function onEmailInput(e) {
      getCoord(e);
      var value = e.target.value;
      curEmailIndex = value.length;
      
      // very crude email validation for now to trigger effects
      if(curEmailIndex > 0) {
        if(mouthStatus === "small") {
          mouthStatus = "medium";
          TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthMediumBG, shapeIndex: 8, ease: Expo.easeOut});
          TweenMax.to(tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
          TweenMax.to(tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
          TweenMax.to([eyeL, eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
        }
        if(value.includes("@")) {
          mouthStatus = "large";
          TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthLargeBG, ease: Expo.easeOut});
          TweenMax.to(tooth, 1, {x: 3, y: -2, ease: Expo.easeOut});
          TweenMax.to(tongue, 1, {y: 2, ease: Expo.easeOut});
          TweenMax.to([eyeL, eyeR], 1, {scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center"});
        } else {
          mouthStatus = "medium";
          TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthMediumBG, ease: Expo.easeOut});
          TweenMax.to(tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
          TweenMax.to(tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
          TweenMax.to([eyeL, eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
        }
      } else {
        mouthStatus = "small";
        TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthSmallBG, shapeIndex: 9, ease: Expo.easeOut});
        TweenMax.to(tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
        TweenMax.to(tongue, 1, {y: 0, ease: Expo.easeOut});
        TweenMax.to([eyeL, eyeR], 1, {scaleX: 1, scaleY: 1, ease: Expo.easeOut});
      }
    }

    function onEmailFocus(e) {
      e.target.parentElement.classList.add("focusWithText");
      getCoord();
    }

    function onEmailBlur(e) {
      if(e.target.value === "") {
        e.target.parentElement.classList.remove("focusWithText");
      }
      resetFace();
    }

    function onPasswordFocus(e) {
      coverEyes();
    }

    function onPasswordBlur(e) {
      uncoverEyes();
    }

    function coverEyes() {
      TweenMax.to(armL, .45, {x: -93, y: 2, rotation: 0, ease: Quad.easeOut});
      TweenMax.to(armR, .45, {x: -93, y: 2, rotation: 0, ease: Quad.easeOut, delay: .1});
    }

    function uncoverEyes() {
      TweenMax.to(armL, 1.35, {y: 220, ease: Quad.easeOut});
      TweenMax.to(armL, 1.35, {rotation: 105, ease: Quad.easeOut, delay: .1});
      TweenMax.to(armR, 1.35, {y: 220, ease: Quad.easeOut});
      TweenMax.to(armR, 1.35, {rotation: -105, ease: Quad.easeOut, delay: .1});
    }

    function resetFace() {
      TweenMax.to([eyeL, eyeR], 1, {x: 0, y: 0, ease: Expo.easeOut});
      TweenMax.to(nose, 1, {x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut});
      TweenMax.to(mouth, 1, {x: 0, y: 0, rotation: 0, ease: Expo.easeOut});
      TweenMax.to(chin, 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
      TweenMax.to([face, eyebrow], 1, {x: 0, y: 0, skewX: 0, ease: Expo.easeOut});
      TweenMax.to([outerEarL, outerEarR, earHairL, earHairR, hair], 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
    }

    function getAngle(x1, y1, x2, y2) {
      var angle = Math.atan2(y1 - y2, x1 - x2);
      return angle;
    }

    function getPosition(el) {
      var xPos = 0;
      var yPos = 0;

      while (el) {
        if (el.tagName === "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;

          xPos += (el.offsetLeft - xScroll + el.clientLeft);
          yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
          // for all other non-BODY elements
          xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
      }
      return {
        x: xPos,
        y: yPos
      };
    }

    email.addEventListener('focus', onEmailFocus);
    email.addEventListener('blur', onEmailBlur);
    email.addEventListener('input', onEmailInput);
    password.addEventListener('focus', onPasswordFocus);
    password.addEventListener('blur', onPasswordBlur);
    TweenMax.set(armL, {x: -93, y: 220, rotation: 105, transformOrigin: "top left"});
    TweenMax.set(armR, {x: -93, y: 220, rotation: -105, transformOrigin: "top right"});
  }

  render(){
  return (
    <div>
        <meta charSet="UTF-8" />
        <title>Animated SVG Avatar - For Login Page</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <form>
          <h1 style={{marginLeft: '95px', marginBottom: '30px', fontSize: '30px'}}>Lunch Lady</h1>
          <div className="svgContainer">
            <div>
              <svg style={{zIndex: 4}} className="mySVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
                <g style={{zIndex: 100000000}} className="arms" clipPath="url(#armMask)">
                  <g className="armL">
                    <path fill="#ffcb99" stroke="#3a5e77" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="2.5" d="M121.3 97.4L111 58.7l38.8-10.4 20 36.1z" />
                    <path fill="#ffcb99" stroke="#3a5e77" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="2.5" d="M134.4 52.5l19.3-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1L146 59.7M160.8 76.5l19.4-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-18.3 4.9M158.3 66.8l23.1-6.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-23.1 6.2M150.9 58.4l26-7c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-21.3 5.7" />
                    <path fill="#f70413" d="M178.8 74.7l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM180.1 64l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM175.5 54.9l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM152.1 49.4l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z" />
                    <path fill="#fff" stroke="#3a5e77" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M123.5 96.8c-41.4 14.9-84.1 30.7-108.2 35.5L1.2 80c33.5-9.9 71.9-16.5 111.9-21.8" />
                  </g>
                  <g className="armR">
                    <path fill="#ffcb99" stroke="#3a5e77" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="2.5" d="M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z" />
                    <path fill="#ffcb99" stroke="#3a5e77" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="2.5" d="M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9M228.4 66.7l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2M235.8 58.3l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7" />
                    <path fill="#f70413" d="M207.9 74.7l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM206.7 64l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM211.2 54.8l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM234.6 49.4l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8z" />
                    <path fill="#fff" stroke="#3a5e77" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1" />
                  </g>				
                </g>
              </svg>
              <svg style={{zIndex: 2}} className="mySVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 160 180">
                <title>hair-net</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <filter x="-15.9%" y="-30.0%" width="136.7%" height="162.5%" filterUnits="objectBoundingBox" id="filter-1">
                    <feOffset dx={0} dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation={2} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
                    <feMerge>
                      <feMergeNode in="shadowMatrixOuter1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="hair-net" transform="translate(35.000000, 22.000000)" stroke="#000000">
                    <g id="inner-net" filter="url(#filter-1)" transform="translate(3.000000, 0.000000)">
                      <path d="M81.8154541,29.0234746 L77.1016228,38.9951428 L81.8154541,29.0234746 Z M76.8285167,19.0218215 L72.1056877,33.9949784 L76.8285167,19.0218215 Z M66.9,10 L59.5,28.0436431 L66.9,10 Z M55.9285714,4.0862069 L52.5,24.0923077 L55.9285714,4.0862069 Z M42.5278151,0.087628866 L42.5278151,19.0218215 L42.5278151,0.087628866 Z M29.0909091,0.087628866 L32.5,22.0923077 L29.0909091,0.087628866 Z M16,8 L21.5,28.0436431 L16,8 Z M6,19.0218215 L12.5,36.5 L6,19.0218215 Z M0,28.0436431 L5,40 L0,28.0436431 Z" id="net-stripes" />
                    </g>
                    <path d="" id="Path-4" />
                    <path d="M6.07456751,42.4964716 C7.97700872,41.4402757 26.5916448,21.0224513 45.5278151,21 C64.4639855,20.9775487 80.6449021,41.3385096 82.3987813,42.4059791 C84.1526605,43.4734487 85.932961,45.3376882 87.9776537,42.4964716 C89.3407821,40.6023273 89.3407821,37.9881098 87.9776537,34.6538193 C86.5361873,27.8846064 82.960322,21.2392378 77.2500579,14.7177134 C66.3434584,2.26160761 53.3305262,0.087628866 42.7996728,0.087628866 C31.9884985,0.087628866 18.2386193,5.02273118 8,17.5456592 C5.56646394,20.5221344 3.02754236,26.2248545 0.383235266,34.6538193 C-0.127745089,39.1781236 -0.127745089,41.792341 0.383235266,42.4964716 C1.1497058,43.5526676 4.17212629,43.5526676 6.07456751,42.4964716 Z" id="Path-5" strokeWidth={4} />
                    <path d="M2,41 C16.3435662,19 30.6815508,8 45.0139539,8 C59.3463569,8 73.675039,19 88,41" id="Path-6" strokeWidth={2} />
                  </g>
                </g>
              </svg>
              <svg className="mySVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
                <defs>
                  <circle id="armMaskPath" cx={100} cy={100} r={100} />
                </defs>
                <clipPath id="armMask">
                  <use xlinkHref="#armMaskPath" overflow="visible" />
                </clipPath>
                <circle cx={100} cy={100} r={100} fill="#a9ddf3" />
                <g className="body">
                  <path fill="#ffcb99" d="M193.3,135.9c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1 c-10.6,0-20,5.1-25.8,13l0,78h187L193.3,135.9z" />
                  <path fill="none" stroke="#3A5E77" strokeWidth="2.5" strokeLinecap="round" stroke-linejoinn="round" d="M193.3,135.9 c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1c-10.6,0-20,5.1-25.8,13" />
                  <path fill="#DDF1FA" d="M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z" />
                </g>
                <path className="face" fill="#ffcb99" d="M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46" />
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="shirt-collar" transform="translate(6.000000, 22.000000)" fillRule="nonzero">
                    <path d="M187.3,113.9 C181.5,105.5 171.8,100 160.8,100 L145,100 L145,50 C145,22.4 122.6,0 95,0 C67.4,0 45,22.4 45,50 L45,100 L26.1,100 C15.5,100 6.1,105.1 0.3,113" id="Path" stroke="#3A5E77" strokeWidth="2.5" fill="#FFCB99" strokeLinecap="round" />
                    <path d="M37,161 L70.440215,137.422975 L44.7,101 L25.8,101 C15.2,101 5.8,106.1 0,114 C3.70425746,122.954433 8.7232584,131.454433 15.0570028,139.5 C21.3907473,147.545567 28.7050796,154.712234 37,161 Z" id="Path" strokeOpacity={0} stroke="#3A5E77" strokeWidth="2.5" fill="#6ac6f2" strokeLinecap="round" />
                    <path d="M154,161 L187.440215,137.422975 L161.7,101 L142.8,101 C132.2,101 122.8,106.1 117,114 C120.704257,122.954433 125.723258,131.454433 132.057003,139.5 C138.390747,147.545567 145.70508,154.712234 154,161 Z" id="Path" strokeOpacity={0} stroke="#3A5E77" strokeWidth="2.5" fill="#6ac6f2" strokeLinecap="round" transform="translate(152.220108, 131.000000) scale(-1, 1) translate(-152.220108, -131.000000) " />
                    <path d="M94,131 C69.8724584,131 48.6950092,142.965596 37,160.860092 C53.4362292,171.639908 73.0332717,178 94,178 C114.966728,178 134.563771,171.747706 151,160.860092 C139.304991,142.965596 118.127542,131 94,131 Z" id="Path" fill="#6ac6f2" />
                    <path d="M143.479791,101 L94,131 L143.479791,101 Z" id="Path-2" stroke="#000000" strokeWidth={2} fill="#000000" strokeLinejoin="round" />
                    <path d="M156,134 C157.678041,137.587889 158.933339,141.087889 159.765895,144.5 C160.598451,147.912111 161.051154,151.412111 161.124004,155" id="Path-2" stroke="#000000" fill="#000000" />
                    <path d="M29,134 C30.678041,137.587889 31.9333394,141.087889 32.7658951,144.5 C33.5984508,147.912111 34.0511538,151.412111 34.1240042,155" id="Path-2" stroke="#000000" fill="#000000" transform="translate(31.562002, 144.500000) scale(-1, 1) translate(-31.562002, -144.500000) " />
                    <path d="M94.5,131 L94.5,161 L94.5,131 Z" id="Path-2" stroke="#000000" fill="#000000" transform="translate(94.500000, 146.000000) scale(-1, 1) translate(-94.500000, -146.000000) " />
                    <path d="M94.5,101.438107 L46.5,130.438107 L94.5,101.438107 Z" id="Path-2" stroke="#000000" strokeWidth={2} fill="#000000" strokeLinejoin="round" transform="translate(70.500000, 115.938107) scale(-1, 1) translate(-70.500000, -115.938107) " />
                    <path d="M46.3804299,101.356724 C57.3641129,125.50804 65.9401802,138.214128 72.1086318,139.47499 C78.2770835,140.735851 85.7408729,137.723557 94.5,130.438107" id="Path-3" stroke="#000000" fill="#FFFFFF" strokeLinejoin="round" />
                    <path d="M94.999998,101 C106.223828,125.389132 114.919969,138.214128 121.08842,139.47499 C127.256872,140.735851 134.720661,137.723557 143.479789,130.438107" id="Path-3" stroke="#000000" fill="#FFFFFF" transform="translate(119.239894, 120.377009) scale(-1, 1) translate(-119.239894, -120.377009) " />
                  </g>
                </g>
                <path className="hair" style={{display: 'none'}} fill="#FFFFFF" stroke="#3A5E77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474" />
                <g className="eyebrow">
                  <path fill="#79460a" d="M138.142,55.064c-4.93,1.259-9.874,2.118-14.787,2.599c-0.336,3.341-0.776,6.689-1.322,10.037 c-4.569-1.465-8.909-3.222-12.996-5.226c-0.98,3.075-2.07,6.137-3.267,9.179c-5.514-3.067-10.559-6.545-15.097-10.329 c-1.806,2.889-3.745,5.73-5.816,8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475V55.064z" />
                  <path fill="#79460a" stroke="#79460a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599" />
                </g>
                <g className="earL" style={{display: 'none'}}>
                  <g className="outerEar" fill="#ddf1fa" stroke="#3a5e77" strokeWidth="2.5">
                    <circle cx={47} cy={83} r="11.5" />
                    <path d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <g className="earHair">
                    <rect x={51} y={64} fill="#FFFFFF" width={15} height={35} />
                    <path d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9" fill="#fff" stroke="#3a5e77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
                <g className="earR" style={{display: 'none'}}>
                  <g className="outerEar" fill="#ddf1fa" stroke="#3a5e77" strokeWidth="2.5">
                    <circle cx={155} cy={83} r="11.5" />
                    <path d="M155.7 78.9c2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <g className="earHair">
                    <rect x={131} y={64} fill="#FFFFFF" width={20} height={35} />
                    <path d="M148.6 62.8c4.9 4.6 8.4 9.4 10.6 14.2-3.4-.1-6.8-.1-10.1.1 4 3.7 6.8 7.6 8.2 11.6-2.1 0-4.2 0-6.3.2 2.6 4.1 3.8 8.3 3.7 12.5-1.2-.7-3.4-1.4-5.2-1.9" fill="#fff" stroke="#3a5e77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
                <g className="eyeL">
                  <circle cx="85.5" cy="78.5" r="3.5" fill="#3a5e77" />
                  <circle cx={84} cy={76} r={1} fill="#fff" />
                </g>
                <g className="eyeR">
                  <circle cx="114.5" cy="78.5" r="3.5" fill="#3a5e77" />
                  <circle cx={113} cy={76} r={1} fill="#fff" />
                </g>
                <g className="mouth">
                  <path className="mouthBG" fill="#617E92" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z" />
                  <path style={{display: 'none'}} className="mouthSmallBG" fill="#617E92" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z" />
                  <path style={{display: 'none'}} className="mouthMediumBG" d="M95,104.2c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H95z" />
                  <path style={{display: 'none'}} className="mouthLargeBG" d="M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z" fill="#617e92" stroke="#3a5e77" strokeLinejoin="round" strokeWidth="2.5" />
                  <defs>
                    <path id="mouthMaskPath" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z" />
                  </defs>
                  <clipPath id="mouthMask">
                    <use xlinkHref="#mouthMaskPath" overflow="visible" />
                  </clipPath>
                  <g clipPath="url(#mouthMask)">
                    <g className="tongue">
                      <circle cx={100} cy={107} r={8} fill="#cc4a6c" />
                      <ellipse className="tongueHighlight" cx={100} cy="100.5" rx={3} ry="1.5" opacity=".1" fill="#fff" />
                    </g>
                  </g>
                  <path clipPath="url(#mouthMask)" className="tooth" style={{fill: '#FFFFFF'}} d="M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z" />
                  <path className="mouthOutline" fill="none" stroke="#3A5E77" strokeWidth="2.5" strokeLinejoin="round" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z" />
                </g>
                <path className="nose" style={{display: 'none'}} d="M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z" fill="#3a5e77" />
                <path className="chin" style={{display: 'none'}} d="M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1" fill="none" stroke="#3a5e77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="inputGroup inputGroup1">
            <label htmlFor="email1">Email</label>
            <input type="text" id="email" className="email" maxLength={256} />
            <p className="helper helper1">email@domain.com</p>
            <span className="indicator" />
          </div>
          <div className="inputGroup inputGroup2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="password" />
          </div>
          <div className="inputGroup inputGroup3">
            <button id="login">Log in</button>
          </div>	
        </form>
      </div>
  );
}

export default App;
