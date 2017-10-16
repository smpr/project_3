import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
class UserInfo extends Component {
    state = {
        users: {}
      }
    
      componentWillMount () {
        this.getThisUser()
      }
    
    
      getThisUser = async () => {
        try {
          const res = await axios.get(`/api/users/${this.props.match.params.id}`)
          console.log(res.data)
          this.setState({users: res.data})
        } catch (err) {
          console.log(err)
        }
      }
    render() {
        return (
            <div>
                <div>First Name: {this.state.users.firstName}</div>
                <div>Last Name: {this.state.users.lastName}</div>
                <div>Email: {this.state.users.email}</div>
            </div>
        );
    }
}

export default UserInfo;