import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

import Home from "./pages/Home"
import Counter from "./pages/Counter"
import SearchFilter from "./pages/SearchFilter"
import Pagination from "./pages/Pagination"
import TodoApp from "./pages/TodoApp"
import CartLogic from "./pages/CartLogic"
import ApiFetch from "./pages/ApiFetch"
import FormValidation from "./pages/FormValidation"

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900">
      
      {/* HEADER */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* LAYOUT */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 lg:ml-64 pt-20 px-6 lg:px-8 pb-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/searchfilter" element={<SearchFilter />} />
              <Route path="/pagination" element={<Pagination />} />
              <Route path="/todoapp" element={<TodoApp />} />
              <Route path="/cartlogic" element={<CartLogic />} />
              <Route path="/api" element={<ApiFetch />} />
              <Route path="/form" element={<FormValidation />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
