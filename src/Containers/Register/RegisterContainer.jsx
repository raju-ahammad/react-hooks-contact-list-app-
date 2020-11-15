import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRegister } from '../../Context/Actions/Register'

const RegisterContainer = () => {

    useEffect(() => {
        getRegister();
    }, [])
    return (
        <div>
            Register Container
            <Link to="/auth/login">Login Here</Link>
        </div>
    )
}

export default RegisterContainer
