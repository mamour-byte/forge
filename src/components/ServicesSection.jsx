import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building, 
  Code, 
  Cloud, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Globe,
  Database,
  Lock,
  Monitor,
  Smartphone
} from "lucide-react";

const services = [
  {
    id: 1,
    title: 'Solutions Entreprise',
    description: 'Transformation digitale sur mesure pour améliorer vos performances et optimiser vos processus métier.',
    icon: Building,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    hoverColor: 'hover:bg-blue-500',
    points: [
      { text: 'ERP & CRM sur mesure', icon: Database },
      { text: 'Automatisation des processus', icon: Zap },
      { text: 'Intégration systèmes existants', icon: Globe }
    ],
    features: ['ROI mesurable', 'Support 24/7', 'Formation incluse'],
    stats: { number: '150+', label: 'Entreprises transformées' }
  },
  {
    id: 2,
    title: 'Développement Logiciel',
    description: 'Applications web et mobiles performantes, conçues avec les dernières technologies pour une expérience utilisateur optimale.',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    hoverColor: 'hover:bg-purple-500',
    points: [
      { text: 'Applications web & mobiles', icon: Smartphone },
      { text: 'API & Microservices', icon: Globe },
      { text: 'UI/UX Design moderne', icon: Monitor }
    ],
    features: ['Code quality', 'Tests automatisés', 'Déploiement continu'],
    stats: { number: '500+', label: 'Applications développées' }
  },
  {
    id: 3,
    title: 'Infrastructure & Réseau',
    description: 'Infrastructure cloud robuste et réseaux sécurisés pour une connectivité fiable et une performance optimale.',
    icon: Cloud,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    hoverColor: 'hover:bg-green-500',
    points: [
      { text: 'Cloud Computing hybride', icon: Cloud },
      { text: 'Sécurité réseau avancée', icon: Shield },
      { text: 'Support technique expert', icon: Zap }
    ],
    features: ['SLA 99.9%', 'Monitoring 24/7', 'Scalabilité automatique'],
    stats: { number: '99.9%', label: 'Uptime garanti' }
  },
  {
    id: 4,
    title: 'Cybersécurité',
    description: 'Protection complète avec des systèmes de sécurité avancés et une surveillance continue pour protéger vos actifs numériques.',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    hoverColor: 'hover:bg-red-500',
    points: [
      { text: 'Vidéo surveillance IP', icon: Monitor },
      { text: 'Contrôle d\'accès biométrique', icon: Lock },
      { text: 'Détection d\'intrusion IA', icon: Zap }
    ],
    features: ['Alertes temps réel', 'Analyse comportementale', 'Conformité RGPD'],
    stats: { number: '100%', label: 'Incidents prévenus' }
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
             }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 right-10 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Solutions Technologiques Avancées
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales innovantes et sur mesure pour propulser votre entreprise vers le futur. 
            Notre expertise technologique au service de votre réussite.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                {/* Main Card */}
                <div className={`
                  relative overflow-hidden rounded-3xl bg-white border border-gray-200/60
                  p-8 cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:border-blue-300/40
                  hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 group-hover:ring-1 group-hover:ring-blue-500/20
                  ${selectedService === service.id ? 'ring-2 ring-blue-500/40 bg-blue-50/30' : ''}
                `}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />
                  
                  {/* Tech Grid Pattern */}
                  <div className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-500"
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0V0zm10 10h10v10H10V10z' /%3E%3C/g%3E%3C/svg%3E")`
                       }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`
                        p-4 rounded-2xl bg-gradient-to-br ${service.color} 
                        group-hover:scale-110 transition-transform duration-500
                        shadow-lg group-hover:shadow-xl
                      `}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">{service.stats.number}</div>
                        <div className="text-xs text-gray-500">{service.stats.label}</div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.points.map((point, idx) => {
                        const PointIcon = point.icon;
                        return (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 border border-current border-opacity-10`}>
                              <PointIcon className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium">{point.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`
                        w-full flex items-center justify-center gap-2 py-4 px-6 
                        bg-gradient-to-r ${service.color} text-white font-semibold 
                        rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105
                        group-hover:shadow-2xl
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${service.color} blur-3xl -z-10 scale-110
                  `} 
                  style={{ filter: 'blur(40px)', opacity: '0.03' }}
                  />
                </div>

                {/* Expanded Details (if selected) */}
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Pourquoi nous choisir ?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Prêt à transformer votre entreprise ?
            </h3>
            <p className="text-gray-600 mb-8">
              Contactez nos experts pour une consultation gratuite et découvrez comment nos solutions 
              peuvent révolutionner votre activité.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ><a href="contact">
              <span>Consultation gratuite</span>
              </a>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}