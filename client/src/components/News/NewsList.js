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


class NewsList extends Component {
  // This sets the initial state for the component. 
  state = {
    users: {
        list:[]
    }
  }

  componentWillMount () {
    this.getAllNews()
  }


  getAllNews = async () => {
    try {
      const res = await axios.get(`/api/users/${this.props.match.params.id}`)
      console.log(res.data)
      this.setState({users: res.data})
    } catch (err) {
      console.log(err)
    }
  }


    render() {

    return (
        <div>
            <BodyWrapper>
                <TopBlock>
                    <Link to={`/user/${this.props.match.params.id}/Info`}>User info</Link>
                    {/* {newsList} */}
                </TopBlock>
            </BodyWrapper>
            <BodyWrapper>
                <BottomBlock>
                   {this.state.users.list.map(list => {
          // Here we use the info for the specific instance of the loop to show username 
          // and create a link
          return (<div><Link key={list._id} to={`/user/$${this.props.match.params.id}/newslist/${this.props.match.params.newsid}/article`}>{list.genre}</Link></div>)
        })}
                </BottomBlock>
            </BodyWrapper>
        </div>
    )
}
}
export default NewsList