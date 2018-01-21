import React, { Component } from 'react';
import './App.css';
import ships_data from './ships.json';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ship from './Ship';
import Quest from './Quest';
import logo from './Kantai_logo.png';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <img className="logo" src={logo}></img>
          <ul className="nav">
            <li><Link to={'/Quests'}>Quests</Link></li>
            <li><Link to={'/Ship'}>Ship list</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/Quests' component={Quest} />
            <Route exact path='/Ship' component={Ship} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
