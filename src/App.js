import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Ship from './Ship';
import Quest from './Quest';
import ShipInfo from './ShipInfo';
import logo from './Kantai_logo.png';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to='/'><img className="logo" alt="logo" src={logo}></img></Link>
            <h1>he305 Kancolle DB</h1>
          </header>
          <ul className="nav">
            <li><Link to={'/Quests'}>Quests</Link></li>
            <li><Link to={'/Ship'}>Ship list</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/quests' component={Quest} />
            <Route exact path='/ship' component={Ship} />
            <Route path='/ship/:ship' component={ShipInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
