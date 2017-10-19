import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { browserHistory } from 'react-router'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
background-color: rgba(58, 69, 215, .45)

`
const NavBlock = styled.div`
border: 0;
border-radius: 0px;
height: 20px;
margin: 0px auto;
text-align:center;
color: white;
flex: 1;
Link:{
    text-decoration: none;
}
`
class Nav extends Component {
    render() {
        return (
            <BodyWrapper>
                <NavBlock >
                <Link to='/comingsoon'>Back</Link>
                </NavBlock>
                <NavBlock>
                <Link to='/'>Home</Link>
                </NavBlock>
                <NavBlock>
                <Link to='/comingsoon'>Articles</Link>
                </NavBlock>
                <NavBlock>
                <Link to='/comingsoon'>Whats New</Link>
                </NavBlock>
            </BodyWrapper>
        );
    }
}

export default Nav;