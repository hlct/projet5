import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import Map from './pages/Map'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as  Router,Switch, Route } from 'react-router-dom'


const Root = () => (
  <HashRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Map' component={Map} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
