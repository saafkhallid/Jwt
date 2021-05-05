
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import User from './components/Tech';
import Tech from './components/User';
import SignUp from './components/signup';
import Login from './components/login'

import './App.css';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>JWT</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>

            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/tech" component={Tech}/>

            <Route  excat path="/sign-in" component={Login} />     
            <Route  excat path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;