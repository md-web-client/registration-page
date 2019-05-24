import React, { Fragment, Component } from 'react';
import {
  validation,
  failureMessage
} from './regexValidation'


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

const Input = ({index, name, placeholder, fields, working, handleChange}) => {
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
        <p style={{marginLeft: '10px'}}>Error: whoa that is a lot of data</p>
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
        console.log({key, func, value})
        const passFail = func(value)
        console.log({passFail, working})
        working[key] = passFail
      }
    )
    this.setState({ working })
  }

  render(){
    const print = (object) => {
      const { email, firstName, lastName, telephoneNumber, password, businessAddress, npiNumber } = object

      console.log(
        'length: ',  "\n\n",
        'email:', email, "\n\n", 'firstName:', firstName, "\n\n", 'lastName:', lastName,"\n\n",
        'telephoneNumber:', telephoneNumber, "\n\n", 'password:', password, "\n\n",
        'businessAddress:', businessAddress, "\n\n", 'npiNumber:', npiNumber
      )
    };
    const { fields, working } = this.state;
    print(working)
    return (
      <Fragment>
        <Input name={'email'} index={1} placeholder={'email@domain.com'} fields={fields} working={working} handleChange={this.handleChange}/>
        <Input name={'password'} index={2} placholder={''} fields={fields} working={working} handleChange={this.handleChange}/>
        <div className='inputGroup inputGroup3'>
          <button onClick={ () => this.validateAndSend() } style={{ height: '100px' }} id='login' >Log in</button>
        </div>
      </Fragment>
    );
  };
}

export default Fields;
