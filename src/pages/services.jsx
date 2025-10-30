import { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Network, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Shield,
  Users,
  TrendingUp,
  Star,
  Calendar,
  MessageCircle,
  Globe,
  Database,
  Settings,
  Palette,
  Search,
  BarChart3,
  Lock,
  Cpu,
  MonitorSpeaker,
  Layers,
  X,
  Clock,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Développement Web",
    shortDescription: "Sites et applications web modernes, performants et sécurisés.",
    icon: <Code className="w-8 h-8" />,
    color: "blue",
    category: "Développement",
    features: [
      "Sites web responsives",
      "Applications web complexes",
      "E-commerce sur mesure",
      "Progressive Web Apps (PWA)",
      "API et microservices",
      "Optimisation SEO"
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "PHP"],
    deliverables: [
      "Code source complet",
      "Documentation technique",
      "Tests automatisés",
      "Déploiement sécurisé",
      "Formation utilisateurs"
    ],
    timeline: "4-12 semaines",
    startingPrice: "À partir de 3 000€"
  },
  {
    id: 2,
    title: "Applications Mobiles",
    shortDescription: "Applications mobiles iOS et Android intuitives et performantes.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "green",
    category: "Mobile",
    features: [
      "Applications natives iOS/Android",
      "Applications hybrides",
      "Design UX/UI sur mesure",
      "Intégrations API",
      "Push notifications",
      "Stores submission"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    deliverables: [
      "Applications store-ready",
      "Code source",
      "Guide d'utilisation",
      "Support post-lancement",
      "Analytics setup"
    ],
    timeline: "6-16 semaines",
    startingPrice: "À partir de 8 000€"
  },
  {
    id: 3,
    title: "Solutions Cloud",
    shortDescription: "Architectures cloud sécurisées et scalables pour votre croissance.",
    icon: <Cloud className="w-8 h-8" />,
    color: "purple",
    category: "Infrastructure",
    features: [
      "Migration vers le cloud",
      "Architecture serverless",
      "Conteneurisation Docker",
      "CI/CD automatisé",
      "Monitoring & alertes",
      "Backup & disaster recovery"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    deliverables: [
      "Infrastructure configurée",
      "Scripts d'automatisation",
      "Documentation d'architecture",
      "Monitoring dashboards",
      "Plan de sauvegarde"
    ],
    timeline: "3-8 semaines",
    startingPrice: "À partir de 2 500€"
  },
  {
    id: 4,
    title: "Design UX/UI",
    shortDescription: "Expériences utilisateur intuitives et designs modernes.",
    icon: <Palette className="w-8 h-8" />,
    color: "red",
    category: "Design",
    features: [
      "Audit UX existant",
      "Wireframing & prototyping",
      "Design system complet",
      "Tests utilisateurs",
      "Responsive design",
      "Accessibilité (WCAG)"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
    deliverables: [
      "Maquettes finales",
      "Design system",
      "Prototypes interactifs",
      "Guide de style",
      "Assets pour développement"
    ],
    timeline: "2-6 semaines",
    startingPrice: "À partir de 2 000€"
  },
  {
    id: 5,
    title: "Consulting Digital",
    shortDescription: "Stratégie et conseil pour votre transformation digitale.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "orange",
    category: "Conseil",
    features: [
      "Audit technique complet",
      "Stratégie digitale",
      "Roadmap technologique",
      "Formation équipes",
      "Veille technologique",
      "Optimisation performances"
    ],
    technologies: ["Analytics", "SEO Tools", "Performance Monitoring"],
    deliverables: [
      "Rapport d'audit détaillé",
      "Plan stratégique",
      "Recommandations priorisées",
      "Formations sur mesure",
      "Suivi périodique"
    ],
    timeline: "1-4 semaines",
    startingPrice: "À partir de 1 500€"
  },
  {
    id: 6,
    title: "API & Intégrations",
    shortDescription: "Développement et intégration d'API robustes et sécurisées.",
    icon: <Settings className="w-8 h-8" />,
    color: "gray",
    category: "Support",
    features: [
      "Développement d'API RESTful",
      "Intégration de services tiers",
      "Authentification & sécurité",
      "Documentation API",
      "Tests & validation",
      "Maintenance & support"
    ],
    technologies: ["Node.js", "Express", "GraphQL", "Postman", "Swagger"],
    deliverables: [
      "API documentée",
      "Clés d'API sécurisées",
      "Tests automatisés",
      "Guide d'intégration",
      "Support technique"
    ],
    timeline: "Service continu",
    startingPrice: ""
  }
];

const processes = [
  {
    step: 1,
    title: "Découverte",
    description: "Analyse de vos besoins et définition des objectifs",
    icon: <Search className="w-6 h-6" />,
    duration: "1-2 semaines"
  },
  {
    step: 2,
    title: "Stratégie",
    description: "Conception de la solution et planification",
    icon: <BarChart3 className="w-6 h-6" />,
    duration: "1 semaine"
  },
  {
    step: 3,
    title: "Développement",
    description: "Réalisation selon les meilleures pratiques",
    icon: <Code className="w-6 h-6" />,
    duration: "Variable"
  },
  {
    step: 4,
    title: "Tests & Livraison",
    description: "Tests complets et mise en production",
    icon: <CheckCircle className="w-6 h-6" />,
    duration: "1 semaine"
  }
];

const stats = [
  { number: "150+", label: "Projets réalisés", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "50+", label: "Clients satisfaits", icon: <Users className="w-6 h-6" /> },
  { number: "98%", label: "Taux de satisfaction", icon: <Star className="w-6 h-6" /> },
  { number: "24/7", label: "Support disponible", icon: <Shield className="w-6 h-6" /> }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const categories = ["Tous", "Développement", "Mobile", "Infrastructure", "Design", "Conseil", "Support"];
  
  const filteredServices = activeCategory === "Tous" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire de rendez-vous:', appointmentForm);
    alert('Votre demande de rendez-vous a été envoyée avec succès !');
    setShowAppointmentModal(false);
    setAppointmentForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Nos Services – Forge | Développement, Design, Cloud, Consulting"
        description="Découvrez les services de Forge : développement web et mobile, design UX/UI, solutions cloud, consulting digital et API."
        keywords="services digitaux, développement web, design UX, cloud, consulting, Forge"
        url="https://forge.sn/services"
      />
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex items-center justify-center space-x-2 text-blue-300 font-medium">
              <Layers size={20} />
              <span>Solutions Digitales Complètes</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Nos <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              De l'idée à la réalisation, nous vous accompagnons avec expertise et passion pour transformer vos projets digitaux en succès concrets.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2 text-blue-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez nos solutions sur mesure conçues pour répondre à tous vos besoins digitaux
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${service.color}-600`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`bg-${service.color}-100 text-${service.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} autres fonctionnalités
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        {/* prix service  */}
                        {/* <div className="text-sm text-gray-500">À partir de</div> */}
                        {/* <div className="font-bold text-gray-900">{service.startingPrice}</div> */}
                      </div>
                      
                      <button 
                        onClick={() => setSelectedService(service)}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 group/btn"
                      >
                        <span>Détails</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Processus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative text-center group"
              >
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-1/2" />
                )}
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-blue-600">{process.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {process.description}
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  {process.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Prêt à Transformer Vos <span className="text-yellow-300">Idées</span> ?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs digitaux.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 flex items-center space-x-2">
                <MessageCircle size={20} />
                <span>Démarrer un projet</span>
              </button>
              <button 
                onClick={() => setShowAppointmentModal(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Planifier un appel</span>
              </button>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${selectedService.color}-100 rounded-2xl flex items-center justify-center`}>
                      <div className={`text-${selectedService.color}-600`}>
                        {selectedService.icon}
                      </div>
                    </div>
                    <div>
                      <span className={`bg-${selectedService.color}-100 text-${selectedService.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                        {selectedService.category}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mt-2">
                        {selectedService.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {selectedService.shortDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Fonctionnalités Incluses</h3>
                    <div className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Livrables</h3>
                    <div className="space-y-2">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Délai estimé</div>
                    <div className="text-lg font-semibold text-gray-900">{selectedService.timeline}</div>
                  </div>
                  {/* prix de services  */}
                  {/* <div>
                    <div className="text-sm text-gray-500 mb-1">Tarif</div>
                    <div className="text-lg font-semibold text-gray-900">{selectedService.startingPrice}</div>
                  </div> */}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex-1">
                    <MessageCircle size={18} />
                    <span><a href="contact">Demander un devis</a></span>
                  </button>
                  <button 
                    onClick={() => {
                      setAppointmentForm(prev => ({ ...prev, service: selectedService.title }));
                      setSelectedService(null);
                      setShowAppointmentModal(true);
                    }}
                    className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Calendar size={18} />
                    <span>Planifier un appel</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showAppointmentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAppointmentModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Planifier un rendez-vous</h2>
                      <p className="text-gray-600">Réservez un appel avec notre équipe</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAppointmentModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User size={16} className="inline mr-2" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={appointmentForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail size={16} className="inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={appointmentForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone size={16} className="inline mr-2" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={appointmentForm.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+221 77 956 25 48"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin size={16} className="inline mr-2" />
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={appointmentForm.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Settings size={16} className="inline mr-2" />
                      Service d'intérêt
                    </label>
                    <select
                      name="service"
                      value={appointmentForm.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar size={16} className="inline mr-2" />
                        Date préférée *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={appointmentForm.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock size={16} className="inline mr-2" />
                        Heure préférée *
                      </label>
                      <select
                        name="time"
                        value={appointmentForm.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Sélectionnez une heure</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle size={16} className="inline mr-2" />
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={appointmentForm.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Décrivez brièvement votre projet ou vos questions..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowAppointmentModal(false)}
                      className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors flex-1"
                    >
                      <X size={18} />
                      <span>Annuler</span>
                    </button>
                    <button
                      type="submit"
                      className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex-1"
                    >
                      <Calendar size={18} />
                      <span>Planifier le rendez-vous</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}