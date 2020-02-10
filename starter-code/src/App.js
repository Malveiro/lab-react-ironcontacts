import React, { Component } from 'react';
import './App.css';
//import contacts from './contacts.json';
import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;
