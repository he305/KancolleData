import React, { Component } from 'react';
import ships_data from './ships.json'
import './App.css'

class Ship extends Component {
    render() {
      return (
        <li>
          <div>{this.props.element.name}</div>
          <a href="https://google.com"><img src={this.props.element.stats[this.props.element.stats.length-1].image} /></a>
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
        var searchValue = el.Name.toLocaleLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
        ships: ships
        })
    }

    render() {
        return (
        <div>
            <input type="text" onChange={this.handleSearch} />
            <ul>
            {
                this.state.ships.map(function (el) {
                return ( 
                    <Ship element={el}/>
                );
                })
            }
            </ul>
        </div>
        );
    }
}

export default ShipList