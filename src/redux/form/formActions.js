export const addContact = (addedContact) => ({
    type: 'form/contactToAddObj',
    payload: addedContact
})

export const delContact = (deletebleContact) => ({
    type: 'form/contactToDeleteObj',
    payload: deletebleContact
})
