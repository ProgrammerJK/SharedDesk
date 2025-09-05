import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Zap, Sparkles, Coffee, Wifi, Users } from 'lucide-react';
import WorkspaceCard from '../components/WorkspaceCard';

// Cooler Beispiel-Daten mit mehr Vibe
const featuredWorkspaces = [
  {
    id: 1,
    title: "🌟 Rooftop Studio mit Berlin Skyline",
    location: "Berlin Mitte",
    price: 35,
    rating: 4.9,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    amenities: ['wifi', 'coffee', 'monitor'],
    tag: "🔥 Trending"
  },
  {
    id: 2,
    title: "🌿 Garden Office mit Chill Vibes",
    location: "Hamburg Eimsbüttel",
    price: 28,
    rating: 4.8,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    amenities: ['wifi', 'coffee'],
    tag: "💚 Eco"
  },
  {
    id: 3,
    title: "⚡ Minimalist Loft für Fokus",
    location: "München Schwabing",
    price: 42,
    rating: 4.7,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    amenities: ['wifi', 'monitor'],
    tag: "🎯 Focus"
  },
  {
    id: 4,
    title: "☀️ Sunny Window Spot",
    location: "Köln Innenstadt",
    price: 30,
    rating: 4.9,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=400",
    amenities: ['wifi', 'coffee', 'monitor'],
    tag: "☀️ Bright"
  }
];

function Home() {
  const [currentEmoji, setCurrentEmoji] = useState('💻');
  const emojis = ['💻', '🚀', '⚡', '🎯', '💡', '🌟'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white/90 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Deutschland's #1 Desk-Sharing App
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Quick Desk,
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Quick Work {currentEmoji}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-purple-200 font-medium max-w-3xl mx-auto">
              Skip the coffee shop hunt. Book killer workspaces in seconds. 
              <br className="hidden md:block" />
              <span className="text-pink-300">Work anywhere. Be productive. Stay inspired.</span>
            </p>
            
            {/* Search Form */}
            <div className="max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5 group-focus-within:text-pink-400 transition-colors" />
                    <input
                      type="text"
                      placeholder="Berlin, Munich, Hamburg..."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white placeholder-white/70 font-medium transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white font-medium transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5 group-focus-within:text-pink-400 transition-colors" />
                    <select className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white font-medium appearance-none transition-all">
                      <option className="bg-purple-900 text-white">1 Person</option>
                      <option className="bg-purple-900 text-white">2 People</option>
                      <option className="bg-purple-900 text-white">3+ Squad</option>
                    </select>
                  </div>
                </div>
                <Link
                  to="/search"
                  className="group w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-95"
                >
                  <Search className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                  🚀 Find My Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">2.5k+</div>
              <div className="text-purple-200 font-medium">🏠 Workspaces</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">15k+</div>
              <div className="text-purple-200 font-medium">👥 Happy Workers</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-purple-200 font-medium">🏙️ Cities</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">4.9⭐</div>
              <div className="text-purple-200 font-medium">✨ Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workspaces */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white/90 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Trending Now
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Hottest 
              </span>
              <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Workspaces 🔥
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto font-medium">
              Handpicked spaces where productivity meets inspiration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredWorkspaces.map((workspace) => (
              <WorkspaceCard key={workspace.id} workspace={workspace} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Super 
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Simple ⚡
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto font-medium">
              Book your perfect workspace in under 30 seconds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">🔍 Find & Vibe</h3>
              <p className="text-purple-200 font-medium">
                Browse killer workspaces that match your energy
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">⚡ Book Instant</h3>
              <p className="text-purple-200 font-medium">
                One-tap booking. No waiting. Just pure productivity
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-green-500 to-blue-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Coffee className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">🚀 Work & Win</h3>
              <p className="text-purple-200 font-medium">
                Get stuff done in spaces that spark creativity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to 
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Level Up? ⬆️
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 font-medium">
            Join thousands of digital nomads, freelancers & remote workers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search"
              className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95"
            >
              <Search className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
              🚀 Start Exploring
            </Link>
            <Link
              to="/host"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center shadow-lg hover:shadow-yellow-500/25 hover:scale-105 active:scale-95"
            >
              <Sparkles className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
              💰 Earn Money
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;