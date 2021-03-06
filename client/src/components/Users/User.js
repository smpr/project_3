import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class User extends Component {
  // This sets the initial state for the component. 
  state = {
    users: []
  }

  // Call the getAllUsers method as soon as the component is created
  componentWillMount () {
    this.getAllUsers()
  }

  // Use axios to get all users
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
    
        {/* This maps through however many users are on the state and renders a single Link */}
        {this.state.users.map(user => {
          // Here we use the info for the specific instance of the loop to show username 
          // and create a link
          return (<Link key={user._id} to={`/Users/${user._id}`}>{user.firstName}</Link>)
        })}

        
      </div>
    )
  }
}

export default User
