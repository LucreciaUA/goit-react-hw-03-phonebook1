import React from "react"; 
import css from './contact-list.module.css'

export const ContactList = ({filteredContacts, deleteContacts}) => {
    return (
        <ul>
                        {filteredContacts.length > 0 ? (
                            filteredContacts.map((contact) => {
                                const { id, name, number } = contact;
                                return (
                                    <li key={id}>
                                         <span>{name} - {number}</span>
        
                                    <button type="button" className={css.delete} onClick={() => deleteContacts(contact.id)}>
                                        -</button>
                                    </li>
                                );
                            })
                        ) : (
                            <p>No contacts found.</p>
                        )}
                    </ul>
    )

}