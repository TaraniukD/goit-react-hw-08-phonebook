import React from "react";
import {deleteContact} from 'redux/contacts/contactsOperations'
import {useSelector, useDispatch} from 'react-redux';

import { ListUl, ListLi, NameP, ListP, Button } from "./Phonebook.styled";
import { ContactsTitle } from "components/HomeTittle/ContactsTitle";

export const Phonebook = () => {
    
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const contactsList = filterContacts(contacts, filter);
    return ( <>
        { contactsList.length !== 0 ? 
        <ListUl>
            { 
            contactsList.map(({id, name, number}) => {
                return (
                    <ListLi key={id}>
                    <NameP>{name}:</NameP> 
                    <ListP>{number}</ListP>
                    <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                    </ListLi>
                )
            })}
        </ListUl> : <ContactsTitle /> }
        </>
    )}

  