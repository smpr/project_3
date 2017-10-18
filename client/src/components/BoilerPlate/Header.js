import React, { Component } from 'react';
import styled from 'styled-components'
import Img from './bgimg.jpg'
const BodyWrapper = styled.div`
display: flex;
flex-direction: column;


`
const UnderBodyWrapper = styled.div`
display: flex;
flex-direction: row;


`
const HeaderBlock = styled.div`
border: 0;
border-radius: 0px;
width: 100%;
height: 100px;
margin: 0px auto;
background-color: darkblue;
text-align:center;
color: white;
flex: 1;
background-image: url('https://i.imgur.com/bIUcmrM.jpg');
}
`
const UnderHeaderBlock = styled.div`
border: 0;
border-radius: 0px;
height: 50px;
margin: 0px auto;
background-color: darkblue;
text-align:center;
color: white;
flex: 1;

}
`
class Header extends Component {
    render() {
        return (
            <BodyWrapper>
                
                    <HeaderBlock>
                        
                    </HeaderBlock>
               
            </BodyWrapper>
        );
    }
}

export default Header;