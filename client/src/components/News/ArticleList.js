import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class ArticleList extends Component {
    state = {
        list: {
            news: []
        }
      }
    
      componentWillMount () {
        this.getThisArticleList()
      }
    
    
      getThisArticleList = async () => {
        try {
         //get the data
         const userId = this.props.match.params.id
         const newsId = this.props.match.params.newsid
         
         //this grabs all of the articles in this list
         console.log('test')
         const res = await axios.get(`/api/users/${userId}/list/${newsId}`)
  
         //set state with data
         this.setState({list: res.data})
         //in render refrence data from state
        } catch (err) {
          console.log(err)
        }
      }
    render() {
        return (
           <div>
                {this.state.list.news.map(article => {
                    const userId = this.props.match.params.id
                    const newsId = this.props.match.params.newsid
                    const articleId= this.props.match.params.articleId
                    console.log(articleId)
          return (<div><Link  key={article._id} to={`/user/${userId}/newslist/${newsId}/articlelist/${articleId}/article`}>{article.titlelink} </Link></div>)
        })}
           </div>
        );
    }
}

export default ArticleList;