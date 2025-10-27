import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Video,
  Camera,
  Bell,
  Phone,
  Key,
  Fingerprint,
  Radio,
  Wifi,
  MonitorSpeaker,
  DoorOpen,
  Home,
  Building2,
  Star,
  Clock,
  Users,
  Award,
  X,
  PlayCircle,
  Settings,
  Smartphone,
  CloudRain
} from 'lucide-react';

const securityServices = [
  {
    id: 1,
    title: "Vidéosurveillance IP",
    shortDescription: "Installation complète de systèmes de caméras de surveillance haute définition.",
    icon: <Camera className="w-8 h-8" />,
    color: "blue",
    category: "Surveillance",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop",
    features: [
      "Caméras IP Full HD/4K",
      "Vision nocturne infrarouge",
      "Détection de mouvement",
      "Enregistrement continu 24/7",
      "Accès à distance via smartphone",
      "Stockage cloud sécurisé"
    ],
    description: "Nous installons des systèmes de vidéosurveillance professionnels adaptés à vos besoins. Caméras IP haute définition avec vision nocturne, détection intelligente et accès à distance pour surveiller vos locaux en temps réel depuis n'importe où.",
    benefits: [
      "Dissuasion des intrusions",
      "Surveillance 24/7",
      "Preuves vidéo en cas d'incident",
      "Gestion à distance",
      "Alertes en temps réel"
    ],
    technologies: ["Hikvision", "Dahua", "Axis", "Uniview", "TP-Link", "Reolink"],
    price: "À partir de 250 000 FCFA",
    duration: "2-5 jours"
  },
  {
    id: 2,
    title: "Système d'Alarme",
    shortDescription: "Installation de systèmes d'alarme anti-intrusion avec détecteurs sans fil.",
    icon: <Bell className="w-8 h-8" />,
    color: "red",
    category: "Alarme",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    features: [
      "Centrale d'alarme intelligente",
      "Détecteurs de mouvement",
      "Détecteurs d'ouverture",
      "Sirène intérieure/extérieure",
      "Commande par smartphone",
      "Notifications instantanées"
    ],
    description: "Protection optimale avec nos systèmes d'alarme connectés. Détection intelligente, sirènes puissantes et notifications instantanées sur votre téléphone. Installation sans fil pour une mise en place rapide et discrète.",
    benefits: [
      "Sécurité renforcée",
      "Dissuasion efficace",
      "Alertes immédiates",
      "Installation sans travaux",
      "Contrôle à distance"
    ],
    technologies: ["Ajax Systems", "Somfy", "Paradox", "DSC", "Honeywell"],
    price: "À partir de 180 000 FCFA",
    duration: "1-3 jours"
  },
  {
    id: 3,
    title: "Vidéophone & Interphone",
    shortDescription: "Installation de systèmes d'interphonie vidéo pour contrôler les accès.",
    icon: <MonitorSpeaker className="w-8 h-8" />,
    color: "purple",
    category: "Accès",
    image: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=800&h=600&fit=crop",
    features: [
      "Écran tactile HD",
      "Vision nocturne",
      "Communication bidirectionnelle",
      "Ouverture à distance",
      "Enregistrement des visiteurs",
      "Connexion smartphone"
    ],
    description: "Contrôlez l'accès à vos locaux avec nos systèmes de vidéophone modernes. Écran tactile haute définition, vision nocturne et ouverture à distance pour une sécurité optimale et un confort d'utilisation maximum.",
    benefits: [
      "Identification des visiteurs",
      "Contrôle d'accès sécurisé",
      "Communication claire",
      "Ouverture sans se déplacer",
      "Historique des visites"
    ],
    technologies: ["Hikvision", "Dahua", "Fermax", "Comelit", "Aiphone"],
    price: "À partir de 120 000 FCFA",
    duration: "1-2 jours"
  },
  {
    id: 4,
    title: "Serrure Automatique",
    shortDescription: "Installation de serrures connectées et systèmes de contrôle d'accès.",
    icon: <Lock className="w-8 h-8" />,
    color: "green",
    category: "Contrôle d'accès",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    features: [
      "Serrure biométrique",
      "Carte RFID & Code PIN",
      "Déverrouillage smartphone",
      "Historique d'accès",
      "Gestion multi-utilisateurs",
      "Batterie longue durée"
    ],
    description: "Modernisez vos accès avec nos serrures connectées intelligentes. Déverrouillage par empreinte digitale, carte RFID, code PIN ou smartphone. Gérez les accès facilement et suivez les entrées/sorties en temps réel.",
    benefits: [
      "Accès sans clé",
      "Sécurité renforcée",
      "Gestion simplifiée",
      "Traçabilité complète",
      "Installation facile"
    ],
    technologies: ["Yale", "August", "Nuki", "Samsung", "Xiaomi", "Aqara"],
    price: "À partir de 150 000 FCFA",
    duration: "1 jour"
  },
  {
    id: 5,
    title: "Contrôle d'Accès",
    shortDescription: "Systèmes complets de gestion d'accès pour entreprises et résidences.",
    icon: <Fingerprint className="w-8 h-8" />,
    color: "orange",
    category: "Accès",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    features: [
      "Lecteurs biométriques",
      "Badges RFID personnalisés",
      "Gestion centralisée",
      "Rapports d'accès détaillés",
      "Intégration alarme/caméra",
      "Contrôle horaire"
    ],
    description: "Solution professionnelle de contrôle d'accès pour sécuriser vos locaux. Lecteurs biométriques, badges RFID et gestion centralisée pour contrôler qui entre et sort de vos locaux à tout moment.",
    benefits: [
      "Sécurité maximale",
      "Gestion des droits d'accès",
      "Traçabilité complète",
      "Intégration système",
      "Rapports détaillés"
    ],
    technologies: ["ZKTeco", "Hikvision", "Dahua", "Suprema", "HID Global"],
    price: "À partir de 300 000 FCFA",
    duration: "3-7 jours"
  },
  {
    id: 6,
    title: "Installation Complète",
    shortDescription: "Package tout-en-un avec alarme, caméras, interphone et contrôle d'accès.",
    icon: <Shield className="w-8 h-8" />,
    color: "red",
    category: "Pack",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b54d4d?w=800&h=600&fit=crop",
    features: [
      "4-8 caméras IP",
      "Système d'alarme complet",
      "Vidéophone connecté",
      "Serrure automatique",
      "Application unifiée",
      "Maintenance 1 an incluse"
    ],
    description: "Solution de sécurité complète intégrant tous nos systèmes. Caméras, alarme, vidéophone et contrôle d'accès gérés depuis une seule application. Installation professionnelle et maintenance incluse.",
    benefits: [
      "Sécurité globale",
      "Gestion centralisée",
      "Installation clé en main",
      "Support technique inclus",
      "Tarif avantageux"
    ],
    technologies: ["Système intégré", "Application mobile", "Cloud sécurisé", "Support 24/7"],
    price: "À partir de 750 000 FCFA",
    duration: "1-2 semaines"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Fatou Sarr",
    role: "Propriétaire",
    company: "Villa Résidentielle",
    content: "Installation impeccable de vidéosurveillance. Je peux surveiller ma maison depuis mon téléphone. Équipe professionnelle et réactive.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Moussa Diallo",
    role: "Gérant",
    company: "Boutique Centre-Ville",
    content: "Le système d'alarme et les caméras ont déjà empêché plusieurs tentatives d'effraction. Investissement rentabilisé rapidement.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Aïcha Kane",
    role: "Responsable",
    company: "Immeuble de Bureaux",
    content: "Le système de contrôle d'accès facilite énormément la gestion de nos locaux. Installation rapide et formation excellente.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const stats = [
  { number: "20+", label: "Installations réalisées", icon: <Shield className="w-6 h-6" /> },
  { number: "24/7", label: "Surveillance active", icon: <Eye className="w-6 h-6" /> },
  { number: "98%", label: "Clients satisfaits", icon: <Star className="w-6 h-6" /> },
  { number: "1 ans", label: "Garantie moyenne", icon: <Award className="w-6 h-6" /> }
];

const features = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Contrôle Mobile",
    description: "Gérez tous vos systèmes depuis votre smartphone"
  },
  {
    icon: <CloudRain className="w-8 h-8" />,
    title: "Résistant aux intempéries",
    description: "Équipements adaptés au climat local"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Installation Pro",
    description: "Installation par des techniciens certifiés"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Support Technique",
    description: "Assistance et maintenance disponibles"
  }
];

