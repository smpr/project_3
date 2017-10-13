import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class UserInfo extends Component {
    state = {
        users: []
    }
    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>Log-In</h1>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => {

                    return (<div key={user._id}>
                        <div>
                            Name: {user.firstName} {user.lastName}
                        </div>
                        <div>
                            Email: {user.email}
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}

export default UserInfo