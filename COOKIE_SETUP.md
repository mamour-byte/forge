# Configuration du Système de Cookies RGPD

Ce guide vous explique comment configurer et utiliser le système de gestion des cookies conforme au RGPD intégré à votre site.

## 🚀 Fonctionnalités

- ✅ Bannière de cookies conforme RGPD
- ✅ Gestion des préférences par catégorie
- ✅ Intégration Google Analytics avec consentement
- ✅ Interface utilisateur moderne et responsive
- ✅ Sauvegarde des préférences en localStorage
- ✅ Bouton de paramètres accessible à tout moment

## 📋 Configuration Google Analytics

### 1. Obtenir votre ID de mesure

1. Connectez-vous à [Google Analytics](https://analytics.google.com/)
2. Créez une propriété pour votre site web
3. Copiez votre ID de mesure (format: `G-XXXXXXXXXX`)

### 2. Configurer l'ID dans le code

Ouvrez le fichier `src/config/analytics.js` et remplacez :

```javascript
MEASUREMENT_ID: 'G-XXXXXXXXXX', // Remplacez par votre vrai ID
```

Par votre vrai ID de mesure :

```javascript
MEASUREMENT_ID: 'G-ABC123DEF4', // Votre ID de mesure
```

## 🎛️ Types de Cookies Gérés

### 1. Cookies Essentiels (Toujours actifs)
- Nécessaires au fonctionnement du site
- Ne peuvent pas être désactivés
- Conformes au RGPD

### 2. Cookies d'Analyse
- Google Analytics
- Mesure de performance
- Statistiques de visite

### 3. Cookies Marketing
- Publicités ciblées
- Réseaux sociaux
- Partenaires publicitaires

### 4. Cookies de Préférences
- Paramètres utilisateur
- Personnalisation
- Mémorisation des choix

## 🔧 Personnalisation

### Modifier les messages

Dans `src/components/CookieBanner.jsx`, vous pouvez personnaliser :

- Les textes de la bannière
- Les descriptions des cookies
- Les messages d'information

### Changer les couleurs

Les couleurs sont définies avec Tailwind CSS. Vous pouvez modifier :

- `bg-blue-600` pour la couleur principale
- `bg-green-500` pour les éléments d'acceptation
- `bg-gray-*` pour les éléments neutres

### Ajouter de nouveaux types de cookies

1. Modifiez `defaultPreferences` dans `src/hooks/useCookies.js`
2. Ajoutez le nouveau type dans `cookieTypes` des composants
3. Mettez à jour la logique d'initialisation si nécessaire

## 📱 Utilisation

### Pour les utilisateurs

1. **Première visite** : La bannière s'affiche automatiquement
2. **Choix rapide** : "Accepter tout" ou "Refuser tout"
3. **Personnalisation** : "Personnaliser mes préférences"
4. **Modification** : Bouton paramètres (icône engrenage) en bas à gauche

### Pour les développeurs

```javascript
import { useCookies } from './hooks/useCookies';

function MyComponent() {
  const { hasConsent, preferences } = useCookies();
  
  // Vérifier si les cookies d'analyse sont acceptés
  if (hasConsent('analytics')) {
    // Initialiser Google Analytics
    initializeGoogleAnalytics();
  }
}
```

## 🛡️ Conformité RGPD

### Droits des utilisateurs

- ✅ **Droit à l'information** : Transparence sur l'utilisation des cookies
- ✅ **Droit de consentement** : Choix libre et éclairé
- ✅ **Droit de retrait** : Possibilité de modifier les préférences
- ✅ **Droit d'opposition** : Refus des cookies non essentiels

### Bonnes pratiques

1. **Consentement explicite** : Pas de cookies avant acceptation
2. **Granularité** : Choix par catégorie de cookies
3. **Facilité d'accès** : Paramètres toujours disponibles
4. **Transparence** : Informations claires sur chaque type

## 🔍 Vérification

### Tester le système

1. **Vider le localStorage** : `localStorage.clear()` dans la console
2. **Recharger la page** : La bannière doit réapparaître
3. **Tester les options** : Accepter/refuser/personnaliser
4. **Vérifier Google Analytics** : Dans les outils de développement

### Debug

```javascript
// Vérifier les préférences actuelles
console.log(localStorage.getItem('cookie-preferences'));

// Vérifier le consentement
console.log(localStorage.getItem('cookie-consent'));

// Réinitialiser (pour les tests)
localStorage.removeItem('cookie-consent');
localStorage.removeItem('cookie-preferences');
```

## 📞 Support

Pour toute question ou problème :

1. Vérifiez la console du navigateur pour les erreurs
2. Assurez-vous que votre ID Google Analytics est correct
3. Testez avec le localStorage vidé
4. Vérifiez que tous les composants sont bien importés

## 🔄 Mises à jour

Pour mettre à jour le système :

1. Sauvegardez vos personnalisations
2. Mettez à jour les fichiers
3. Testez sur un environnement de développement
4. Déployez en production

---

**Note** : Ce système est conçu pour être conforme au RGPD, mais il est recommandé de faire valider votre implémentation par un expert juridique selon votre juridiction.
