import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class CreateNewsList extends Component {
  state = {
    users: [],
    redirectToNewsList: false,
    userId: ''
  }


  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = { ...this.state.users }
    updateUser[attribute] = event.target.value
    this.setState({ users: updateUser })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.post('/api/users', {
      'user': this.state.users
    })
    this.setState({ redirectToNewsList: true, userId: res.data._id })
  }

  render() {
    if (this.state.redirectToNewsList) {
      return <Redirect to={`/user/${this.state.userId}/newslist`} />
    }

    return (
      <div>
        <h1>Add News Group</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="genre">News Type</label>
            <input
              onChange={this.handleChange} name="genre"
              type="text" value={this.state.users.genre}
            />
          </div>
          <div>
            <label htmlFor="name">News Provider</label>
            <input onChange={this.handleChange}
              value={this.state.users.name}
              name="name" type="text" />
          </div>

          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateNewsList
