import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link, IndexRedirect} from 'react-router-dom';

import Ship from './Ship';
import Quest from './Quest';
import ShipInfo from './ShipInfo';
import Home from './Home';
import Event from './Event';

import logo from '../Kantai_logo.png';


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
            <li><Link to={'/quests'}>Quests</Link></li>
            <li><Link to={'/ship'}>Ship list</Link></li>
            <li><Link to={'/event'}>Event info</Link></li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/quests' component={Quest} />
            <Route exact path='/ship' component={Ship} />
            <Route path='/ship/:ship' component={ShipInfo} />
            <Route exact path='/event' component={Event} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
