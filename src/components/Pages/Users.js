import React, { Component } from 'react';
import { getUsers } from '../../helpers/networkRequest.js'
import { navigate } from '../../helpers/navigation.js'

const User = ({user, index}) => {
  console.log({user}, Object.values(user), Object.keys(user))
  return(
  <div >
    <br/>
    { index === 0 ?

    <div style={{display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'repeat(auto-fit, 214px)' }}>

      {
      Object.keys(user).map(
        (item, index) => (index > 0)
        ? <div style={{paddingLeft: '20px'}}>{item}</div>
        : undefined
      )
      }

    </div>
    : undefined
    }
    <br/>
    <div style={{display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'repeat(auto-fit, 214px)' }}>
    {
      Object.values(user).map(
        (item, index) => (index > 0)
        ? <span style={{marginLeft: '20px'}}>{item}</span>
        : undefined
      )
    }
    </div>

  </div>
)}
const ErrorMessage = ({message}) => (
  <div>
    {message}
  </div>
)

export default class Users extends Component {
  constructor(){
    super()
    this.state = {userInfo:[], message: ''}
  }
  componentWillMount(){
    getUsers()
    .then(result => this.setState({userInfo: result}))
    .catch(error => this.setState({ message: 'check internet or api connection, thanks' }))
  }
  render(){
    const { userInfo, message } = this.state
    console.log({userInfo, message})
    return (
      <span>
        <section style={{paddingLeft: '20px'}}>
          <span>Welcome to Users page, </span>
          <div style={{color: '#007bff' }}role='button' onClick={() => navigate(this.props.history, '/')} >click here to return to registration page</div>
        </section>
        {
          userInfo.length > 0 ? userInfo.map( (user, index) =>
            <User index={index} user={user}/>
          )
          : message ? <ErrorMessage message={message}/>
          : ''
        }
      </span>
    )};
}
