import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const HeaderBlock = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const SourceBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const AuthorBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const DateBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const BodyBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const Article = (props) => {
    return (
        <div>
            <HeaderBlock>
                <SourceBlock>
                    {props.sourcelink}
                </SourceBlock>
                <AuthorBlock>
                {props.author}
                </AuthorBlock>
                <DateBlock>
                {props.date}
                </DateBlock>
            </HeaderBlock>
            <BodyBlock>
                {props.titlelink}<br />
                {props.plot}
            </BodyBlock>
        </div>
    );
};

export default Article;