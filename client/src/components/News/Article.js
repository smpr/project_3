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
class Article extends Component {
    // This sets the initial state for the component. 
    state = {
      users: {
        list:{
            news:{}
        }
      }
    }

  componentWillMount () {
    this.getAllArticles()
  }


  getAllArticles = async () => {
    try {
      const res = await axios.get(`/api/users/${this.props.match.params.id}`)
      console.log(res.data)
      this.setState({users: res.data})
    } catch (err) {
      console.log(err)
    }
  }
    render(){
    return (
        <div>
            <HeaderBlock>
                <SourceBlock>
                
                   
                </SourceBlock>
                {/* {this.state.users.list.article.author} */}
                <AuthorBlock>
                </AuthorBlock>
                <DateBlock>
               
                </DateBlock>
            </HeaderBlock>
            <BodyBlock>
                <br />
               
            </BodyBlock>
        </div>
    );
};
}
export default Article;