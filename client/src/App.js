import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import HomePage from './components/Home/HomePage'
import Header from './components/BoilerPlate/Header'
import Nav from './components/BoilerPlate/Nav'
import UserInfo from './components/Users/UserInfo'
import NewsList from './components/News/NewsList.js'
import CreateNewsList from './components/News/CreatNewsList.js'
import CreateUser from './components/Users/CreateUser'
import Article from './components/News/Article'
import ArticleList from './components/News/ArticleList'

class App extends Component {
  render () {
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
                  <Route exact path="/Users" component={HomePage} />
                  <Route exact path="/User/Create" component={CreateUser} />
                  <Route exact path="/User/:id/Info" component={UserInfo} />
                  <Route exact path="/User/:id/NewsList" component={NewsList} />
                  <Route exact path="/User/:id/NewsList/create" component={CreateNewsList} />
                  <Route exact path="/User/:id/NewsList/:newsid/ArticleList" component={ArticleList} />
                  <Route exact path="/User/:id/NewsList/:newsid/ArticleList/:articleId/article" component={Article} />
      
                </Switch>
              </div>
            </Router>)
  }
}

export default App