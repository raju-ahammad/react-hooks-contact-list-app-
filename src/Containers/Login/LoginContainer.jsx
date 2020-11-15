import React from 'react'
import { Link } from 'react-router-dom'

const LoginContainer = () => {
    return (
        <div>
            Login Container
            <Link to="/user/register">SignUp here</Link>
        </div>
    )
}

export default LoginContainer
