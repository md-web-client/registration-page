import React, { Fragment, Component } from 'react';
import {
  validation,
  failureMessage
} from './regexValidation'
import { print } from '../../helpers.js'


export const defaultFields = {
  firstName: '',
  lastName: '',
  npiNumber: '',
  telephoneNumber: '',
  businessAddress: '',
  email: '',
  password: ''
};

export const errorIndicators = {
  firstName: true,
  lastName: true,
  npiNumber: true,
  telephoneNumber: true,
  businessAddress: true,
  email: true,
  password: true
};

const Input = ({index, name, placeholder, helper:{fields, working, failureMessage}, handleChange}) => {
  const capName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={'inputGroup inputGroup'+index}>
      { name !== 'password' ? (
      <label id={'login'+ capName +'Label'} htmlFor={'login'+ capName}>
        {capName}
      </label>
      ) : (
        <label style={{display: 'flex', justifyContent: 'space-between'}}htmlFor='loginPassword' id='loginPasswordLabel'>Password
          <span id='showPasswordToggle' htmlFor='showPasswordCheck'>Show Pass
            <input id='showPasswordCheck' type='checkbox' />
          </span>
        </label>
        )
      }
      {
        placeholder && fields[name] === '' ?
        <input onChange={handleChange} value='&nbsp;' type={name} name={name} id={'login'+capName} className={name} maxLength={256} />
        : <input onChange={handleChange} value={ fields[name] } type={placeholder ? 'text' : name } name={name} id={'login'+capName} className={name} maxLength={256} />
      }
      { placeholder ?
          <p className={'helper helper'+index}>{placeholder}</p>
          : undefined
      }
      { working[name] == false &&
        <p style={{marginLeft: '10px', color: 'crimson'}}>{failureMessage[name]}</p>
      }
    </div>
  );
}
// index, email, Email, email@domain.com

class Fields extends Component {
  constructor(props){
    super(props)
    this.state = {
      fields: defaultFields,
      working: errorIndicators,
      validationFunctions: validation,
      validationFunctions: validation,
      failureMessage: failureMessage
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    let { name, value } = event.currentTarget;
    let { fields } = this.state;
    fields[name] = value.trim();
    this.setState({fields})
  };
  
  validateAndSend(){
    const { fields, validationFunctions, working } = this.state
    const objectKeys = Object.keys(fields);
    
    objectKeys.map( (key) => {
        const value = fields[key];
        const func = validationFunctions[key];
        const passFail = func(value)
        working[key] = passFail
      }
    )
    this.setState({ working })
  }

  render(){
    const { fields, working, failureMessage} = this.state;
    const helper = { fields, working, failureMessage}

    // print(working)
    return (
      <Fragment>
        <Input name={'email'} index={1} placeholder={'email@domain.com'} helper={helper} handleChange={this.handleChange}/>
        <Input name={'password'} index={2} placholder={''} helper={helper} handleChange={this.handleChange}/>
        <Input name={'firstName'} index={1} placeholder={''} helper={helper} handleChange={this.handleChange}/>
        <Input name={'lastName'} index={1} placeholder={''} helper={helper} handleChange={this.handleChange}/>
        <Input name={'npiNumber'} index={1} placeholder={''} helper={helper} handleChange={this.handleChange}/>
        <Input name={'telephoneNumber'} index={1} placeholder={''} helper={helper} handleChange={this.handleChange}/>
        <Input name={'businessAddress'} index={1} placeholder={''} helper={helper} working={working} handleChange={this.handleChange}/>
        <div className='inputGroup inputGroup3'>
          <button onClick={ () => this.validateAndSend() } style={{ height: '100px' }} id='login' >Log in</button>
        </div>
      </Fragment>
    );
  };
}

export default Fields;
