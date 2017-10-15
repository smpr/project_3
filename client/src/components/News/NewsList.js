import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Article from '../News/Article'

const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const TopBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const BottomBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 10px auto;
background-color: rgba(255, 243, 149, .35)

`
const NewsList = (props) => {
    // const newsList = props.users.map((news, index) => {
    //     return <Article
    //         sourcelink={news.sourcelink}
    //         article={news.article}
    //         author={news.author}
    //         date={news.date}
    //         title={news.titlelink}
    //         plot={news.plot}
    //         picture={news.picture}
    //         key={index}
    //     />

    // })
    return (
        <div>
            <BodyWrapper>
                <TopBlock>
                    <Link to={`/user/${props._id}/Info`}>User info</Link>
                    {/* {newsList} */}
                </TopBlock>
            </BodyWrapper>
            <BodyWrapper>
                <BottomBlock>
                    Body
                </BottomBlock>
            </BodyWrapper>
        </div>
    )
}

export default NewsList