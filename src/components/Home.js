import React, {Component} from 'react';
import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
            <h2>Welcome to personal he305 Kancolle DB</h2>
            <h3>TODO list:</h3>
            <ol className="homelist" type="1">
                <li><del>Fix routing</del></li>
                <li>Fix rewards on quest page</li>
                <li>Fix render of ship info</li>
                <li>Parse map pages</li>
            </ol>
            <p>All information was taken from <a href="http://kancolle.wikia.com">Kancolle Wiki</a></p>
            <p><a href="https://github.com/he305/KancolleData">Github repo</a></p>
            </div>
        )
    }
}

export default Home;