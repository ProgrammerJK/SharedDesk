import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Heart } from 'lucide-react'

function WorkspaceCard({ workspace }) {
  return (
    <Link to={`/workspace/${workspace.id}`} className="group cursor-pointer">
      <div className="relative mb-3">
        <img
          src={workspace.image}
          alt={workspace.title}
          className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Heart Icon - Airbnb Style */}
        <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
          <Heart className="h-5 w-5 text-white hover:text-rose-500 drop-shadow-lg" />
        </button>
        
        {/* Host Badge */}
        {workspace.host === "Superhost" && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
            Superhost
          </div>
        )}
        {workspace.host === "Neu" && (
          <div className="absolute top-3 left-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
            Neu
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 truncate">
            {workspace.location}
          </h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Star className="h-4 w-4 fill-current text-black" />
            <span className="text-sm font-medium">{workspace.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm truncate">{workspace.title}</p>
        
        <div className="pt-1">
          <span className="font-semibold text-gray-900">€{workspace.price}</span>
          <span className="text-gray-600"> pro Tag</span>
        </div>
      </div>
    </Link>
  )
}

export default WorkspaceCard