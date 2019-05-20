import React, { Fragment, useState } from 'react';
const Input1 = () => {
  const [ fieldText, setFieldText ] = useState("")
  function handleChange(event) {
    let { name, value } = event.currentTarget;
    setFieldText(value.trim())
  }
  return (
  <div className={"inputGroup inputGroup"+'1'}>
    <label htmlFor={"email"+"1"}>Email</label>
    { fieldText === '' ?
    <input onChange={handleChange} value="&nbsp;" type="text" name="email" id="email" className="email" maxLength={256} />
    : <input onChange={handleChange} value={ fieldText } type="text" id="email" className="email" maxLength={256} />
    }
    <p className={"helper helper"+"1"}>email@domain.com</p>
    <span className="indicator" />
  </div>
  )
}

function Fields() {
  return (
    <Fragment>
      <Input1/>
      <div className="inputGroup inputGroup2">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="password" />
      </div>
      <div className="inputGroup inputGroup3">
        <button id="login">Log in</button>
      </div>	
    </Fragment>
  );
}

export default Fields;