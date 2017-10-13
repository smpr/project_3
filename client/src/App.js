import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/Home/HomePage'
import CreateUser from './components/Users/CreateHome'
import Header from './components/BoilerPlate/Header'
import Nav from './components/BoilerPlate/Nav'



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
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App