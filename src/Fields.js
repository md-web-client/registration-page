import React, { Fragment, useState } from 'react';

const Input = ({index, name, placeholder}) => {
  const [ fieldText, setFieldText ] = useState("")
  function handleChange(event) {
    let { value } = event.currentTarget;
    setFieldText(value.trim())
  }
  return (
  <div className={"inputGroup inputGroup"+index}>
    <label style={{textTransform: 'capitalize'}} htmlFor={name+index}>{name}</label>
    {
      fieldText === '' && placeholder ?
      <input onChange={handleChange} value="&nbsp;" type={name} name={name} id={name} className={name} maxLength={256} />
      : <input onChange={handleChange} value={ fieldText } type={placeholder ? "text" : name } name={name} id={name} className={name} maxLength={256} />
    }
    { placeholder ?
        <p className={"helper helper"+index}>{placeholder}</p>
        : undefined
    }
  </div>
  )
}
// index, email, Email, email@domain.com

function Fields() {
  return (
    <Fragment>
      <Input index={1} name={"email"} placeholder={"email@domain.com"}/>
      <Input index={2} name={"password"} placholder={""}/>
      <div className="inputGroup inputGroup3">
        <button id="login">Log in</button>
      </div>
    </Fragment>
  );
}

export default Fields;
