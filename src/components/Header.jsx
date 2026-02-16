import { Menu, Zap } from "lucide-react"

const Header = ({ onMenuClick }) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-16
      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
      text-white flex items-center justify-between
      px-6 shadow-lg z-50 backdrop-blur-sm"
    >
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-2xl font-bold hover:scale-110 transition-transform duration-200"
      >
        <Menu size={24} />
      </button>

      {/* LOGO AND TITLE */}
      <div className="flex items-center space-x-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <Zap size={24} className="text-yellow-300" />
        </div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
          My Dashboard
        </h1>
      </div>

      {/* RIGHT SIDE - Could add user menu or notifications */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold">I</span>
        </div>
      </div>
    </header>
  )
}

export default Header
