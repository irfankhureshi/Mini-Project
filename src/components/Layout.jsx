import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Outlet />
    </div>
  )
}

export default Layout
