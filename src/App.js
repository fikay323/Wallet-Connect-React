import React from 'react'
import Index from './components/index'
import Wallet from './components/wallet'
import Connect from './components/connect'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/app.css'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index/>
          </Route>
          <Route exact path='/wallet'>
            <Wallet/>
          </Route>
          <Route path='/wallet/connect'>
            <Connect/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App