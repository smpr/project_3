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
const ImageBlock = styled.div`

img{
    max-width: 75px
}
width: 50px;
height: auto;
margin: 0px;


`


class NewsList extends Component {
    // This sets the initial state for the component. 
    state = {
        users: {
            list: [{
                genre:'',
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
                <BodyWrapper>
                    <TopBlock>
                        <Link to={`/user/${this.props.match.params.id}/Info`}> {this.state.users.firstName} {this.state.users.lastName}</Link>

                    </TopBlock>
                </BodyWrapper>
                <BodyWrapper>
                    <BottomBlock>
                        
                        {this.state.users.list.map(list => {
                            console.log(list)
                           
                            return (<Link key={list._id} to={`/user/${this.props.match.params.id}/newslist/${list._id}/articlelist`}><ImageBlock><img src={list.imageSource} /></ImageBlock></Link>)
                        })}
                        
                    </BottomBlock>
                </BodyWrapper>
            </BodyWrapper>
        )
    }
}
export default NewsList