import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
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
const HeaderBlock = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
border: 2px rgba(138, 134, 132, .75);
width: 100%;
height: 25px;
margin-top: 10px;
padding: 10px;
background-color: rgba(58, 69, 215, .45);
text-align: center;
`
const InfoBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 34%;
height: 275px;
margin: 0px;
align-content:center;
`
const BodyBlock = styled.div`
border: 2px rgba(138, 134, 132, .5);
border-radius: 2px;
width: 100%;
height: 275px;
margin: 0px;
background-color: rgba(58, 69, 215, .45);
text-align:center;
padding: 25px;


`
class Article extends Component {
    // This sets the initial state for the component. 
    state = {
     news:{
       sourcelink: '',
       author: '',
       date: '',
       titlelink: '',
       plot:'',
     }
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
                <InfoBlock>
                <b>Source:</b> {this.state.news.sourcelink}
                </InfoBlock>
               
                <InfoBlock>
                <b>Author:</b>{this.state.news.author}
                </InfoBlock>
                <InfoBlock>
                <b>Date:</b>{this.state.news.date}
                </InfoBlock>
            </HeaderBlock>
            <BodyBlock>
               <b>Title:</b>{this.state.news.titlelink} <br />
               {this.state.news.plot}
            </BodyBlock>
        </div>
    );
};
}
export default Article;