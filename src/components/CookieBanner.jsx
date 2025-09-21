import { useState } from 'react';
import { useCookies } from '../hooks/useCookies';

const CookieBanner = () => {
  const { 
    showBanner, 
    preferences, 
    acceptAll, 
    rejectAll, 
    savePreferences, 
    setShowBanner 
  } = useCookies();
  
  const [showDetails, setShowDetails] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(preferences);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    savePreferences(tempPreferences);
  };

  const handlePreferenceChange = (type, value) => {
    setTempPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Cookies essentiels',
      description: 'Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez et qui équivalent à une demande de services.',
      required: true
    },
    {
      id: 'analytics',
      title: 'Cookies d\'analyse',
      description: 'Ces cookies nous permettent de compter les visites et les sources de trafic afin d\'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires.',
      required: false
    },
    {
      id: 'marketing',
      title: 'Cookies marketing',
      description: 'Ces cookies peuvent être définis par nos partenaires publicitaires pour créer un profil de vos intérêts et vous montrer des publicités pertinentes sur d\'autres sites.',
      required: false
    },
    {
      id: 'preferences',
      title: 'Cookies de préférences',
      description: 'Ces cookies permettent au site web de se souvenir des choix que vous faites et de fournir des fonctionnalités améliorées et plus personnelles.',
      required: false
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Gestion des cookies</h2>
                <p className="text-blue-100 text-sm">Nous respectons votre vie privée</p>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
              analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
              cookies accepter. Les cookies essentiels sont nécessaires au fonctionnement 
              du site et ne peuvent pas être désactivés.
            </p>
          </div>

          {showDetails ? (
            <div className="space-y-4">
              {cookieTypes.map((type) => (
                <div key={type.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{type.title}</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tempPreferences[type.id]}
                        onChange={(e) => handlePreferenceChange(type.id, e.target.checked)}
                        disabled={type.required}
                        className="sr-only peer"
                      />
                      <div className={`w-11 h-6 rounded-full peer ${
                        type.required 
                          ? 'bg-green-500 cursor-not-allowed' 
                          : tempPreferences[type.id] 
                            ? 'bg-blue-600' 
                            : 'bg-gray-200'
                      } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">{type.description}</p>
                  {type.required && (
                    <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Requis
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setShowDetails(true)}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Personnaliser mes préférences
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
              <a href="/privacy-policy" className="hover:text-blue-600 underline">
                Politique de confidentialité
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="/cookie-policy" className="hover:text-blue-600 underline">
                Politique des cookies
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Refuser tout
              </button>
              {showDetails ? (
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sauvegarder
                </button>
              ) : (
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Accepter tout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
