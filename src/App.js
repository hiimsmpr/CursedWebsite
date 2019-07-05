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
        <div className="landingBody">
        <div className="discordBody">
        DISCORD SPACE SAVER
        </div>
        <div className="mainBody">
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Test' component={Test} />
        </Switch>
        </div>
        </div>
        <div className="landingFooter">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
