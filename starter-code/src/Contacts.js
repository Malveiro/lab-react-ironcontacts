import React, { Component } from 'react';
import contacts from './contacts.json';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {contacts: contacts.slice(0,5)}
    }

    clickRandom = () => {
        this.setState({
            contacts: [...this.state.contacts, contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5]]
        })
    }

    sortName = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => {
                return a.name.localeCompare(b.name)
        })
    }
        )
}

sortPopularity = () => {
    this.setState({
        contacts: this.state.contacts.sort((a, b) => {
            return a.popularity - b.popularity
    })
}
    )
}

    deleteContact = (index) => {
        const contactsAfterDelete =  [...this.state.contacts];
        contactsAfterDelete.splice(index, 1)
        this.setState({
            contacts: contactsAfterDelete
        });
    };


    render() {
        console.log(this.state.contacts)
        return (
            <div className="group">
            <button onClick={() => this.clickRandom()}>Add random actor</button>
            <button onClick={() => this.sortName()}>Sort by name</button>
            <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
                 <table>
                     <thead>
                         <tr>
                             <th>Picture</th>
                             <th>Name</th>
                             <th>Popularity</th>
                         </tr>
                     </thead>
                     <tbody>
                     {this.state.contacts.map((oneP, index) => {
                                return (
                                    <tr key={oneP.id}>
                                        <td><img className="pic" src={oneP.pictureUrl} alt="bild" /> </td>
                                        <td>{oneP.name}</td>
                                        <td>{oneP.popularity.toFixed(2)}</td>
                                        <td><button onClick={() => this.deleteContact(index)}>Delete</button></td>
                                    </tr>)
                            })}

                     </tbody>
                 </table>
            </div>
        )
    } 
}

export default Contacts;