import { NavLink } from "react-router-dom"
import { Home, Plus, Search, List, CheckSquare, ShoppingCart, Download, FileText } from "lucide-react"

const Sidebar = ({ isOpen, onClose }) => {
  const navLinkStyle = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
     ${isActive ? "bg-white/20 shadow-lg text-white" : "hover:bg-white/10 text-gray-100 hover:text-white"}`

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/counter", label: "Counter", icon: Plus },
    { to: "/searchfilter", label: "Search Filter", icon: Search },
    { to: "/pagination", label: "Pagination", icon: List },
    { to: "/todoapp", label: "Todo App", icon: CheckSquare },
    { to: "/cartlogic", label: "Cart Logic", icon: ShoppingCart },
    { to: "/api", label: "API Data Fetch", icon: Download },
    { to: "/form", label: "Form Validation", icon: FileText },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 z-50
          w-64 h-[calc(100vh-4rem)]
          bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800
          text-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          border-r border-slate-700
        `}
      >
        <div className="p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Navigation
          </h2>
          <p className="text-sm text-slate-400 mt-1">Explore the features</p>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={navLinkStyle} onClick={onClose}>
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <p className="text-xs text-slate-500 text-center">
            Built with React & Tailwind
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
