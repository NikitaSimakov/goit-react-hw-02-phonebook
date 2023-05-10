import React, {Component} from "react";
import { nanoid } from 'nanoid';
import {Notify} from "notiflix";
import ContactForm from "./ContactForm/ContactForm";
import Filter from './Filter/Filter'
import ContactList from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: '',
  }

  formSubmitHandler = data => {
    this.setState(prevState => {if (prevState.contacts.some(contact => contact.name === data.name)) {
      Notify.failure(`${data.name}, is already in contact`)
      return
    }
      return { contacts: [...prevState.contacts, {name: data.name, number: data.number, id: nanoid(3)}]}
    })
  }

  filterChangeHandler = (event) => {
this.setState({filter: event.currentTarget.value})
  }

  contactListRender = () => {
    const {contacts, filter} = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  

render() {
  const contactListRender = this.contactListRender();
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onChange={this.filterChangeHandler}/>
      <ContactList contactListRender={contactListRender} contactList={this.state.contacts}/>
    </div>
  );
}
}

