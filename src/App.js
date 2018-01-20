import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Contacts = [
  {
    "name" : "Kongou",
    "id" : 1
  },
  {
    "name" : "Kaga",
    "id" : 2
  },
  {
    "name" : "Akagi",
    "id" : 3
  }
];


var test = {
  "TEST1" : [
    1,
    2,
    3
  ],
  "TEST2" : [
    1,
    2,
    3
  ],
  "TEST3" : [
    1,
    2,
    3
  ]
};

class Contact extends Component {
  render() {
    return (
      <li>
        <div>{this.props.element.name}</div>
      </li>
    );
  }
}

class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {contacts : Contacts, test : test};
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var contacts = Contacts.filter(function(el) {
      var searchValue = el.name.toLocaleLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      contacts: contacts
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearch} />
        <ul>
          {
            this.state.contacts.map(function (el) {
              return ( 
                <Contact element={el}/>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ContactList />
    );
  }
}

export default App;
