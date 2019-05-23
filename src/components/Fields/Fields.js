import React, { Fragment, Component } from 'react';

const Input = ({index, name, placeholder, fields, handleChange}) => {
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
    </div>
  );
}
// index, email, Email, email@domain.com

class Fields extends Component {
  constructor(props){
    super(props)
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        npiNumber: '',
        telephoneNumber: '',
        businessAddress: '',
        email: '',
        password: ''
      },
      validationFunctions: {
        firstName: '',
        lastName: '',
        npiNumber: '',
        telephoneNumber: '',
        businessAddress: '',
        email: '',
        password: ''
      },
      validationErrorMessages: {
        firstName: '',
        lastName: '',
        npiNumber: '',
        telephoneNumber: '',
        businessAddress: '',
        email: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    let { name, value } = event.currentTarget;
    let { fields } = this.state;
    fields[name] = value.trim();
    this.setState({fields})
  };

  render(){
    const { fields } = this.state;

    return (
      <Fragment>
        <Input index={1} fields={fields} handleChange={this.handleChange} name={'email'} placeholder={'email@domain.com'} />
        <Input index={2} fields={fields} handleChange={this.handleChange} name={'password'} placholder={''} />
        <div className='inputGroup inputGroup3'>
          <button style={{ height: '100px' }} id='login' >Log in</button>
        </div>
      </Fragment>
    );
  };
}

export default Fields;
