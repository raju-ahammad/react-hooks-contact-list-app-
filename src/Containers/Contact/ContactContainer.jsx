import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/Provider';
const ContactContainer = () => {
    const context = useContext(GlobalContext)
    console.log("contextContainer", context);
    return (
        <div>
            Container
        </div>
    )
}

export default ContactContainer
