import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Server, 
  Wifi, 
  Cable,
  ArrowRight, 
  CheckCircle, 
  Zap,
  Users,
  TrendingUp,
  Star,
  Phone,
  Router,
  HardDrive,
  Wrench,
  Activity,
  Settings,
  Globe,
  Lock,
  Clock,
  Award,
  X,
  MonitorSpeaker,
  Smartphone,
  Building2,
  Layers,
  MessageCircle
} from 'lucide-react';

const networkServices = [
  {
    id: 1,
    title: "Câblage Réseau",
    shortDescription: "Installation complète de câblage structuré pour réseaux informatiques.",
    icon: <Cable className="w-8 h-8" />,
    color: "blue",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    features: [
      "Câblage cuivre Cat5e/Cat6/Cat6A",
      "Fibre optique monomode/multimode",
      "Installation baies de brassage",
      "Certification des liens",
      "Documentation complète",
      "Respect normes TIA/EIA"
    ],
    description: "Installation professionnelle de câblage réseau structuré pour votre entreprise. Câbles cuivre et fibre optique, baies de brassage, panneaux de connexion et certification complète selon les normes internationales.",
    benefits: [
      "Performance optimale",
      "Installation propre et durable",
      "Évolutivité garantie",
      "Certification officielle",
      "Documentation détaillée"
    ],
    technologies: ["Cat6/Cat6A", "Fibre optique", "Legrand", "Schneider", "Panduit", "Fluke"],
    price: "À partir de 15 000 FCFA/point",
    duration: "3-10 jours"
  },
  {
    id: 2,
    title: "Configuration Serveur",
    shortDescription: "Installation et configuration de serveurs physiques et virtuels.",
    icon: <Server className="w-8 h-8" />,
    color: "purple",
    category: "Serveur",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    features: [
      "Serveurs Windows/Linux",
      "Active Directory",
      "Serveurs de fichiers",
      "Serveurs de messagerie",
      "Virtualisation (VMware/Hyper-V)",
      "Sauvegardes automatiques"
    ],
    description: "Configuration professionnelle de serveurs adaptés à vos besoins. Installation de systèmes d'exploitation, configuration de services, mise en place de la virtualisation et sécurisation complète.",
    benefits: [
      "Centralisation des données",
      "Gestion simplifiée",
      "Sécurité renforcée",
      "Haute disponibilité",
      "Support technique"
    ],
    technologies: ["Windows Server", "Linux", "VMware", "Hyper-V", "Active Directory", "Exchange"],
    price: "À partir de 300 000 FCFA",
    duration: "2-5 jours"
  },
  {
    id: 3,
    title: "Routage & Switching",
    shortDescription: "Configuration de routeurs et switches pour un réseau performant.",
    icon: <Router className="w-8 h-8" />,
    color: "green",
    category: "Équipement",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&h=600&fit=crop",
    features: [
      "Configuration routeurs",
      "Switches managés",
      "VLANs et segmentation",
      "Routage inter-VLAN",
      "QoS et priorisation",
      "Redondance et haute disponibilité"
    ],
    description: "Installation et configuration de routeurs et switches professionnels. Segmentation réseau avec VLANs, routage avancé, qualité de service et redondance pour garantir la disponibilité de votre réseau.",
    benefits: [
      "Performance réseau optimale",
      "Sécurité par segmentation",
      "Gestion centralisée",
      "Évolutivité",
      "Monitoring avancé"
    ],
    technologies: ["Cisco", "HP/Aruba", "Ubiquiti", "Mikrotik", "TP-Link", "D-Link"],
    price: "À partir de 200 000 FCFA",
    duration: "2-4 jours"
  },
  {
    id: 4,
    title: "Réseau WiFi Pro",
    shortDescription: "Déploiement de réseaux WiFi professionnels haute performance.",
    icon: <Wifi className="w-8 h-8" />,
    color: "orange",
    category: "Sans-fil",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&h=600&fit=crop",
    features: [
      "Points d'accès professionnels",
      "WiFi 6/6E haute densité",
      "Contrôleur centralisé",
      "Authentification sécurisée",
      "Portail captif",
      "Roaming transparent"
    ],
    description: "Installation de réseaux WiFi professionnels pour entreprises, hôtels et espaces publics. Points d'accès dernière génération, gestion centralisée et sécurité maximale pour une connectivité optimale.",
    benefits: [
      "Couverture complète",
      "Haute performance",
      "Gestion centralisée",
      "Sécurité avancée",
      "Évolutivité"
    ],
    technologies: ["Ubiquiti UniFi", "Cisco Meraki", "Aruba", "TP-Link Omada", "Cambium"],
    price: "À partir de 150 000 FCFA/AP",
    duration: "3-7 jours"
  },
  {
    id: 5,
    title: "PABX & Téléphonie IP",
    shortDescription: "Installation de systèmes téléphoniques PABX et VoIP pour entreprises.",
    icon: <Phone className="w-8 h-8" />,
    color: "red",
    category: "Téléphonie",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop",
    features: [
      "PABX analogique/numérique",
      "Téléphonie IP (VoIP)",
      "Postes téléphoniques IP",
      "Serveur Asterisk/FreePBX",
      "Visioconférence",
      "Enregistrement d'appels"
    ],
    description: "Installation complète de systèmes téléphoniques pour entreprises. PABX traditionnels ou téléphonie IP avec serveur Asterisk, postes IP, standard automatique et toutes les fonctionnalités professionnelles.",
    benefits: [
      "Réduction des coûts",
      "Flexibilité totale",
      "Fonctionnalités avancées",
      "Mobilité",
      "Intégration CRM"
    ],
    technologies: ["Asterisk", "FreePBX", "3CX", "Yeastar", "Grandstream", "Fanvil"],
    price: "À partir de 400 000 FCFA",
    duration: "3-7 jours"
  },
  {
    id: 6,
    title: "Maintenance & Support",
    shortDescription: "Support technique et maintenance de votre infrastructure réseau.",
    icon: <Wrench className="w-8 h-8" />,
    color: "gray",
    category: "Support",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    features: [
      "Maintenance préventive",
      "Support technique rapide",
      "Surveillance 24/7",
      "Mises à jour régulières",
      "Dépannage sur site",
      "Rapports mensuels"
    ],
    description: "Service complet de maintenance et support pour votre infrastructure réseau. Surveillance proactive, intervention rapide en cas de problème et optimisation continue pour garantir la performance de votre réseau.",
    benefits: [
      "Disponibilité maximale",
      "Prévention des pannes",
      "Intervention rapide",
      "Optimisation continue",
      "Tranquillité d'esprit"
    ],
    technologies: ["Monitoring", "Ticketing", "Remote Support", "Documentation", "Backup"],
    price: "À partir de 100 000 FCFA/mois",
    duration: "Contrat 6-12 mois"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mamadou Seck",
    role: "Directeur Général",
    company: "Cabinet d'Architecture",
    content: "L'installation du réseau et du serveur a été impeccable. Notre productivité a considérablement augmenté grâce à une infrastructure fiable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Aminata Diop",
    role: "Responsable IT",
    company: "Hôtel Teranga",
    content: "Le réseau WiFi installé couvre parfaitement tout l'hôtel. Nos clients sont très satisfaits de la qualité de connexion.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ibrahima Fall",
    role: "Gérant",
    company: "Centre d'Appels",
    content: "Le système PABX IP installé nous a fait économiser 60% sur nos coûts téléphoniques. Installation professionnelle et support réactif.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

const stats = [
  { number: "10+", label: "Réseaux installés", icon: <Network className="w-6 h-6" /> },
  { number: "1000+", label: "Points câblés", icon: <Cable className="w-6 h-6" /> },
  { number: "10+", label: "Serveurs configurés", icon: <Server className="w-6 h-6" /> },
  { number: "98%", label: "Clients satisfaits", icon: <Star className="w-6 h-6" /> }
];

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certification Officielle",
    description: "Tests et certification de tous les liens réseau"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Monitoring 24/7",
    description: "Surveillance continue de votre infrastructure"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Support Technique",
    description: "Assistance rapide et intervention sur site"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Sécurité Intégrée",
    description: "Protection et sécurisation de votre réseau"
  }
];

