import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const NewsBlock = styled.div`
border: 2px rgba(138, 134, 132, .75);
box-shadow: 10px 10px 5px #888888;
border-radius: 10px;
width: 400px;
height: 275px;
margin: 100px auto;
padding: 10px;
background-color: rgba(58, 69, 215, .45);
text-align: center;
`
const ImageBlock = styled.div`

img{
    max-width: 75px
}
width: 50px;
height: auto;
margin: 0px;


`
class ArticleList extends Component {
  state = {
    list: {
      news: []
    }
  }

  componentWillMount() {
    this.getThisArticleList()
  }


  getThisArticleList = async () => {
    try {
      //get the data
      const userId = this.props.match.params.id
      const newsId = this.props.match.params.newsid
      const articleId = this.props.match.params.articleId
      console.log(articleId)
      //this grabs all of the articles in this list
      const res = await axios.get(`/api/users/${userId}/list/${newsId}`)

      //set state with data
      this.setState({ list: res.data })
      //in render refrence data from state
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <BodyWrapper>
        <NewsBlock>Articles:<br />
          <ImageBlock>
            {this.state.list.news.map(article => {
              const userId = this.props.match.params.id
              const newsId = this.props.match.params.newsid
              const articleId = this.props.match.params.articleId
              return (<Link key={article._id} to={`/user/${userId}/newslist/${newsId}/articlelist/${article._id}/article`}><img src={article.imageSourceArticle} alt={article.titlelink} title={article.titlelink} /> </Link>)
            })}</ImageBlock>
        </NewsBlock>
      </BodyWrapper>
    );
  }
}

export default ArticleList;