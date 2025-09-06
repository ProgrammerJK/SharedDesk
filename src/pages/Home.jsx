import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, MapPin, Star, Calendar, Users, ChevronRight } from 'lucide-react'

// Airbnb-style workspace data
const featuredWorkspaces = [
  {
    id: 1,
    title: "Stylisches Loft im Herzen von Berlin",
    location: "Berlin, Deutschland",
    price: 28,
    rating: 4.95,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    host: "Superhost"
  },
  {
    id: 2,
    title: "Kreatives Studio mit Dachterrasse",
    location: "München, Deutschland",
    price: 32,
    rating: 4.89,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    host: "Superhost"
  },
  {
    id: 3,
    title: "Minimalistisches Büro am Hafen",
    location: "Hamburg, Deutschland",
    price: 25,
    rating: 4.92,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    host: "Neu"
  },
  {
    id: 4,
    title: "Gemütlicher Arbeitsplatz im Altbau",
    location: "Köln, Deutschland",
    price: 22,
    rating: 4.88,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
    host: "Superhost"
  }
]

const categories = [
  { name: "Büros", icon: "🏢" },
  { name: "Co-Working", icon: "👥" },
  { name: "Studios", icon: "🎨" },
  { name: "Cafés", icon: "☕" },
  { name: "Lofts", icon: "🏙️" },
  { name: "Garten", icon: "🌿" },
  { name: "Dachterrasse", icon: "🏞️" },
  { name: "Modern", icon: "💻" }
]

function Home() {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/search')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section mit Search - Airbnb Style */}
      <section className="relative bg-gradient-to-b from-rose-50 to-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Finde deinen perfekten
              <span className="block text-rose-500">Arbeitsplatz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecke einzigartige Arbeitsplätze in deiner Nähe und arbeite produktiver denn je
            </p>
          </div>

          {/* Search Form - Airbnb Style mit Abreise */}
          <form onSubmit={handleSearch} className="max-w-6xl mx-auto">
            <div className="bg-white rounded-full shadow-xl border border-gray-200 p-2">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {/* Location */}
                <div className="px-6 py-4 border-r border-gray-200">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Wo
                  </label>
                  <input
                    type="text"
                    placeholder="Reiseziel suchen"
                    value={searchData.location}
                    onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                    className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none"
                  />
                </div>

                {/* Check-in */}
                <div className="px-6 py-4 border-r border-gray-200">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Anreise
                  </label>
                  <input
                    type="date"
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                    className="w-full text-sm text-gray-600 border-none outline-none cursor-pointer"
                  />
                </div>

                {/* Check-out - NEU */}
                <div className="px-6 py-4 border-r border-gray-200">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Abreise
                  </label>
                  <input
                    type="date"
                    value={searchData.checkOut}
                    min={searchData.checkIn}
                    onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                    className="w-full text-sm text-gray-600 border-none outline-none cursor-pointer"
                  />
                </div>

                {/* Guests */}
                <div className="px-6 py-4 border-r border-gray-200">
                  <label className="block text-xs font-semibold text-gray-900 mb-1">
                    Wer
                  </label>
                  <select
                    value={searchData.guests}
                    onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    className="w-full text-sm text-gray-600 border-none outline-none appearance-none"
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Personen</option>
                    <option value={3}>3+ Personen</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-center justify-center px-2">
                  <button
                    type="submit"
                    className="bg-rose-500 text-white p-4 rounded-full hover:bg-rose-600 transition-colors flex items-center justify-center"
                  >
                    <Search className="h-4 w-4" />
                    <span className="ml-2 hidden md:inline">Suchen</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Categories - Airbnb Style */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-8 pb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex flex-col items-center min-w-0 flex-shrink-0 group hover:text-gray-900 transition-colors"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workspaces - Airbnb Style */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Beliebte Arbeitsplätze
            </h2>
            <Link
              to="/search"
              className="flex items-center text-rose-500 hover:text-rose-600 font-medium"
            >
              Alle anzeigen
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorkspaces.map((workspace) => (
              <Link
                key={workspace.id}
                to={`/workspace/${workspace.id}`}
                className="group cursor-pointer"
              >
                <div className="relative mb-3">
                  <img
                    src={workspace.image}
                    alt={workspace.title}
                    className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  {workspace.host === "Superhost" && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
                      Superhost
                    </div>
                  )}
                  {workspace.host === "Neu" && (
                    <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Neu
                    </div>
                  )}
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                      {workspace.location}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-black" />
                      <span className="text-sm font-medium">{workspace.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{workspace.title}</p>
                  
                  <div className="pt-1">
                    <span className="font-semibold">€{workspace.price}</span>
                    <span className="text-gray-600"> pro Tag</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Section - Airbnb Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Arbeite, wo du willst
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Entdecke einzigartige Arbeitsplätze von lokalen Gastgebern in über 50 Städten. 
                Vom gemütlichen Café bis zum modernen Co-Working Space – finde den perfekten 
                Ort für produktives Arbeiten.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sofortige Buchung</h3>
                    <p className="text-gray-600">Buche deinen Arbeitsplatz mit nur einem Klick</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verifizierte Gastgeber</h3>
                    <p className="text-gray-600">Alle unsere Gastgeber sind sorgfältig geprüft</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Wir sind immer da, wenn du uns brauchst</p>
                  </div>
                </div>
              </div>
              <Link
                to="/search"
                className="inline-flex items-center mt-8 bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors font-medium"
              >
                Jetzt entdecken
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="Remote working"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Host Section - Airbnb Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Verdiene Geld mit deinem Arbeitsplatz
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Teile deinen ungenutzten Schreibtisch, dein Büro oder deinen Co-Working Space 
              und verdiene dabei Geld. Es ist einfacher als du denkst!
            </p>
            <Link
              to="/host"
              className="inline-flex items-center bg-white text-rose-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Gastgeber werden
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home