import React, { Component } from 'react';
import quests_data from './quests.json';
import './Quest.css';

class Quest extends Component {

    constructor(props) {
        super(props);
        this.getURL = this.getURL.bind(this);
    }

    getURL(data) {
        return "#" + data;
    }

    render() {
        return (
            <tr>
                <td><a href={this.getURL(this.props.quest.name)} id={this.props.quest.name}>{this.props.quest.name}</a></td>
                <td>{this.props.quest.requirements}</td>
                <td>{this.props.quest.resources}</td>
                <td>{this.props.quest.rewards}</td>
                <td>{this.props.quest.note}</td>
            </tr>
        )
    }
}

class QuestList extends Component {
    constructor(props) {
        super(props);
        this.state = {quests : quests_data};
    }

    render() {
        return (
            <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Requirements</th>
                        <th>Resources</th>
                        <th>Rewards</th>
                        <th>Notes</th>
                    </tr>

                    {
                        this.state.quests.map(function(el) {
                        return <Quest quest={el} />
                    })
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default QuestList;