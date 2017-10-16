import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class ArticleList extends Component {
    state = {
        users: {}
      }
    
      componentWillMount () {
        this.getThisArticle()
      }
    
    
      getThisArticle = async () => {
        try {
          const res = await axios.get(`/api/users/${this.props.match.params.id}`)
          console.log(res.data.list)
          const newsListTest =await axios.get("`api/user/${this.props.match.params.id}/list/${this.props.match.params.newsid}`")
          const newsList = res.data.list.find(`api/user/${this.props.match.params.id}/newslist/${this.props.match.params.newsid}`)
          console.log(newsListTest)
          this.setState({users: res.data})
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