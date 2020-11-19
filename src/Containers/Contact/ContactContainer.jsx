import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getContact from '../../Context/Actions/Contacts/getContact';
import { GlobalContext } from '../../Context/Provider';
const ContactContainer = () => {
    const context = useContext(GlobalContext)
    const history = useHistory()
    useEffect(() => {
        getContact(history)
    }, [])
    return (
        <div>
            Container
        </div>
    )
}

export default ContactContainer
