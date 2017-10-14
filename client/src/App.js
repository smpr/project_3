import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


import HomePage from './components/Home/HomePage'
import Header from './components/BoilerPlate/Header'
import Nav from './components/BoilerPlate/Nav'
import UserInfo from './components/Users/UserInfo'
import NewsList from './components/News/NewsList.js'
import CreateUser from './components/Users/CreateUser'
import Article from './components/News/Article'



class App extends Component {
  state = {
    users: []
  }
  componentWillMount() {
    this.getAllUsers()
  }
  getAllUsers = () => {
    axios.get('/api/users').then(res => {
      this.setState({ users: res.data })
    })
  }

  render() {
    const passUser = () => {
      return (<HomePage
        users={this.state.users}

      />)
    }
    return (
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <Nav />
          </div>
          <Switch>
            <Route exact path="/" render={passUser} />
            <Route exact path="/User/Create" component={CreateUser} />
            <Route exact path="/User/:id/info" component={UserInfo} />
            <Route exact path="/User/:id/NewsList" component={NewsList} />
            <Route exact path="/User/:id/NewsList/:newsid/Article" component={Article} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App