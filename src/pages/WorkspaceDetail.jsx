import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, MapPin, Wifi, Coffee, Monitor, Calendar, Users, Heart, Share2 } from 'lucide-react'

// Detaillierte Workspace-Daten
const workspaceDetails = {
  1: {
    id: 1,
    title: "Modernes Home-Office in Mitte",
    location: "Berlin Mitte",
    price: 35,
    rating: 4.9,
    reviews: 47,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=800"
    ],
    amenities: ['wifi', 'coffee', 'monitor'],
    description: "Ein wunderschöner, moderner Arbeitsplatz in einem ruhigen Hinterhof in Berlin Mitte. Perfekt für konzentriertes Arbeiten mit allem was du brauchst.",
    host: {
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      joined: "2022",
      verified: true
    },
    rules: [
      "Rauchen ist nicht gestattet",
      "Bitte leise arbeiten",
      "Küche kann mitbenutzt werden"
    ],
    availability: true
  }
  // Weitere Details können hier hinzugefügt werden
}

function WorkspaceDetail() {
  const { id } = useParams()
  const workspace = workspaceDetails[id]
  const [selectedImage, setSelectedImage] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  
  if (!workspace) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Arbeitsplatz nicht gefunden</h1>
        </div>
      </div>
    )
  }
  
  const totalPrice = workspace.price * (checkIn && checkOut ? 
    Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) : 1)
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {workspace.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                {workspace.rating} ({workspace.reviews} Bewertungen)
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {workspace.location}
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <Share2 className="h-4 w-4" />
              <span className="hidden md:inline">Teilen</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
              <Heart className="h-4 w-4" />
              <span className="hidden md:inline">Speichern</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 rounded-xl overflow-hidden">
        <div className="md:row-span-2">
          <img
            src={workspace.images[selectedImage]}
            alt={workspace.title}
            className="w-full h-64 md:h-96 object-cover cursor-pointer"
            onClick={() => setSelectedImage(0)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {workspace.images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${workspace.title} ${index + 2}`}
              className="w-full h-31 md:h-47 object-cover cursor-pointer hover:opacity-90"
              onClick={() => setSelectedImage(index + 1)}
            />
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Host Info */}
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
            <img
              src={workspace.host.avatar}
              alt={workspace.host.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                Vermietet von {workspace.host.name}
              </h3>
              <p className="text-gray-600 text-sm">
                Gastgeber seit {workspace.host.joined}
                {workspace.host.verified && (
                  <span className="ml-2 text-blue-600">✓ Verifiziert</span>
                )}
              </p>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Beschreibung</h3>
            <p className="text-gray-700 leading-relaxed">
              {workspace.description}
            </p>
          </div>
          
          {/* Amenities */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Ausstattung</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {workspace.amenities.includes('wifi') && (
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-gray-400" />
                  <span>Kostenloses WLAN</span>
                </div>
              )}
              {workspace.amenities.includes('coffee') && (
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-gray-400" />
                  <span>Kaffee & Tee</span>
                </div>
              )}
              {workspace.amenities.includes('monitor') && (
                <div className="flex items-center space-x-3">
                  <Monitor className="h-5 w-5 text-gray-400" />
                  <span>Externer Monitor</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Rules */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Hausregeln</h3>
            <ul className="space-y-2">
              {workspace.rules.map((rule, index) => (
                <li key={index} className="text-gray-700">
                  • {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-8">
            <div className="mb-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-gray-900">
                  €{workspace.price}
                </span>
                <span className="text-gray-600">/ Tag</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Personen
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value={1}>1 Person</option>
                  <option value={2}>2 Personen</option>
                  <option value={3}>3 Personen</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4">
              Reservieren
            </button>
            
            {checkIn && checkOut && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>€{workspace.price} x {Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))} Tage</span>
                  <span>€{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service-Gebühr</span>
                  <span>€{Math.round(totalPrice * 0.1)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Gesamt</span>
                  <span>€{totalPrice + Math.round(totalPrice * 0.1)}</span>
                </div>
              </div>
            )}
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Du wirst noch nicht belastet
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceDetail
