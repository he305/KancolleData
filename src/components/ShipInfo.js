import React, { Component } from 'react';
import ships_data from '../data/ships.json';
import '../styles/ShipInfo.css';

class ShipInfoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {element : this.props.element}
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="shipinfotable">
            <table class="shipTable">
            <tbody>
                <tr>
                    <td colspan="4">{this.state.element.japanese_name}</td>
                </tr>
                <tr>
                    <td colspan="4"><img alt="image lost" src={this.state.element.image}></img></td>
                </tr>
                <tr>
                    <td colspan="4">{this.state.element.description}</td>
                </tr>
                <tr>
                    <td colspan="4">Remodel level: {this.state.element.remodel_level}</td>
                </tr>
                <tr>
                    <td>HP</td>
                    <td>{this.state.element.hp}</td>
                    <td>Firepower</td>
                    <td>{this.state.element.firepower}</td>
                </tr>
                <tr>
                    <td>Armor</td>
                    <td>{this.state.element.armor}</td>
                    <td>Torpedo</td>
                    <td>{this.state.element.torpedo}</td>
                </tr>
                <tr>
                    <td>Evasion</td>
                    <td>{this.state.element.evasion}</td>
                    <td>AA</td>
                    <td>{this.state.element.aa}</td>
                </tr>
                <tr>
                    <td>Aircraft</td>
                    <td>{this.state.element.aircraft}</td>
                    <td>ASW</td>
                    <td>{this.state.element.asw}</td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td>{this.state.element.speed}</td>
                    <td>LOS</td>
                    <td>{this.state.element.los}</td>
                </tr>
                <tr>
                    <td>Range</td>
                    <td>{this.state.element.range}</td>
                    <td>Luck</td>
                    <td>{this.state.element.luck}</td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}

class ShipInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {ship : this.props.match.params.ship, ships : ships_data};
        
        var data = []
        this.state.ships.map(function(element) {
            console.log(typeof(element.name));
            if (props.match.params.ship === element.name) {
                data = element.stats;
                console.log('found');
                console.log(data);

                this.state =  {ship : this.props.match.params.ship, ships : ships_data, data : data};
            }
        }.bind(this));

        console.log(this.state);
    }

    render() {
        return <div>
        {
            this.state.data.map(function(element) {
                return (
                    <ShipInfoTable element={element} />
                )
            })
        }
        </div>
    }
} 

export default ShipInfo;