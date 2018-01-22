import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ships_data from '../data/ships.json';
import '../styles/App.css';
import '../styles/Ship.css';

class Ship extends Component {
    render() {
      return (
        <li>
          <div>{this.props.element.name}</div>
          <Link to={'/ship/' + this.props.element.name}>
          <img alt='logo' src={this.props.element.stats[this.props.element.stats.length-1].image}></img></Link>
        </li>
      );
    }
  }
  
class ShipList extends Component {

    constructor(props) {
        super(props);
        this.state = {ships : ships_data};
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();
        var ships = ships_data.filter(function(el) {
        var searchValue = el.name.toLocaleLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
        ships: ships
        })
    }

    render() {
        return (
        <div>
            <input placeholder="Type ship name" type="text" onChange={this.handleSearch} />
            <ul className ="shiplist">
            {
                this.state.ships.map(function (el) {
                return ( 
                    <Ship element={el} key={el.name}/>
                );
                })
            }
            </ul>
        </div>
        );
    }
}

export default ShipList