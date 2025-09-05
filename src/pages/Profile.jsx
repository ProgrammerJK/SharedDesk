import React from 'react'
import { User, Settings, Calendar, Heart, CreditCard, HelpCircle, LogOut } from 'lucide-react'

function Profile() {
  const user = {
    name: "Max Mustermann",
    email: "max@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    joined: "März 2023",
    verified: true
  }

  const bookings = [
    {
      id: 1,
      workspace: "Modernes Home-Office in Mitte",
      location: "Berlin Mitte",
      date: "15. Jan 2024",
      status: "upcoming",
      price: 35,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100"
    },
    {
      id: 2,
      workspace: "Gemütlicher Arbeitsplatz mit Garten",
      location: "Hamburg Eimsbüttel", 
      date: "8. Jan 2024",
      status: "completed",
      price: 28,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-600 text-sm">Dabei seit {user.joined}</p>
                {user.verified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                    ✓ Verifiziert
                  </span>
                )}
              </div>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <User className="h-4 w-4" />
                <span>Profil</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <Calendar className="h-4 w-4" />
                <span>Meine Buchungen</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <Heart className="h-4 w-4" />
                <span>Favoriten</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <CreditCard className="h-4 w-4" />
                <span>Zahlungsmethoden</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <Settings className="h-4 w-4" />
                <span>Einstellungen</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                <HelpCircle className="h-4 w-4" />
                <span>Hilfe</span>
              </a>
              <hr className="my-2" />
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-red-600 hover:bg-red-50">
                <LogOut className="h-4 w-4" />
                <span>Abmelden</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            {/* Profile Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Persönliche Informationen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vollständiger Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="Telefonnummer hinzufügen"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stadt
                  </label>
                  <input
                    type="text"
                    placeholder="Stadt hinzufügen"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <button className="mt-4 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Änderungen speichern
              </button>
            </div>

            {/* Bookings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meine Buchungen</h3>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={booking.image}
                        alt={booking.workspace}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{booking.workspace}</h4>
                        <p className="text-gray-600 text-sm">{booking.location}</p>
                        <p className="text-gray-500 text-sm">{booking.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">€{booking.price}</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {booking.status === 'upcoming' ? 'Bevorstehend' : 'Abgeschlossen'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Werde Gastgeber
                </h3>
                <p className="text-gray-600 mb-4">
                  Verdiene Geld, indem du deinen Arbeitsplatz vermietest
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  Arbeitsplatz vermieten
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
