import { useState, useEffect } from 'react';
import { initializeGoogleAnalytics } from '../config/analytics';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

const defaultPreferences = {
  necessary: true, // Toujours true, cookies essentiels
  analytics: false,
  marketing: false,
  preferences: false
};

export const useCookies = () => {
  const [consent, setConsent] = useState(null);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);

  // Charger les préférences au montage du composant
  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Accepter tous les cookies
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setConsent({ accepted: true, timestamp: Date.now() });
    setPreferences(allAccepted);
    setShowBanner(false);
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: true, timestamp: Date.now() }));
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted));
    
    // Initialiser Google Analytics si accepté
    if (allAccepted.analytics) {
      initializeGoogleAnalytics();
    }
  };

  // Refuser tous les cookies non essentiels
  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    setConsent({ accepted: false, timestamp: Date.now() });
    setPreferences(onlyNecessary);
    setShowBanner(false);
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: false, timestamp: Date.now() }));
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(onlyNecessary));
  };

  // Sauvegarder les préférences personnalisées
  const savePreferences = (newPreferences) => {
    const updatedPreferences = { ...defaultPreferences, ...newPreferences };
    
    setConsent({ accepted: true, timestamp: Date.now() });
    setPreferences(updatedPreferences);
    setShowBanner(false);
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: true, timestamp: Date.now() }));
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(updatedPreferences));
    
    // Initialiser Google Analytics si accepté
    if (updatedPreferences.analytics) {
      initializeGoogleAnalytics();
    }
  };

  // Réinitialiser les préférences
  const resetPreferences = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_PREFERENCES_KEY);
    setConsent(null);
    setPreferences(defaultPreferences);
    setShowBanner(true);
  };

  // Vérifier si un type de cookie est accepté
  const hasConsent = (type) => {
    return preferences[type] || false;
  };

  return {
    consent,
    preferences,
    showBanner,
    acceptAll,
    rejectAll,
    savePreferences,
    resetPreferences,
    hasConsent,
    setShowBanner
  };
};


export default useCookies;
