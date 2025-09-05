import React, { useState } from 'react'
import { Filter, MapPin, Star } from 'lucide-react'
import WorkspaceCard from '../components/WorkspaceCard'

// Erweiterte Beispiel-Daten
const workspaces = [
  {
    id: 1,
    title: "Modernes Home-Office in Mitte",
    location: "Berlin Mitte",
    price: 35,
    rating: 4.9,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    amenities: ['wifi', 'coffee', 'monitor'],
    type: 'private'
  },
  {
    id: 2,
    title: "Gemütlicher Arbeitsplatz mit Garten",
    location: "Hamburg Eimsbüttel",
    price: 28,
    rating: 4.8,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    amenities: ['wifi', 'coffee'],
    type: 'shared'
  },
  {
    id: 3,
    title: "Minimalistisches Büro im Loft",
    location: "München Schwabing",
    price: 42,
    rating: 4.7,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    amenities: ['wifi', 'monitor'],
    type: 'private'
  },
  {
    id: 4,
    title: "Heller Arbeitsplatz am Fenster",
    location: "Köln Innenstadt",
    price: 30,
    rating: 4.9,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=400",
    amenities: ['wifi', 'coffee', 'monitor'],
    type: 'shared'
  },
  {
    id: 5,
    title: "Kreatives Studio in Prenzlauer Berg",
    location: "Berlin Prenzlauer Berg",
    price: 38,
    rating: 4.6,
    reviews: 21,
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=400",
    amenities: ['wifi', 'coffee'],
    type: 'private'
  },
  {
    id: 6,
    title: "Arbeitsplatz mit Balkon",
    location: "Frankfurt am Main",
    price: 33,
    rating: 4.8,
    reviews: 39,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
    amenities: ['wifi', 'monitor'],
    type: 'shared'
  }
]

function Search() {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: '',
    amenities: []
  })
  
  const [showFilters, setShowFilters] = useState(false)
  
  const filteredWorkspaces = workspaces.filter(workspace => {
    if (filters.location && !workspace.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    if (filters.minPrice && workspace.price < parseInt(filters.minPrice)) {
      return false
    }
    if (filters.maxPrice && workspace.price > parseInt(filters.maxPrice)) {
      return false
    }
    if (filters.type && workspace.type !== filters.type) {
      return false
    }
    return true
  })
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Arbeitsplätze finden
        </h1>
        <p className="text-gray-600">
          {filteredWorkspaces.length} Arbeitsplätze verfügbar
        </p>
      </div>
      
      {/* Filter Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
        >
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ort
              </label>
              <input
                type="text"
                placeholder="Berlin, Hamburg..."
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min. Preis (€)
              </label>
              <input
                type="number"
                placeholder="0"
                value={filters.minPrice}
                onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max. Preis (€)
              </label>
              <input
                type="number"
                placeholder="100"
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Typ
              </label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Alle</option>
                <option value="private">Privater Arbeitsplatz</option>
                <option value="shared">Geteilter Arbeitsplatz</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWorkspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
      
      {/* No Results */}
      {filteredWorkspaces.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Keine Arbeitsplätze gefunden
          </h3>
          <p className="text-gray-600">
            Versuche deine Suchkriterien zu ändern
          </p>
        </div>
      )}
    </div>
  )
}

export default Search
