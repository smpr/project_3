import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreateUser from '../Users/CreateUser'
import styled from 'styled-components'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const UserList = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)
`
class HomePage extends Component {
  // This sets the initial state for the component. 
  state = {
    users: [{
      firstName: '',
      lastName: ''
    }]
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
      <BodyWrapper>
        <h1></h1>
        <h3><Link to={'/user/create'}>Create</Link></h3>
        <UserList>User List: <br/>{this.state.users.map(user => {
          return (<Link key={user._id} to={`/user/${user._id}/newslist`}>{user.firstName} {user.lastName}<br /></Link>)
        })}
        </UserList>
        
      </BodyWrapper>
    )
  }
}

export default HomePage