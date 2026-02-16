import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login2 = () => {
  const [name, setName] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!name.trim()) return
    login(name)
    navigate('/dashboard')
  }

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-cyan-700 mb-4">
        Login
      </h2>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter name"
          className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-cyan-700 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-700 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login2
