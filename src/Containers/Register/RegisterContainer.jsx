import React, { useEffect } from 'react';
import RegisterUi from '../../Layout/RegisterForm/RegisterUi';
import useForm from './useForm';
const RegisterContainer = () => {

    useEffect(() => {}, [])
    
    return (
        <div>
            <RegisterUi form={useForm()} />
        </div>
    )
}

export default RegisterContainer
