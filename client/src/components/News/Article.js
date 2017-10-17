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
margin: 0px;
background-color: rgba(255, 243, 149, .35)

`
const AuthorBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 0px;
background-color: rgba(255, 243, 149, .35)

`
const DateBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 0px;
background-color: rgba(255, 243, 149, .35)

`
const BodyBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 275px;
height: 275px;
margin: 0px;
background-color: rgba(255, 243, 149, .35)

`
class Article extends Component {
    // This sets the initial state for the component. 
    state = {
     news:{}
    }

  componentWillMount () {
    this.getAllArticles()
  }


  getAllArticles = async () => {
    try {
      const userId = this.props.match.params.id
      const newsId = this.props.match.params.newsid
      const articleId = this.props.match.params.articleId
      console.log(articleId)
      const res = await axios.get(`/api/users/${userId}/list/${newsId}/article/${articleId}`)
      console.log(res.data)
      this.setState({news: res.data})
    } catch (err) {
      console.log(err)
    }
  }
    render(){
    return (
        <div>
            <HeaderBlock>
                <SourceBlock>
                {this.state.news.sourcelink}
                </SourceBlock>
               
                <AuthorBlock>
                {this.state.news.author}
                </AuthorBlock>
                <DateBlock>
                {this.state.news.date}
                </DateBlock>
            </HeaderBlock>
            <BodyBlock>
               {this.state.news.titlelink} <br />
               {this.state.news.plot}
            </BodyBlock>
        </div>
    );
};
}
export default Article;