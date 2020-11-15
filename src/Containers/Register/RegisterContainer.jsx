import React from 'react'
import { Link } from 'react-router-dom'
console.log("hello")
const RegisterContainer = () => {
    return (
        <div>
            Register Container
            <Link to="/user/login">Login Here</Link>
        </div>
    )
}

export default RegisterContainer
