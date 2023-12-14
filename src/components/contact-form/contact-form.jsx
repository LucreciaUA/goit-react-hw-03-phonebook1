import React from "react";
import css from './contact-form.module.css'

export const ContactForm = ({state, nameChange, numberChange, addContact}) => {
   
        return (<form onSubmit={addContact}>
                <label htmlFor="name">Name</label><br />
                    <input type="text" className={css.input} name="name" id="name" required value={state.name} onChange={nameChange}/><br />
                <label htmlFor="number">Phone</label><br />
                    <input type="tel" name="number" id="number" required value={state.number} onChange={numberChange} /><br />
                <button type="submit" className={css.submit}>Add contact</button>
                </form>)
    
}