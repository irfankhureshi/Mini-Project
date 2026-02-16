import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login()
        navigate('/dashboard')
    }
  return (
    <div className='flex items-center'>
      <h1>This is  the login page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;
