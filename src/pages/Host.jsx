import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  MapPin, 
  Euro, 
  Monitor, 
  Wifi, 
  MoveVertical,
  Coffee,
  Car,
  Zap,
  Camera,
  CheckCircle,
  ArrowLeft,
  Star,
  Users,
  Clock,
  Shield
} from 'lucide-react';

function Host() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basis Info
    title: '',
    description: '',
    location: '',
    address: '',
    
    // Preise
    hourlyRate: '',
    dailyRate: '',
    weeklyRate: '',
    
    // Ausstattung
    monitors: '1',
    internetSpeed: '',
    adjustableDesk: false,
    coffeeIncluded: false,
    parkingAvailable: false,
    
    // Verfügbarkeit
    availableDays: [],
    availableHours: {
      start: '09:00',
      end: '18:00'
    },
    
    // Bilder
    images: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter(d => d !== day)
        : [...prev.availableDays, day]
    }));
  };

  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const totalSteps = 4;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">📍 Tell uns von deinem Space</h2>
              <p className="text-purple-200">Mach deinen Arbeitsplatz unwiderstehlich</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-3">Workspace Titel *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="z.B. ☀️ Sunny Designer Desk mit Berlin View"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white placeholder-white/70 font-medium transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-3">Beschreibung *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Beschreibe deinen Workspace. Was macht ihn besonders? Welche Vibes erwartet deine Gäste?"
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white placeholder-white/70 font-medium transition-all resize-none"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <MapPin className="absolute left-4 top-5 text-white/70 h-5 w-5" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Stadt, z.B. Berlin Mitte"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white placeholder-white/70 font-medium transition-all"
                  />
                  <label className="block text-white font-medium mb-3">Standort *</label>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-3">Genaue Adresse (privat)</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Nur für Buchungsbestätigung sichtbar"
                    rows={3}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white placeholder-white/70 font-medium transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">💰 Preise festlegen</h2>
              <p className="text-purple-200">Was ist deine Zeit und dein Space wert?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-pink-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Stunden-Rate</h3>
                </div>
                <div className="relative">
                  <Euro className="absolute left-3 top-4 text-white/70 h-5 w-5" />
                  <input
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                    placeholder="25"
                    className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white placeholder-white/70 font-bold text-2xl"
                  />
                </div>
                <p className="text-purple-200 mt-2 text-sm">Pro Stunde</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 transform scale-105">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-pink-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Tages-Rate</h3>
                  <span className="ml-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Popular</span>
                </div>
                <div className="relative">
                  <Euro className="absolute left-3 top-4 text-white/70 h-5 w-5" />
                  <input
                    type="number"
                    value={formData.dailyRate}
                    onChange={(e) => handleInputChange('dailyRate', e.target.value)}
                    placeholder="120"
                    className="w-full pl-10 pr-4 py-4 bg-white/10 border border-pink-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white placeholder-white/70 font-bold text-2xl"
                  />
                </div>
                <p className="text-purple-200 mt-2 text-sm">Pro Tag (8h)</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-yellow-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Wochen-Rate</h3>
                </div>
                <div className="relative">
                  <Euro className="absolute left-3 top-4 text-white/70 h-5 w-5" />
                  <input
                    type="number"
                    value={formData.weeklyRate}
                    onChange={(e) => handleInputChange('weeklyRate', e.target.value)}
                    placeholder="500"
                    className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 text-white placeholder-white/70 font-bold text-2xl"
                  />
                </div>
                <p className="text-purple-200 mt-2 text-sm">Pro Woche (40h)</p>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">⚡ Tech & Ausstattung</h2>
              <p className="text-purple-200">Was macht deinen Workspace produktiv?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-4">Anzahl Monitore *</label>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, '3+'].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleInputChange('monitors', num.toString())}
                        className={`py-3 px-4 rounded-xl font-bold transition-all ${
                          formData.monitors === num.toString()
                            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                            : 'bg-white/10 border border-white/20 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        <Monitor className="h-5 w-5 mx-auto mb-1" />
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-3">Internet Geschwindigkeit *</label>
                  <div className="relative">
                    <Wifi className="absolute left-4 top-4 text-white/70 h-5 w-5" />
                    <select
                      value={formData.internetSpeed}
                      onChange={(e) => handleInputChange('internetSpeed', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/20 text-white font-medium appearance-none transition-all"
                    >
                      <option value="" className="bg-purple-900">Wähle Geschwindigkeit</option>
                      <option value="50" className="bg-purple-900">50 Mbit/s - Basic</option>
                      <option value="100" className="bg-purple-900">100 Mbit/s - Fast</option>
                      <option value="250" className="bg-purple-900">250 Mbit/s - Super Fast</option>
                      <option value="500" className="bg-purple-900">500+ Mbit/s - Ultra Fast</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-4">Extras & Amenities</label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.adjustableDesk}
                        onChange={(e) => handleInputChange('adjustableDesk', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg mr-3 flex items-center justify-center transition-colors ${
                        formData.adjustableDesk ? 'bg-pink-500' : 'border-2 border-white/30'
                      }`}>
                        {formData.adjustableDesk && <CheckCircle className="h-4 w-4 text-white" />}
                      </div>
                      <MoveVertical className="h-5 w-5 text-white/70 mr-3" />
                      <span className="text-white font-medium">Höhenverstellbarer Schreibtisch</span>
                    </label>
                    
                    <label className="flex items-center p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.coffeeIncluded}
                        onChange={(e) => handleInputChange('coffeeIncluded', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg mr-3 flex items-center justify-center transition-colors ${
                        formData.coffeeIncluded ? 'bg-pink-500' : 'border-2 border-white/30'
                      }`}>
                        {formData.coffeeIncluded && <CheckCircle className="h-4 w-4 text-white" />}
                      </div>
                      <Coffee className="h-5 w-5 text-white/70 mr-3" />
                      <span className="text-white font-medium">Kaffee & Getränke inklusive</span>
                    </label>
                    
                    <label className="flex items-center p-4 bg-white/5 rounded-xl border border-white/20 hover:bg-white/10 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.parkingAvailable}
                        onChange={(e) => handleInputChange('parkingAvailable', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg mr-3 flex items-center justify-center transition-colors ${
                        formData.parkingAvailable ? 'bg-pink-500' : 'border-2 border-white/30'
                      }`}>
                        {formData.parkingAvailable && <CheckCircle className="h-4 w-4 text-white" />}
                      </div>
                      <Car className="h-5 w-5 text-white/70 mr-3" />
                      <span className="text-white font-medium">Parkplatz verfügbar</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">📅 Verfügbarkeit & Fotos</h2>
              <p className="text-purple-200">Wann ist dein Space verfügbar?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-4">Verfügbare Tage</label>
                  <div className="grid grid-cols-4 gap-2">
                    {days.map((day) => (
                      <button
                        key={day}
                        onClick={() => handleDayToggle(day)}
                        className={`py-3 px-2 rounded-xl font-bold transition-all ${
                          formData.availableDays.includes(day)
                            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                            : 'bg-white/10 border border-white/20 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-4">Verfügbare Zeiten</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Von</label>
                      <input
                        type="time"
                        value={formData.availableHours.start}
                        onChange={(e) => handleInputChange('availableHours', {...formData.availableHours, start: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Bis</label>
                      <input
                        type="time"
                        value={formData.availableHours.end}
                        onChange={(e) => handleInputChange('availableHours', {...formData.availableHours, end: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-4">Fotos hochladen</label>
                <div className="border-2 border-dashed border-white/30 rounded-2xl p-8 text-center hover:border-pink-400/50 transition-colors">
                  <Camera className="h-12 w-12 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 mb-2">Drag & Drop oder klicken</p>
                  <p className="text-white/50 text-sm">PNG, JPG bis 10MB</p>
                  <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-2 px-6 rounded-xl transition-all">
                    <Upload className="h-4 w-4 mr-2 inline" />
                    Fotos wählen
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/"
              className="flex items-center text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <div className="flex items-center space-x-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i + 1 <= currentStep 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Werde 
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Host 🏠
              </span>
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Verdiene Geld mit deinem ungenutzten Arbeitsplatz
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === 1
                  ? 'bg-white/5 text-white/50 cursor-not-allowed'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </button>
            
            <div className="text-center">
              <p className="text-white/70 text-sm">
                Schritt {currentStep} von {totalSteps}
              </p>
            </div>
            
            {currentStep === totalSteps ? (
              <button
                className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center shadow-lg hover:shadow-green-500/25 hover:scale-105 active:scale-95"
              >
                <Shield className="h-5 w-5 mr-2" />
                🚀 Workspace veröffentlichen
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95"
              >
                Weiter
                <ArrowLeft className="h-5 w-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">🛡️ 100% Sicher</h3>
            <p className="text-purple-200 text-sm">Verifizierte Nutzer & sichere Zahlung</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">👥 Community</h3>
            <p className="text-purple-200 text-sm">Teil einer wachsenden Workspace-Community</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-2">💰 Geld verdienen</h3>
            <p className="text-purple-200 text-sm">Bis zu €500/Monat zusätzliches Einkommen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Host;