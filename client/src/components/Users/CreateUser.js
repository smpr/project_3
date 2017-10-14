import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class CreateUser extends Component {
  state = {
    user: [],
    redirectToUser: false,
    userId: ''
  }


  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.user}
    updateUser[attribute] = event.target.value
    this.setState({user: updateUser})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.post('/api/users', {
      'user': this.state.user
    })
    this.setState({redirectToUser: true, userId: res.data._id})
  }

  render () {
    if (this.state.redirectToUser) {
      return <Redirect to={`/user/${this.state.userId}`} />
    }

    return (
      <div>
        <h1>Sign-Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange} name="firstName"
              type="text" value={this.state.user.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange}
              value={this.state.user.lastName}
              name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange}
              value={this.state.user.email}
              name="Email" type="text" />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default CreateUser
