import { Component } from "react";
import css from './phonebook.module.css'
import { ContactForm } from "./contact-form/contact-form";
import { Filter } from "./filter/filter";
import { ContactList } from "./contact-list/contact-list";

class Phonebook extends Component {
    state = {
        contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',

    }


    generateId = () => {
        const ids = this.state.contacts.map((contact) => parseInt(contact.id.split('-')[1]));
        const max = Math.max(...ids);
        const newId = max + 1||1;
        const contactId = `id-${String(newId).padStart(2, '0')}`;
        console.log(contactId)
        return contactId;
    }

    deleteContacts = (id) => {
        const newData = this.state.contacts.filter((contact) => contact.id !== id)
  
       
        this.setState(
            { contacts: newData })
        console.log(this.state.contacts)
    }

   nameChange = (e) => {
        this.setState({ name: e.target.value });
    };

  numberChange = (e) => {
        this.setState({ number: e.target.value });
  };
    
    inputChange = (e) => {
        this.setState({ filter: e.target.value });
    };
    

    addContact = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const isExisting = this.state.contacts.some((contact) =>
        { return (contact.name.toLowerCase() === name.toLowerCase() || contact.number === number) })
        console.log(isExisting)
        if(!isExisting)
        {const newContact = {
            id: this.generateId(),
            name,
            number,
        }
        const newData = [...this.state.contacts, newContact]
        

            this.setState({
            contacts: newData,
            name: '',
            number:'',
            
        })
        }
        else {
            alert(`${name} is already in your contacts`)
        }
    }

    componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(storedContacts) ?? [];
    this.setState({contacts});
  }

   componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const dataContacts = JSON.stringify(this.state.contacts)
      localStorage.setItem('contacts', dataContacts)
        }
    };
    
    render() {
        const { contacts, filter } = this.state;
        const searchTerm = filter.toLowerCase();
        const filteredContacts = contacts.filter((contact) => {
            return (
                contact.name.toLowerCase().includes(searchTerm) ||
                contact.number.includes(searchTerm)
            );
        });
        return (
            <div className={css.wrapper}>
            <h1>Phonebook</h1>
                <ContactForm state={this.state}
                    nameChange={this.nameChange}
                    numberChange={this.numberChange}
                    addContact={this.addContact} />
            <h2>Contacts</h2>
                <Filter state={this.state}
                inputChange={this.inputChange}/>
                <ContactList filteredContacts={filteredContacts}
                deleteContacts={this.deleteContacts}/>

            </div>
    )
}

}

export default Phonebook