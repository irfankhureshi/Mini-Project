import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user, logout } = useAuth()

  return (
    <div>
      <h2 className="text-2xl font-bold text-cyan-700 mb-4">
        Dashboard
      </h2>

      <div className="bg-white p-6 rounded shadow space-y-3">
        <p>Welcome, <strong>{user}</strong></p>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
