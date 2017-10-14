import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Article from '../News/Article'


const NewsList = (props) => {
    const newsList = props.users.map((news, index) => {
        return <Article
            sourcelink={news.sourcelink}
            article={news.article}
            author={news.author}
            date={news.date}
            title={news.titlelink}
            plot={news.plot}
            picture={news.picture}
            key={index}
        />

    })
    return (
        <div>
            <div>
                {newsList}
            </div>
           
        </div>
    )
}

export default NewsList