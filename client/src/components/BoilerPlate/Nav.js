import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const NavBlock = styled.div`
border: 0;
border-radius: 0px;
width: 275px;
height: 20px;
margin: 0px auto;
background-color: darkblue;
text-align:center;
color: white;
flex: 1;
Link:{
    text-decoration: none;
    color: white;
}
`
class Nav extends Component {
    render() {
        return (
            <BodyWrapper>
                <NavBlock >
                <Link to='#'>Back</Link>
                </NavBlock>
                <NavBlock>
                <Link to='/'>Home</Link>
                </NavBlock>
                <NavBlock>
                <Link to='/'>Articles</Link>
                </NavBlock>
                <NavBlock>
                <Link to='/'>Whats New</Link>
                </NavBlock>
            </BodyWrapper>
        );
    }
}

export default Nav;