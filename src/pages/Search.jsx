import React, { useState, useEffect, useRef } from 'react'
import { Search as SearchIcon, Filter, Grid, MapPin } from 'lucide-react'
import WorkspaceCard from '../components/WorkspaceCard'

// Mock data für Arbeitsplätze weltweit
const mockWorkspaces = [
  {
    id: 1,
    title: "Modernes Co-Working Space",
    location: "Berlin, Deutschland",
    coordinates: [52.5200, 13.4050],
    price: 25,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Kaffee", "Drucker"]
  },
  {
    id: 2,
    title: "Startup Hub im Zentrum",
    location: "München, Deutschland",
    coordinates: [48.1351, 11.5820],
    price: 30,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Meeting Room", "Kaffee"]
  },
  {
    id: 3,
    title: "Creative Workspace",
    location: "Hamburg, Deutschland",
    coordinates: [53.5511, 9.9937],
    price: 22,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Design Tools", "Kaffee"]
  },
  {
    id: 4,
    title: "Tech Workspace",
    location: "London, UK",
    coordinates: [51.5074, -0.1278],
    price: 45,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Tech Equipment", "Meeting Rooms"]
  },
  {
    id: 5,
    title: "Parisian Office Space",
    location: "Paris, Frankreich",
    coordinates: [48.8566, 2.3522],
    price: 40,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Vintage Charm", "Café"]
  },
  {
    id: 6,
    title: "Silicon Valley Hub",
    location: "San Francisco, USA",
    coordinates: [37.7749, -122.4194],
    price: 60,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop",
    amenities: ["WiFi", "High-Tech", "Networking"]
  },
  {
    id: 7,
    title: "Tokyo Modern Space",
    location: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    price: 35,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1497366672149-e5e4b4d34043?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Minimalist", "Tech"]
  },
  {
    id: 8,
    title: "Sydney Harbor View",
    location: "Sydney, Australien",
    coordinates: [-33.8688, 151.2093],
    price: 38,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Ocean View", "Relaxed"]
  }
]

function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMap, setShowMap] = useState(true)
  const [filteredWorkspaces, setFilteredWorkspaces] = useState(mockWorkspaces)
  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const mapRef = useRef(null)

  // Leaflet Map Setup
  useEffect(() => {
    if (!mapRef.current) return

    // Import Leaflet dynamically
    import('leaflet').then((L) => {
      // Fix für Leaflet Marker Icons
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })

      const newMap = L.map(mapRef.current).setView([52.5200, 13.4050], 6)
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(newMap)

      setMap(newMap)
    })

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  // Update markers when workspaces change
  useEffect(() => {
    if (!map) return

    import('leaflet').then((L) => {
      // Remove existing markers
      markers.forEach(marker => map.removeLayer(marker))
      
      const newMarkers = filteredWorkspaces.map(workspace => {
        // Custom HTML für Preismarker
        const priceIcon = L.divIcon({
          html: `<div style="
            background: white;
            border: 2px solid #ff385c;
            border-radius: 16px;
            padding: 4px 8px;
            font-weight: 600;
            font-size: 14px;
            color: #222;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            white-space: nowrap;
          ">€${workspace.price}</div>`,
          className: 'custom-price-marker',
          iconSize: [60, 30],
          iconAnchor: [30, 30]
        })

        const marker = L.marker(workspace.coordinates, { icon: priceIcon })
          .addTo(map)
          .bindPopup(`
            <div style="min-width: 200px;">
              <img src="${workspace.image}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
              <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600;">${workspace.title}</h3>
              <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${workspace.location}</p>
              <p style="margin: 0; font-weight: 600; font-size: 16px;">€${workspace.price}/Tag</p>
            </div>
          `)

        return marker
      })
      
      setMarkers(newMarkers)

      // Fit map to markers if there are any
      if (newMarkers.length > 0) {
        const group = new L.featureGroup(newMarkers)
        map.fitBounds(group.getBounds().pad(0.1))
      }
    })
  }, [map, filteredWorkspaces])

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredWorkspaces(mockWorkspaces)
      return
    }

    const filtered = mockWorkspaces.filter(workspace =>
      workspace.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workspace.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredWorkspaces(filtered)
  }, [searchQuery])

  // Focus map on search location
  const focusMapOnLocation = async (query) => {
    if (!map || !query.trim()) return

    try {
      // Simple geocoding using OpenStreetMap Nominatim
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`)
      const data = await response.json()
      
      if (data.length > 0) {
        const { lat, lon } = data[0]
        map.setView([parseFloat(lat), parseFloat(lon)], 10)
      }
    } catch (error) {
      console.log('Geocoding error:', error)
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    focusMapOnLocation(searchQuery)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Airbnb-style Search Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-4">
            {/* Search Input */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Wo möchtest du arbeiten?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-gray-800 focus:outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Filter Button */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-300 hover:border-gray-800 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>

            {/* View Toggle */}
            <div className="flex border border-gray-300 rounded-full p-1">
              <button
                type="button"
                onClick={() => setShowMap(false)}
                className={`px-4 py-2 rounded-full transition-all ${!showMap ? 'bg-gray-800 text-white' : 'text-gray-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className={`px-4 py-2 rounded-full transition-all ${showMap ? 'bg-gray-800 text-white' : 'text-gray-600'}`}
              >
                <MapPin className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex h-[calc(100vh-140px)]">
        {/* Results/List View */}
        <div className={`${showMap ? 'w-1/2' : 'w-full'} overflow-y-auto`}>
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                {filteredWorkspaces.length} Arbeitsplätze
                {searchQuery && ` in "${searchQuery}"`}
              </h1>
            </div>
            
            <div className="grid gap-6">
              {filteredWorkspaces.map((workspace) => (
                <div key={workspace.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={workspace.image}
                        alt={workspace.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{workspace.title}</h3>
                        <div className="flex items-center gap-1 text-sm">
                          <span className="text-yellow-400">★</span>
                          <span className="font-medium">{workspace.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{workspace.location}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {workspace.amenities.map((amenity, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-semibold">€{workspace.price}</span>
                          <span className="text-gray-600"> / Tag</span>
                        </div>
                        <button className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                          Buchen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map View */}
        {showMap && (
          <div className="w-1/2 relative">
            {/* Leaflet CSS */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
            />
            <div
              ref={mapRef}
              className="w-full h-full"
              style={{ minHeight: '500px' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Search