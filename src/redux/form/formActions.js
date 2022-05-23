import { createAction } from "@reduxjs/toolkit";

export const addContact= createAction('form/contactToAddObj');
export const delContact= createAction('form/contactToDeleteObj')

// export const addContact = (addedContact) => ({
//     type: 'form/contactToAddObj',
//     payload: addedContact
// })

// export const delContact = (deletebleContact) => ({
//     type: 'form/contactToDeleteObj',
//     payload: deletebleContact
// })
