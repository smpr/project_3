import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import User from '../Users/User'


const NewsList = (props) => {
    const userList = props.users.map((user, index) => {
        return <User
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            key={index}
        />

    })
    return (
        <div>
            <div>
                <Link to={`/user/${props._id}/NewsList`}>{userList}</Link>
                <Link to="/user/create">Create User</Link>
            </div>
            <div>
                Provider News
        </div>
        </div>
    )
}

export default NewsList