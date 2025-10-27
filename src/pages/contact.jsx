import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageCircle, 
  Calendar,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';
import { form } from 'framer-motion/client';
import { BsWhatsapp } from 'react-icons/bs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }, 3000);
  };

  const projectTypes = [
    'Site Web / Landing Page',
    'Application Web',
    'Application Mobile',
    'E-commerce',
    'Refonte/Modernisation',
    'Consulting/Audit',
    'Autre'
  ];

  const budgetRanges = [
    'Moins de 75k F cfa',
    '75k - 150k F cfa',
    '150k - 500k F cfa',
    '500k - 800k F cfa',
    'Plus de 800k F cfa',
    'À discuter'
  ];

  const timelines = [
    'Urgent (< 1 mois)',
    'Court terme (1-3 mois)',
    'Moyen terme (3-6 mois)',
    'Long terme (6+ mois)',
    'Pas de contrainte'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="flex items-center justify-center space-x-2 text-blue-300 font-medium">
              <MessageCircle size={20} />
              <span>Prenons Contact</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Démarrons Votre <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projet</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Vous avez une idée ? Un défi technique ? Notre équipe d'experts est là pour transformer votre vision en réalité digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <Zap className="text-yellow-400" size={24} />
                <span>Réponse <strong className="text-white">sous 24h</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-green-400" size={24} />
                <span><strong className="text-white">Devis gratuit</strong> détaillé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-blue-400" size={24} />
                <span>Accompagnement <strong className="text-white">personnalisé</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plusieurs Façons de Nous <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contacter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le moyen qui vous convient le mieux pour échanger sur votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Mail size={32} />,
                title: "Email",
                description: "Envoyez-nous un message détaillé",
                contact: "contact@forge.dev",
                action: "Envoyer un email",
                color: "blue"
              },
              {
                icon: <Phone size={32} />,
                title: "Téléphone",
                description: "Discutons directement de votre projet",
                contact: "+221 77 856 98 23",
                action: "Appeler maintenant",
                color: "green"
              },
              {
                icon: <Calendar size={32} />,
                title: "Rendez-vous",
                description: "Planifions une réunion en visio",
                contact: "Calendly",
                action: "Réserver un créneau",
                color: "purple"
              },
              {
                icon: <MessageCircle size={32} />,
                title: "Chat Live",
                description: "Support instantané pendant les heures ouvrées",
                contact: "En ligne",
                action: "Démarrer le chat",
                color: "orange"
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-${method.color}-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${method.color}-600`}>
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="mb-4">
                  <span className="font-semibold text-gray-900">{method.contact}</span>
                </div>
                <button className={`flex items-center space-x-2 text-${method.color}-600 font-medium hover:text-${method.color}-700 transition-colors group/btn`}>
                  <span>{method.action}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Parlons de Votre Projet
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Plus vous nous donnez de détails, plus nous pourrons vous proposer une solution adaptée.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h4>
                    <p className="text-gray-600">Nous vous recontacterons dans les plus brefs délais.</p>
                  </motion.div>
                ) : (   
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Jean Dupont"
                          className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="jean@entreprise.com"
                          className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Type de projet *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Sélectionnez un type de projet</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Budget estimé
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Sélectionnez une fourchette</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Délai souhaité
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Sélectionnez un délai</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes techniques, votre public cible..."
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                      <p className="text-gray-600">
                        173 YF Nord Foire<br />
                        12500 Dakar, Sénégal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                      <p className="text-gray-600">+221 77 856 98 23</p>
                      <p className="text-sm text-gray-500">Lun - Ven, 9h - 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">contact@forge.dev</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Horaires</h4>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 9h - 18h<br />
                        Weekend: Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-800 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                      <Github size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-red-500   hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-green-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                      <BsWhatsapp size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Questions Fréquentes
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      question: "Quel est le délai moyen pour un projet ?",
                      answer: "Entre 4 et 12 semaines selon la complexité du projet."
                    },
                    {
                      question: "Proposez-vous de la maintenance ?",
                      answer: "Oui, nous offrons des contrats de maintenance et support."
                    },
                    {
                      question: "Travaillez-vous avec des startups ?",
                      answer: "Absolument ! Nous accompagnons tous types d'entreprises."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">{faq.question}</h5>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}