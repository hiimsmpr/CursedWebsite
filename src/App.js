import React from 'react';
import './styling/global.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './landingPage/landingHeader'
import Nav from './landingPage/landingNav'
import Footer from './landingPage/landingFooter'

import Home from './landingPage/landingHome'
import Test from './landingPage/landingTest'
function App() {
  return (
    <Router>
      <div className="globalContainer">
        <Header />
        <Nav />
        <Switch>
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Test' component={Test} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
