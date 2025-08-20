import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Zap, Filter, Search, ArrowRight, Play, Award, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Kiwano - E-commerce Éco-Responsable",
    category: "E-commerce",
    tags: ["Flutter", "Dart", "Nest JS", "Postgres"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    description: "Plateforme mobile cross plateforme pour la vente de produits éco-responsables, avec intégration de paiement et gestion des stocks.",
    longDescription: "Une solution e-commerce innovante permettant aux utilisateurs de découvrir et d'acheter des produits éco-responsables via une application mobile fluide. Intégration complète avec un backend robuste pour la gestion des commandes, des stocks et des paiements sécurisés.",
    duration: "4 mois",
    team: "5 personnes",
    technologies: ["Flutter", "Darte", "Nest JS", "Postgres", "GitHub", "Docker"],
    results: {
      performance: "+40% de conversions",
      users: "10k+ utilisateurs actifs",
      growth: "+250% de croissance"
    },
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Horizon Teranga - Tourisme",
    category: "Santé",
    tags: ["Flutter", "Dart", "Firebase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1681225241052-ac67808b0c62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlbmVnYWx8ZW58MHx8MHx8fDA%3D",
    description: "Application de consultation de lieux touristiques avec géolocalisation, itinéraires et recommandations personnalisées.",
    longDescription: "Application mobile immersive pour la découverte des sites touristiques au Sénégal, intégrant des fonctionnalités de géolocalisation, de recommandations personnalisées et d'itinéraires optimisés. Conçue pour offrir une expérience utilisateur fluide et intuitive.",
    duration: "3 mois",
    team: "4 personnes",
    technologies: ["Flutter", "Dart", "Firebase", "PostgreSQL", "Socket.io", "Google Maps API"],
    results: {
      performance: "99.9% de disponibilité",
      users: "5k+ d'utilisateurs",
      growth: "+180% d'adoption"
    },
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Misericorde Alu - Gestion Financière",
    category: "Finance",
    tags: ["PHP", "Laravel", "Orchid", "MySQL"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHRhYmlsaXQlQzMlQTl8ZW58MHx8MHx8fDA%3D",
    description: "Application web de gestion de vente avec facturation et rapport de ventes en temps réel.",
    longDescription: "Outil multiutilisateur de gestion financière pour les entreprises, permettant la création de factures, le suivi des ventes et la génération de rapports détaillés. Conçu pour optimiser la gestion des flux financiers et améliorer la prise de décision.",
    duration: "3 mois",
    team: "4 personnes",
    technologies: ["PHP", "Laravel", "Orchid", "MySQL", "Git" , "GitHub", "Chart.js"],
    results: {
      performance: "Temps réel < 100ms",
      users: "2k+ investisseurs",
      growth: "+300% de ROI moyen"
    },
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "EduPlatform - Formation en Ligne",
    category: "Éducation",
    tags: ["Next.js", "GraphQL", "Prisma", "MySQL"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    description: "Plateforme d'apprentissage interactive avec cours vidéo, quizz et système de certification.",
    longDescription: "Environnement d'apprentissage numérique complet avec streaming vidéo adaptatif, système de quiz interactifs, suivi des progrès en temps réel et certification automatisée.",
    duration: "7 mois",
    team: "6 personnes",
    technologies: ["Next.js", "GraphQL", "Prisma", "MySQL", "Socket.io", "FFmpeg"],
    results: {
      performance: "95% de satisfaction",
      users: "15k+ apprenants",
      growth: "+400% de complétion"
    },
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "SmartCity Dashboard",
    category: "IoT",
    tags: ["React", "D3.js", "InfluxDB", "MQTT"],
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop&q=80",
    description: "Dashboard temps réel pour la gestion intelligente des infrastructures urbaines.",
    longDescription: "Solution IoT complète pour villes intelligentes avec collecte de données en temps réel, visualisations avancées, prédictions basées sur l'IA et système d'alertes automatisé.",
    duration: "8 mois",
    team: "8 personnes",
    technologies: ["React", "D3.js", "InfluxDB", "MQTT", "TensorFlow", "Docker"],
    results: {
      performance: "10M+ points de données/jour",
      users: "50+ municipalités",
      growth: "+60% d'efficacité énergétique"
    },
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "ArtGallery NFT",
    category: "Blockchain",
    tags: ["React", "Web3.js", "Solidity", "IPFS"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&auto=format&fit=crop&q=80",
    description: "Marketplace NFT pour artistes digitaux avec smart contracts et paiements crypto.",
    longDescription: "Plateforme NFT révolutionnaire permettant aux artistes de créer, vendre et gérer leurs œuvres numériques avec smart contracts sécurisés et intégration multi-blockchain.",
    duration: "6 mois",
    team: "5 personnes",
    technologies: ["React", "Web3.js", "Solidity", "IPFS", "Ethereum", "Polygon"],
    results: {
      performance: "Gas fees -70%",
      users: "3k+ artistes",
      growth: "€2M+ de volume"
    },
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const categories = ["Tous", "E-commerce", "Santé", "Finance", "Éducation", "IoT", "Blockchain"];

export default function Realisation() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let filtered = projects;
    
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
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
              <Award size={20} />
              <span>Portfolio & Réalisations</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Nos <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Réalisations</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos projets les plus innovants et les solutions digitales que nous avons créées pour transformer les idées de nos clients en succès concrets.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-400" size={24} />
                <span><strong className="text-white">50+</strong> Projets réalisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-blue-400" size={24} />
                <span><strong className="text-white">30+</strong> Clients satisfaits</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-yellow-400" size={24} />
                <span><strong className="text-white">95%</strong> Taux de satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets à la Une */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Projets à la <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Une</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos réalisations les plus remarquables qui illustrent notre expertise et notre capacité d'innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group/btn"
                  >
                    <span>Voir les détails</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres et Recherche */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Tous nos Projets
              </h2>
              <p className="text-gray-600">
                Explorez l'ensemble de nos réalisations par catégorie ou recherchez un projet spécifique
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <Filter size={20} className="text-gray-500 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grille des projets */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{project.team}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                      >
                        <span>Détails</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche ou sélectionnez une autre catégorie.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal Détails Projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 lg:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-6 lg:p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {selectedProject.results.performance}
                    </div>
                    <div className="text-sm text-gray-600">Performance</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {selectedProject.results.users}
                    </div>
                    <div className="text-sm text-gray-600">Utilisateurs</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {selectedProject.results.growth}
                    </div>
                    <div className="text-sm text-gray-600">Croissance</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Détails du Projet</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-gray-700">Durée: {selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} className="text-gray-500" />
                        <span className="text-gray-700">Équipe: {selectedProject.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-gray-200">
                  <a 
                    href={selectedProject.liveUrl}
                    className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Voir le site</span>
                  </a>
                  <a 
                    href={selectedProject.githubUrl}
                    className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Github size={18} />
                    <span>Code source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}