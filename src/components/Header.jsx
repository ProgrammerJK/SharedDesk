import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User, Menu, Zap, MapPin } from 'lucide-react'

function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <Zap className="relative h-10 w-10 text-white p-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl transform group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <span className="text-2xl font-black text-white bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">QuickDesk</span>
              <div className="text-xs text-purple-200 font-medium">Find. Work. Vibe.</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-sm opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Berlin, Hamburg, Munich..."
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-white placeholder-white/70 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 font-medium"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                    <Search className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-3">
            <Link
              to="/search"
              className="hidden md:block text-white/90 hover:text-white font-semibold hover:bg-white/10 px-4 py-2 rounded-xl transition-all"
            >
              🚀 Explore
            </Link>
            <button
              onClick={() => window.location.href = '/host'}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 rounded-xl hover:scale-105 transition-transform flex items-center"
            >
              <span role="img" aria-label="Host" className="mr-2">💰</span> Host
            </button>
            <Link
              to="/profile"
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-2xl px-4 py-2 transition-all group"
            >
              <Menu className="h-4 w-4 text-white group-hover:rotate-180 transition-transform" />
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
