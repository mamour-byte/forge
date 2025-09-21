import { useState } from 'react';
import { useCookies } from '../hooks/useCookies';

const CookieSettings = () => {
  const { 
    preferences, 
    savePreferences, 
    resetPreferences, 
    hasConsent 
  } = useCookies();
  
  const [tempPreferences, setTempPreferences] = useState(preferences);
  const [showModal, setShowModal] = useState(false);

  const handlePreferenceChange = (type, value) => {
    setTempPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSave = () => {
    savePreferences(tempPreferences);
    setShowModal(false);
  };

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Cookies essentiels',
      description: 'Ces cookies sont nécessaires au fonctionnement du site web et ne peuvent pas être désactivés.',
      required: true
    },
    {
      id: 'analytics',
      title: 'Cookies d\'analyse',
      description: 'Ces cookies nous permettent de compter les visites et les sources de trafic.',
      required: false
    },
    {
      id: 'marketing',
      title: 'Cookies marketing',
      description: 'Ces cookies peuvent être définis par nos partenaires publicitaires.',
      required: false
    },
    {
      id: 'preferences',
      title: 'Cookies de préférences',
      description: 'Ces cookies permettent au site de se souvenir de vos choix.',
      required: false
    }
  ];

  return (
    <>
      {/* Bouton pour ouvrir les paramètres */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 left-6 bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors z-40"
        title="Paramètres des cookies"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Modal des paramètres */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Paramètres des cookies</h2>
                <button
                  onClick={() => setShowModal(false)}
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
                  Gérez vos préférences de cookies. Vous pouvez activer ou désactiver 
                  différents types de cookies selon vos besoins.
                </p>
              </div>

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
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                <button
                  onClick={resetPreferences}
                  className="text-sm text-gray-600 hover:text-red-600 underline"
                >
                  Réinitialiser les préférences
                </button>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieSettings;
