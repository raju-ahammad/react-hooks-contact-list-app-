import React, { useEffect } from 'react';
import { getRegister } from '../../Context/Actions/Register';
import RegisterUi from '../../Layout/RegisterForm/RegisterUi';
const RegisterContainer = () => {

    useEffect(() => {
        getRegister();
    }, [])
    return (
        <div>
            <RegisterUi/>
        </div>
    )
}

export default RegisterContainer
