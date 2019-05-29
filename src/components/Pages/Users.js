import React, { Component } from 'react';

const getUsers = () => {
  return fetch('http://3.19.120.4/mongo/users/')
    .then(function(response) { return response.json(); })
    .then(function(response) { return (console.log('Get', 'fetch', response), response) })
}

const User = ({user}) => {
  console.log({user})
  return(
  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <br/>
    <br/>
    {
      Object.values(user).map(item => <span style={{marginLeft: '15px'}}>{item}</span>)
    }
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
        Users
        <br/>
        <br/>
        {
          userInfo.length > 0 ? userInfo.map(user =>
            <User user={user}/>
          )
          : message ? <ErrorMessage message={message}/>
          : ''
        }
      </span>
    )};
}
