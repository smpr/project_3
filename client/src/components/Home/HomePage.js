import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreateUser from '../Users/CreateUser'

class HomePage extends Component {
  // This sets the initial state for the component. 
  state = {
    users: []
  }

 
  componentWillMount () {
    this.getAllUsers()
  }


  getAllUsers = async () => {
    try {
      const res = await axios.get('/api/users')
      this.setState({users: res.data})
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div>
        <h1></h1>
        <h3></h3>
        {this.state.users.map(user => {
          return (<div><Link key={user._id} to={`/user/${user._id}/info`}>{user.firstName} {user.lastName}</Link></div>)
        })}
        <Link to={'/user/create'}>Create</Link>
      </div>
    )
  }
}

export default HomePage