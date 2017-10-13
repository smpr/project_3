import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/Home/HomePage'
import CreateUser from './components/Users/CreateHome'
import Header from './components/BoilerPlate/Header'
import Nav from './components/BoilerPlate/Nav'
import UserInfo from './components/Users/UserInfo'
import NewsList from './components/News/NewsList.js'



class App extends Component {
  render() {
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/User/Create" component={CreateUser} />
            <Route exact path="/User/:id" component={UserInfo} />
            <Route exact path="/User/:id/NewsList" component={NewsList} />

            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App