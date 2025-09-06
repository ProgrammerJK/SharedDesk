import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, MapPin, Wifi, Coffee, Monitor, Calendar, Users, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react'

// Detaillierte Workspace-Daten
const workspaceDetails = {
  1: {
    id: 1,
    title: "Stylisches Loft im Herzen von Berlin",
    location: "Berlin, Deutschland",
    price: 28,
    rating: 4.95,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=800",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
    ],
    amenities: ['wifi', 'coffee', 'monitor', 'parking'],
    description: "Ein wunderschöner, moderner Arbeitsplatz in einem ruhigen Hinterhof in Berlin Mitte. Perfekt für konzentriertes Arbeiten mit allem was du brauchst. Das Loft bietet viel natürliches Licht und eine inspirierende Atmosphäre für kreative Arbeit.",
    host: {
      name: "Sarah",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      joined: "2022",
      verified: true,
      isSuperhost: true
    },
    rules: [
      "Rauchen ist nicht gestattet",
      "Bitte leise arbeiten",
      "Küche kann mitbenutzt werden",
      "Check-in: 9:00 AM",
      "Check-out: 6:00 PM"
    ],
    highlights: [
      "Ganzer Arbeitsplatz für dich",
      "Selbst einchecken",
      "Großartiger Check-in-Erlebnis",
      "Kostenloses Parken"
    ],
    availability: true
  }
}

function WorkspaceDetail() {
  const { id } = useParams()
  const workspace = workspaceDetails[id] || workspaceDetails[1] // Fallback
  const [selectedImage, setSelectedImage] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  
  const totalDays = checkIn && checkOut ? 
    Math.max(1, Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))) : 1
  const totalPrice = workspace.price * totalDays
  const serviceFee = Math.round(totalPrice * 0.14)
  const finalTotal = totalPrice + serviceFee
  
  const amenityIcons = {
    wifi: { icon: Wifi, label: 'WLAN' },
    coffee: { icon: Coffee, label: 'Kaffee & Tee' },
    monitor: { icon: Monitor, label: 'Externer Monitor' },
    parking: { icon: Users, label: 'Parkplatz' }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              {workspace.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current text-black" />
                <span className="font-medium">{workspace.rating}</span>
                <span className="text-gray-600">·</span>
                <span className="underline text-gray-900 cursor-pointer">{workspace.reviews} Bewertungen</span>
              </div>
              <span className="text-gray-600">·</span>
              <span className="underline text-gray-900 cursor-pointer">{workspace.location}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="underline">Teilen</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
              <Heart className="h-4 w-4" />
              <span className="underline">Speichern</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Images - Airbnb Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative">
          <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden h-96">
            {/* Main Image */}
            <div className="col-span-2 row-span-2">
              <img
                src={workspace.images[0]}
                alt={workspace.title}
                className="w-full h-full object-cover hover:brightness-110 transition-all cursor-pointer"
                onClick={() => setShowAllPhotos(true)}
              />
            </div>
            
            {/* Side Images */}
            {workspace.images.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${workspace.title} ${index + 2}`}
                className="w-full h-full object-cover hover:brightness-110 transition-all cursor-pointer"
                onClick={() => setShowAllPhotos(true)}
              />
            ))}
          </div>
          
          {/* Show all photos button */}
          <button 
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-4 right-6 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            Alle Fotos anzeigen
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Host Info */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    Arbeitsplatz von {workspace.host.name}
                  </h2>
                  <p className="text-gray-600">
                    Bis zu {guests} Gäste
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  {workspace.host.isSuperhost && (
                    <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">Superhost</span>
                    </div>
                  )}
                  <img
                    src={workspace.host.avatar}
                    alt={workspace.host.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="space-y-4">
                {workspace.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-900">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                {workspace.description}
              </p>
              <button className="text-gray-900 underline font-medium mt-2">
                Mehr anzeigen
              </button>
            </div>
            
            {/* Amenities */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Was dieser Ort bietet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workspace.amenities.map((amenity) => {
                  const amenityInfo = amenityIcons[amenity]
                  if (!amenityInfo) return null
                  const IconComponent = amenityInfo.icon
                  
                  return (
                    <div key={amenity} className="flex items-center space-x-4 py-2">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                      <span className="text-gray-900">{amenityInfo.label}</span>
                    </div>
                  )
                })}
              </div>
              <button className="mt-4 border border-gray-300 px-6 py-2 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                Alle {workspace.amenities.length} Ausstattungsmerkmale anzeigen
              </button>
            </div>

            {/* Reviews */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="h-5 w-5 fill-current text-black" />
                <span className="text-xl font-semibold">{workspace.rating}</span>
                <span className="text-xl font-semibold">·</span>
                <span className="text-xl font-semibold">{workspace.reviews} Bewertungen</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* Sample Reviews */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                      alt="Max"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold">Max</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500 text-sm">Januar 2024</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Perfekter Arbeitsplatz! Sehr ruhig und gut ausgestattet. Sarah ist eine tolle Gastgeberin.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                      alt="Lisa"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold">Lisa</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500 text-sm">Dezember 2023</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Wunderbare Atmosphäre zum Arbeiten. Kann ich nur weiterempfehlen!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="border border-gray-300 px-6 py-3 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                Alle {workspace.reviews} Bewertungen anzeigen
              </button>
            </div>
          </div>
          
          {/* Booking Card - Airbnb Style */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl p-6 sticky top-8">
              <div className="flex items-baseline justify-between mb-6">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-semibold text-gray-900">
                    €{workspace.price}
                  </span>
                  <span className="text-gray-600">Tag</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Star className="h-4 w-4 fill-current text-black" />
                  <span className="font-medium">{workspace.rating}</span>
                  <span className="text-gray-600">·</span>
                  <span className="underline text-gray-600">{workspace.reviews} Bewertungen</span>
                </div>
              </div>
              
              <div className="border border-gray-300 rounded-lg mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-5 border-r border-gray-300">
                    <label className="block text-xs font-semibold text-gray-900 mb-2">
                      ANREISE
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-lg font-medium border-none outline-none bg-transparent cursor-pointer"
                    />
                  </div>
                  <div className="p-5">
                    <label className="block text-xs font-semibold text-gray-900 mb-2">
                      ABREISE
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-lg font-medium border-none outline-none bg-transparent cursor-pointer"
                    />
                  </div>
                </div>
                <div className="border-t border-gray-300 p-5">
                  <label className="block text-xs font-semibold text-gray-900 mb-2">
                    GÄSTE
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full text-lg font-medium border-none outline-none bg-transparent cursor-pointer"
                  >
                    <option value={1}>1 Gast</option>
                    <option value={2}>2 Gäste</option>
                    <option value={3}>3 Gäste</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-rose-600 hover:to-pink-700 transition-colors mb-4">
                Reservieren
              </button>
              
              <p className="text-sm text-gray-600 text-center mb-4">
                Du wirst noch nicht belastet
              </p>
              
              {checkIn && checkOut && totalDays > 0 && (
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="underline">€{workspace.price} x {totalDays} {totalDays === 1 ? 'Tag' : 'Tage'}</span>
                    <span>€{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="underline">WorkSpot-Servicegebühr</span>
                    <span>€{serviceFee}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Gesamt</span>
                    <span>€{finalTotal}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Wo du sein wirst</h3>
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-600">Karte wird hier angezeigt</p>
          </div>
          <p className="mt-4 text-gray-700">{workspace.location}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceDetail