import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

class NewsList extends Component {
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
                Article List
            </div>
        )
    }
}

export default NewsList