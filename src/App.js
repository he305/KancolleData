import React, { Component } from 'react';
import './App.css';
import ships_data from './ships.json'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ship from './Ship';
import Quest from './Quest';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Home</h2>
          <ul className="nav">
            <li><Link to={'/Quests'}>Quests</Link></li>
            <li><Link to={'/Ship'}>Ship list</Link></li>
          </ul>

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
