import React from 'react'
import { Link } from 'react-router-dom'
import { Star, MapPin, Wifi, Coffee, Monitor } from 'lucide-react'

function WorkspaceCard({ workspace }) {
  return (
    <Link to={`/workspace/${workspace.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="relative h-48 bg-gray-200">
          <img
            src={workspace.image}
            alt={workspace.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full p-1">
            <div className="flex items-center space-x-1 px-2 py-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{workspace.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {workspace.location}
          </div>
          
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {workspace.title}
          </h3>
          
          <div className="flex items-center space-x-2 mb-3">
            {workspace.amenities.includes('wifi') && (
              <Wifi className="h-4 w-4 text-gray-400" />
            )}
            {workspace.amenities.includes('coffee') && (
              <Coffee className="h-4 w-4 text-gray-400" />
            )}
            {workspace.amenities.includes('monitor') && (
              <Monitor className="h-4 w-4 text-gray-400" />
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">€{workspace.price}</span>
              <span className="text-gray-500 text-sm"> / Tag</span>
            </div>
            <span className="text-sm text-gray-500">{workspace.reviews} Bewertungen</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default WorkspaceCard
