import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import SingleArticle from './components/News/SingleArticle'

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
         const res = await axios.get(`/api/users/${userId}/list/${newsId}`)
         console.log(res.data)
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
          return (<div><Link key={article._id} to={`#`}>{article.titlelink} </Link></div>)
        })}
           </div>
        );
    }
}

export default ArticleList;