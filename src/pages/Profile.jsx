import React, { useState } from 'react'
import { User, Settings, Calendar, Heart, CreditCard, HelpCircle, LogOut, Star, Edit3, Shield } from 'lucide-react'

function Profile() {
  const [activeTab, setActiveTab] = useState('profile')

  const user = {
    name: "Max Mustermann",
    email: "max@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    joined: "März 2023",
    verified: true,
    reviews: 4.9,
    trips: 12
  }

  const bookings = [
    {
      id: 1,
      workspace: "Stylisches Loft im Herzen von Berlin",
      location: "Berlin, Deutschland",
      date: "15. Jan 2024",
      status: "upcoming",
      price: 35,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100"
    },
    {
      id: 2,
      workspace: "Kreatives Studio mit Dachterrasse",
      location: "Hamburg, Deutschland", 
      date: "8. Jan 2024",
      status: "completed",
      price: 28,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100"
    }
  ]

  const favorites = [
    {
      id: 1,
      workspace: "Minimalistisches Büro am Hafen",
      location: "Hamburg, Deutschland",
      price: 25,
      rating: 4.92,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=150&fit=crop"
    },
    {
      id: 2,
      workspace: "Gemütlicher Arbeitsplatz im Altbau",
      location: "Köln, Deutschland",
      price: 22,
      rating: 4.88,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=150&fit=crop"
    }
  ]

  const sidebarItems = [
    { id: 'profile', label: 'Persönliche Daten', icon: User },
    { id: 'bookings', label: 'Reisen', icon: Calendar },
    { id: 'favorites', label: 'Wishlists', icon: Heart },
    { id: 'payments', label: 'Zahlungen und Auszahlungen', icon: CreditCard },
    { id: 'settings', label: 'Benachrichtigungen', icon: Settings },
    { id: 'help', label: 'Hilfe Center', icon: HelpCircle },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Persönliche Daten</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rechtlicher Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-900 focus:outline-none bg-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Dies ist der Name in deinem amtlichen Ausweisdokument.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-900 focus:outline-none bg-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      placeholder="Telefonnummer hinzufügen"
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-900 focus:outline-none bg-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Nicht für andere sichtbar.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse
                    </label>
                    <input
                      type="text"
                      placeholder="Adresse hinzufügen"
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-900 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Identität bestätigt</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Shield className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm font-medium">E-Mail-Adresse</span>
                        </div>
                        <span className="text-green-600 text-sm">Bestätigt</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Shield className="h-4 w-4 text-gray-400" />
                          </div>
                          <span className="text-sm font-medium">Telefonnummer</span>
                        </div>
                        <button className="text-rose-600 text-sm hover:underline">Hinzufügen</button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Shield className="h-4 w-4 text-gray-400" />
                          </div>
                          <span className="text-sm font-medium">Amtlicher Ausweis</span>
                        </div>
                        <button className="text-rose-600 text-sm hover:underline">Hinzufügen</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'bookings':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deine Reisen</h2>
            
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <img
                      src={booking.image}
                      alt={booking.workspace}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{booking.workspace}</h3>
                      <p className="text-gray-600 text-sm mb-2">{booking.location}</p>
                      <p className="text-gray-500 text-sm">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 mb-2">€{booking.price}</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {booking.status === 'upcoming' ? 'Bevorstehend' : 'Abgeschlossen'}
                      </span>
                      {booking.status === 'completed' && (
                        <div className="mt-2">
                          <button className="text-rose-600 text-sm hover:underline">Bewerten</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'favorites':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deine Wishlists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.workspace}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.location}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-black" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.workspace}</p>
                    <p className="font-semibold">
                      <span>€{item.price}</span>
                      <span className="text-gray-600 font-normal"> pro Tag</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'payments':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Zahlungen und Auszahlungen</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Zahlungsmethoden</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 1234</p>
                        <p className="text-sm text-gray-500">Läuft ab 12/25</p>
                      </div>
                    </div>
                    <button className="text-rose-600 text-sm hover:underline">Bearbeiten</button>
                  </div>
                  
                  <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors">
                    Zahlungsmethode hinzufügen
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Auszahlungsmethoden</h3>
                <p className="text-gray-600 text-sm mb-4">Füge eine Auszahlungsmethode hinzu, um Einnahmen zu erhalten</p>
                <button className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors">
                  Hinzufügen
                </button>
              </div>
            </div>
          </div>
        )
      
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benachrichtigungen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">E-Mail-Benachrichtigungen</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Buchungsbestätigungen</p>
                      <p className="text-sm text-gray-500">Erhalte E-Mails zu deinen Buchungen</p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </label>
                  
                  <label className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Angebote und Tipps</p>
                      <p className="text-sm text-gray-500">Erhalte E-Mails zu Sonderangeboten</p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </label>
                  
                  <label className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-gray-500">Erhalte unseren monatlichen Newsletter</p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'help':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Hilfe Center</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Häufig gestellte Fragen</h3>
                <p className="text-gray-600 text-sm mb-4">Finde Antworten auf die häufigsten Fragen</p>
                <button className="text-rose-600 hover:underline">Mehr erfahren</button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Kontakt aufnehmen</h3>
                <p className="text-gray-600 text-sm mb-4">Wir helfen dir gerne weiter</p>
                <button className="text-rose-600 hover:underline">Support kontaktieren</button>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">Gast</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-6 mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{user.reviews}</p>
                  <p className="text-xs text-gray-500">Bewertungen</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{user.trips}</p>
                  <p className="text-xs text-gray-500">Reisen</p>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  )
                })}
                
                <hr className="my-4" />
                
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50 transition-colors">
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Abmelden</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile