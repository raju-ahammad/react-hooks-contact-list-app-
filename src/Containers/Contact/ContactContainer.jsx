import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getContact from '../../Context/Actions/Contacts/getContact';
import { GlobalContext } from '../../Context/Provider';
import ContactListUI from '../../Layout/Contacts/ContactListUI';
const ContactContainer = () => {
    const {contactDispatch, contactState} = useContext(GlobalContext)
    const history = useHistory()
    console.log("ContactState:",contactState);
    useEffect(() => {
        getContact(history)(contactDispatch);
    }, [])
    return (
        <div>
            Container
            <ContactListUI state= {contactState} />
        </div>
    )
}

export default ContactContainer