export default function Networks() {
  const [selectedService, setSelectedService] = useState(null);

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      red: "from-red-500 to-red-600", 
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600",
      gray: "from-gray-500 to-gray-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              <span>Installation Réseau</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Installation &
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Configuration Réseau
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Câblage structuré, configuration serveur, routage, WiFi professionnel et 
              systèmes téléphoniques PABX pour votre entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Nos réalisations
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl mb-4">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
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
                  <div className="text-blue-600">{feature.icon}</div>
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
              Nos Services Réseau
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes d'installation et configuration réseau pour 
              connecter efficacement votre entreprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {networkServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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
                        {/* <div className="text-lg font-semibold text-blue-600">{service.price}</div> */}
                        <div className="text-xs text-gray-500">{service.duration}</div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Découvrez ce que nos clients disent de nos installations réseau.
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
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Prêt à installer votre réseau ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contactez-nous pour une consultation gratuite et un devis détaillé adapté 
              à vos besoins. Nos techniciens sont prêts à intervenir rapidement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Nous appeler</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
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
                          <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Équipements</h3>
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
                    {/* <div className="text-2xl font-bold text-blue-600 mb-1">{selectedService.price}</div> */}
                    <div className="text-gray-600 flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Durée: {selectedService.duration}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mt-4 sm:mt-0">
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