import React, { useEffect } from 'react';
import LoginUi from '../../Layout/LoginForm/LoginUi';
import useForm from './useForm';

const LoginContainer = () => {
   
    useEffect(() => {}, [])
    
    return (
        <div>
            <LoginUi form={useForm()} />
        </div>
    )
}

export default LoginContainer
