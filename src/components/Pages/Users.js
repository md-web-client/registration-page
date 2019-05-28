import React, { Component } from 'react';

const getUsers = () => {
  return fetch('http://localhost:6789/postgres/users')
    .then(function(response) { return response.json(); })
    .then(function(response) { return (console.log('Get', 'fetch', response), response) })
    .catch(function (error)   { console.log({error}) })
}

const User = ({user}) => (
  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <br/>
    {
      Object.values(user).map(item => <span style={{marginLeft: '15px'}}>{item}</span>)
    }
  </div>
)

export default class Users extends Component {
  constructor(){
    super()
    this.state = {userInfo:[]}
  }
  componentWillMount(){
    getUsers()
    .then(result => this.setState({userInfo: result}))
  }
  render(){
    const { userInfo } = this.state
    console.log({userInfo})
    return (
      <div>
        Users
        {
          userInfo && userInfo.map(user =>
            <User user={user}/>
          )
        }
      </div>
    )};
}
