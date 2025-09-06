import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, User, Menu, Globe } from 'lucide-react'

function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Airbnb Style */}
          <Link to="/" className="flex items-center">
            <svg className="h-8 w-8 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L19 7.27L14.18 12.73L21 14.69L12.83 17.17L15 23L12 18L9 23L11.17 17.17L3 14.69L9.82 12.73L5 7.27L10.91 8.26L12 2Z"/>
            </svg>
            <span className="ml-2 text-xl font-bold text-rose-500">WorkSpot</span>
          </Link>

          {/* Search Bar - Airbnb Style */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center border-r border-gray-300 pr-4">
                <button className="text-sm font-medium text-gray-800">
                  Wo
                </button>
              </div>
              <div className="flex items-center border-r border-gray-300 px-4">
                <button className="text-sm font-medium text-gray-800">
                  Wann
                </button>
              </div>
              <div className="flex items-center pl-4">
                <input
                  type="text"
                  placeholder="Arbeitsplatz suchen"
                  className="text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none focus:outline-none w-32"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button 
                  onClick={() => navigate('/search')}
                  className="bg-rose-500 text-white p-2 rounded-full ml-2 hover:bg-rose-600 transition-colors"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Navigation - Airbnb Style */}
          <nav className="flex items-center space-x-4">
            <Link
              to="/host"
              className="hidden md:block text-sm font-medium text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-full transition-colors"
            >
              Vermiete deinen Arbeitsplatz
            </Link>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="h-4 w-4 text-gray-600" />
            </button>
            
            <div className="flex items-center border border-gray-300 rounded-full py-1 pl-3 pr-1 hover:shadow-md transition-shadow">
              <Menu className="h-4 w-4 text-gray-600 mr-2" />
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header