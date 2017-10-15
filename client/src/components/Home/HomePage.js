import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import User from '../Users/User'

const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const InfoBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const HomePage = (props, index) => {
  const userList = () => {
    return (<User
      firstName={props.firstName}
      lastName={props.lastName}
      email={props.email}
      key={index}
    />)
  }


return (
  <BodyWrapper>
    <InfoBlock>
      <Link to={`/user/${props._id}/NewsList`}>{userList}</Link>
      <Link to="/user/create">Create User</Link>
    </InfoBlock>
    <InfoBlock>
      Provider News
      </InfoBlock>
  </BodyWrapper>
)
}

export default HomePage