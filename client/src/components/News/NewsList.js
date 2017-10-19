import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Article from '../News/Article'
import Img from 'react-image'

const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
background-color: rgba(204, 204, 204, .35)
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
margin: 0px;
`
class NewsList extends Component {
    // This sets the initial state for the component. 
    state = {
        users: {
            list: [{
                genre: '',
                name: '',
            }]
        }
    }
    componentWillMount() {
        this.getAllNews()
    }
    getAllNews = async () => {
        try {
            const userId = this.props.match.params.id
            const res = await axios.get(`/api/users/${userId}`)
            const newsList = res.data.list
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <BodyWrapper>
                <Link to={`/user/${this.props.match.params.id}/Info`}> {this.state.users.firstName} {this.state.users.lastName}</Link>
                <NewsBlock>
                Sources: <br />
                    <ImageBlock>
                        {this.state.users.list.map(list => {
                            console.log(list)
                            return (<Link key={list._id} to={`/user/${this.props.match.params.id}/newslist/${list._id}/articlelist`}><img src={list.imageSource} /></Link>)
                        })}<br />
                    </ImageBlock>
                    <Link to="/comingsoon"><button>Add News Source</button></Link>
                </NewsBlock>
            </BodyWrapper>
        )
    }
}
export default NewsList