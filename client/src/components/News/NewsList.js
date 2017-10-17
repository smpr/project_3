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
            list: []
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
            <div>
                <BodyWrapper>
                    <TopBlock>
                        <Link to={`/user/${this.props.match.params.id}/Info`}>User info</Link>

                    </TopBlock>
                </BodyWrapper>
                <BodyWrapper>
                    <BottomBlock>
                        {this.state.users.list.map(list => {
                            console.log(list)
                           
                            return (<div><Link key={list._id} to={`/user/${this.props.match.params.id}/newslist/${list._id}/articlelist`}>{list.genre}- {list.name}</Link></div>)
                        })}
                    </BottomBlock>
                </BodyWrapper>
            </div>
        )
    }
}
export default NewsList