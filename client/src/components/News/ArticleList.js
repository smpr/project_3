import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class ArticleList extends Component {
    state = {
        list: {}
      }
    
      componentWillMount () {
        this.getThisArticleList()
      }
    
    
      getThisArticleList = async () => {
        try {
         //get the data
         const userId = this.props.match.params.id
         const newsId = this.props.match.params.newsid
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
                Article List
            </div>
        );
    }
}

export default ArticleList;