export default function Security() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      red: "from-red-500 to-red-600", 
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-blue-600/5" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Systèmes de Sécurité</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Installation de
              <span className="block bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Systèmes de Sécurité
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Protégez votre domicile ou votre entreprise avec nos systèmes de surveillance,
              alarme, vidéophone et contrôle d'accès dernière génération.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-red-500 hover:text-red-600 transition-all duration-300"
              >
                Voir nos réalisations
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-lg">
                  <div className="text-red-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nos Solutions de Sécurité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des systèmes de sécurité professionnels adaptés à vos besoins,
              pour protéger ce qui compte le plus pour vous.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 bg-gradient-to-r ${getColorClasses(service.color)} text-white rounded-xl shadow-lg`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        {/* <div className="text-lg font-semibold text-red-600">{service.price}</div> */}
                        <div className="text-xs text-gray-500">{service.duration}</div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nos installations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-red-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Prêt à sécuriser vos locaux ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé.
              Nos experts vous conseilleront sur la meilleure solution pour vos besoins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Nous appeler</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Devis gratuit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className={`absolute bottom-4 left-4 p-4 bg-gradient-to-r ${getColorClasses(selectedService.color)} text-white rounded-xl shadow-lg`}>
                  {selectedService.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedService.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités</h3>
                    <div className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Avantages</h3>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Zap className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    {/* <div className="text-2xl font-bold text-red-600 mb-1">{selectedService.price}</div> */}
                    <div className="text-gray-600 flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Installation: {selectedService.duration}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mt-4 sm:mt-0">
                    <span>Demander un devis</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}