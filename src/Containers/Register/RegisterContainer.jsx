import React, { useEffect } from 'react';
import { getRegister } from '../../Context/Actions/Register';
import RegisterUi from '../../Layout/RegisterForm/RegisterUi';
import useForm from './useForm';
const RegisterContainer = () => {

    useEffect(() => {
        getRegister();
    }, [])
    console.log(useForm());
    return (
        <div>
            <RegisterUi form={useForm()} />
        </div>
    )
}

export default RegisterContainer
