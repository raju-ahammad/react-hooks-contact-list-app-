import React, { useEffect } from 'react';
import { getContact } from '../../Context/Actions/Contact';

const ContactContainer = () => {
    useEffect(()=> {
        getContact()
    })
    return (
        <div>
           Hello crate
        </div>
    )
}

export default ContactContainer
