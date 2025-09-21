// Configuration Google Analytics
export const GA_CONFIG = {
  // Remplacez par votre ID de mesure Google Analytics
  MEASUREMENT_ID: 'G-XXXXXXXXXX', // À remplacer par votre vrai ID
  
  // Configuration par défaut
  DEFAULT_CONFIG: {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
    send_page_view: true
  }
};

// Fonction pour initialiser Google Analytics avec consentement
export const initializeGoogleAnalytics = (hasConsent = false) => {
  if (!hasConsent) {
    console.log('Google Analytics non initialisé - consentement refusé');
    return;
  }

  const { MEASUREMENT_ID, DEFAULT_CONFIG } = GA_CONFIG;
  
  if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-505884245') {
    console.warn('ID de mesure Google Analytics non configuré');
    return;
  }

  // Charger le script Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialiser gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, DEFAULT_CONFIG);
  
  console.log('Google Analytics initialisé avec succès');
};

// Fonction pour envoyer des événements personnalisés
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag && window.gtag.config) {
    window.gtag('event', eventName, parameters);
  }
};

// Fonction pour envoyer des conversions
export const trackConversion = (conversionId, value = null) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value
    });
  }
};

// Événements prédéfinis
export const EVENTS = {
  PAGE_VIEW: 'page_view',
  CLICK: 'click',
  SCROLL: 'scroll',
  FORM_SUBMIT: 'form_submit',
  DOWNLOAD: 'file_download',
  OUTBOUND_CLICK: 'click',
  SEARCH: 'search',
  ENGAGEMENT: 'engagement'
};

export default {
  initializeGoogleAnalytics,
  trackEvent,
  trackConversion,
  EVENTS,
  GA_CONFIG
};
