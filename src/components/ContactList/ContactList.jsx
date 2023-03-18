import React from "react";
import {deleteContact} from 'redux/contacts/contactsOperations'
import {useSelector, useDispatch} from 'react-redux';
import { IoCheckmarkSharp } from "react-icons/io5";

import { ListUl, ListLi, NameP, ListP, Button, IconButton } from "./ContactsList.styled";

export const ContactList = () => {
    
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const contactsList = filterContacts(contacts, filter);

    return (
        <ListUl>
            { 
            contactsList.map(({id, name, number}) => {
                return (
                    <ListLi key={id}>
                    <IconButton onClick={() => {}}>
                    <IoCheckmarkSharp />
                    </IconButton>
                    <NameP>{name}:</NameP> 
                    <ListP>{number}</ListP>
                    <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                    </ListLi>
                )
            })}
        </ListUl>
    )}

  