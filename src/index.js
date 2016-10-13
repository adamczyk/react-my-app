import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App'
//import { Router, Route, IndexRoute, hashHistory } from 'react-router'; //Less efficient way than the above
import FirstPage from './pages/FirstPage'
import hashHistory from 'react-router/lib/hashHistory'
import HomePage from './pages/HomePage'
import IndexRoute from 'react-router/lib/IndexRoute'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import SecondPage from './pages/SecondPage'



ReactDOM.render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={HomePage}></IndexRoute>
  		<Route path="first(/:test)" component={FirstPage}></Route>
  		<Route path="second" component={SecondPage}></Route>
  	</Route>
  </Router>
  ), document.getElementById('root'))

