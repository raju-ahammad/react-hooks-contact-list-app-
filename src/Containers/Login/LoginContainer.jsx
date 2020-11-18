import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/Provider';

const LoginContainer = () => {
    const { authDispatch, authState:{auth:{loading, data, error}} } = useContext(GlobalContext)
    console.log(data);
    return (
        <div>
            Login Container
            <h3> { data ? `welcome to hell ${data?.username}`:"login here" } </h3>
            <Link to="/auth/register">SignUp here</Link>
            
        </div>
    )
}

export default LoginContainer
