import React, { useEffect } from 'react';
import { getContact } from '../../Context/Actions/Contact';

const ContactContainer = () => {
    useEffect(()=> {
        getContact()
    })
    return (
        <div>
            Create container
        </div>
    )
}

export default ContactContainer
