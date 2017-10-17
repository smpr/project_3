import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
class UserInfo extends Component {
  state = {
    user: {},
    redirectToHome: false
  }

  componentWillMount() {
    this.getThisUser()
  }


  getThisUser = async () => {
    try {
      const res = await axios.get(`/api/users/${this.props.match.params.id}`)
      console.log(res.data)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  deleteUser = async () => {
    //pull the user id from params
    const userid = this.props.match.params.id
    //check to see if i actually have the right id....
    console.log(userid)
    // delete the id from the api
    const res = await axios.delete(`/api/users/${userid}`)
 
    //redirect back to the user page after the id has been deleted
    this.setState({redirectToHome :true})
  }
  // updateUser = async (userId) => {
  //   const { userId } = this.props.match.params
  //   const clonedUser = { ...this.state.user }
  //   //const idea = clonedUser.ideas.find(i => i._id === ideaId)
  //   const res = await axios.patch(`/api/users/${this.props.match.params.id}`, {
  //    // idea: idea
  //   })
  //   this.setState({ users: res.data })
  // }
  render() {
    if(this.state.redirectToHome) { console.log("redirected")
      return <Redirect to={`/users`} />
    }
    return (
      <div>
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
          <button>Edit</button>
        </form>
        <button onClick={this.deleteUser}>Delete User</button>
      </div>
    );
  }
}

export default UserInfo;