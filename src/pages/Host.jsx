import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Upload, 
  MapPin, 
  Euro, 
  Monitor, 
  Wifi, 
  Coffee,
  Car,
  Camera,
  CheckCircle,
  ArrowLeft,
  Star,
  Users,
  Clock,
  Shield,
  ChevronRight,
  Home,
  Heart
} from 'lucide-react'

function Host() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    address: '',
    dailyRate: '',
    amenities: [],
    images: []
  });

  const totalSteps = 3;

  const amenityOptions = [
    { id: 'wifi', name: 'WLAN', icon: Wifi },
    { id: 'coffee', name: 'Kaffee & Tee', icon: Coffee },
    { id: 'monitor', name: 'Monitor', icon: Monitor },
    { id: 'parking', name: 'Parkplatz', icon: Car }
  ];

  const handleAmenityToggle = (amenityId) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Erzähle uns von deinem Arbeitsplatz
              </h2>
              <p className="text-lg text-gray-600">
                Teile die wichtigsten Informationen über deinen Workspace
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titel deines Arbeitsplatzes
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="z.B. Helles Büro im Herzen von Berlin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beschreibung
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Beschreibe deinen Arbeitsplatz. Was macht ihn besonders?"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Standort
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Berlin, Deutschland"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preis und Ausstattung
              </h2>
              <p className="text-lg text-gray-600">
                Lege deinen Tagespreis fest und wähle die verfügbaren Annehmlichkeiten
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Euro className="inline h-4 w-4 mr-1" />
                  Preis pro Tag
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">€</span>
                  <input
                    type="number"
                    value={formData.dailyRate}
                    onChange={(e) => setFormData({...formData, dailyRate: e.target.value})}
                    placeholder="25"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-lg font-semibold"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Empfohlener Preis: €20-40 pro Tag</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Ausstattung und Annehmlichkeiten
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {amenityOptions.map((amenity) => {
                    const IconComponent = amenity.icon;
                    const isSelected = formData.amenities.includes(amenity.id);
                    
                    return (
                      <button
                        key={amenity.id}
                        onClick={() => handleAmenityToggle(amenity.id)}
                        className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center space-y-2 ${
                          isSelected
                            ? 'border-rose-500 bg-rose-50 text-rose-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        <IconComponent className="h-6 w-6" />
                        <span className="text-sm font-medium">{amenity.name}</span>
                        {isSelected && <CheckCircle className="h-4 w-4 text-rose-500" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fotos hinzufügen
              </h2>
              <p className="text-lg text-gray-600">
                Zeige deinen Arbeitsplatz von seiner besten Seite
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Arbeitsplatz-Fotos
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Fotos hochladen</p>
                  <p className="text-gray-500 mb-4">Drag & Drop oder klicke hier</p>
                  <button className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors font-medium">
                    <Upload className="h-4 w-4 inline mr-2" />
                    Dateien auswählen
                  </button>
                  <p className="text-xs text-gray-400 mt-4">PNG, JPG bis zu 10MB pro Datei</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Camera className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-2">Foto-Tipps</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Zeige den kompletten Arbeitsplatz</li>
                      <li>• Nutze natürliches Licht</li>
                      <li>• Halte den Bereich sauber und ordentlich</li>
                      <li>• Lade mindestens 3-5 Fotos hoch</li>
                    </ul>
                  </div>
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück
            </Link>
            
            {/* Progress Indicator */}
            <div className="flex items-center space-x-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i + 1 <= currentStep 
                      ? 'bg-rose-500' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="text-sm text-gray-500">
              Schritt {currentStep} von {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-rose-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Werde Gastgeber bei
            <span className="block text-rose-500">WorkSpot</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verdiene Geld mit deinem ungenutzten Arbeitsplatz und hilf anderen beim produktiven Arbeiten
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          {renderStepContent()}
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </button>
            
            {currentStep === totalSteps ? (
              <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors font-semibold flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Arbeitsplatz veröffentlichen
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors font-semibold flex items-center"
              >
                Weiter
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            )}
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Sicher & geschützt</h3>
            <p className="text-gray-600 text-sm">Verifizierte Nutzer und sichere Zahlungen</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Starke Community</h3>
            <p className="text-gray-600 text-sm">Teil einer wachsenden Workspace-Community</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Extra Einkommen</h3>
            <p className="text-gray-600 text-sm">Verdiene bis zu €500 zusätzlich im Monat</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Host