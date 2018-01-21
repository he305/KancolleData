import React, { Component } from 'react';
import quests_data from './quests.json';
import './Quest.css';

class Quest extends Component {

    constructor(props) {
        super(props);
        this.getURL = this.getURL.bind(this);
        this.convertNote = this.convertNote.bind(this);
        this.state = {test : "<a href='https://google.com'>Test</a>"}
    }

    convertNote(data) {
        var pattern = /[^><#][A-z]+\d+/g;
        if (data.match(pattern) !== null && data.match(pattern) !== undefined) {
            data.match(pattern).map(function(match) {
                var new_data = match.replace(/\s/g, '');
                data = data.replace(match, " <a href=#" + new_data + ">" + new_data + "</a>")
            })
            
        }
        return data;
    }

    getURL(data) {
        return "#" + data;
    }

    render() {
        return (
            <tr>
                <td className="questName" id={this.props.quest.name}>{this.props.quest.name}</td>
                <td>{this.props.quest.requirements}</td>
                <td>{this.props.quest.resources}</td>
                <td>{this.props.quest.rewards}</td>
                <td dangerouslySetInnerHTML={{__html:this.convertNote(this.props.quest.note)}}/>
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