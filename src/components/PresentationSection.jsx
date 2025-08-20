import { Player } from '@lottiefiles/react-lottie-player';
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Code,
  Cloud,
  Network
} from 'lucide-react';

const highlights = [
  {
    icon: Code,
    text: "Solutions digitales sur mesure",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Cloud,
    text: "Infrastructure Cloud sécurisée",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Network,
    text: "Réseaux et systèmes optimisés",
    gradient: "from-purple-500 to-pink-500"
  }
];

const stats = [
  { number: "100+", label: "Projets réalisés" },
  { number: "50+", label: "Clients satisfaits" },
  { number: "24/7", label: "Support technique" }
];

export default function PresentationSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L23.5 16l-3.5 2.5z'/%3E%3C/g%3E%3C/svg%3E")`
             }}
        />
      </div>

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Bloc gauche avec texte */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              À propos de Forge
            </div>

            {/* Titre */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Qui <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">sommes-nous</span> ?
            </h2>

            {/* Description principale */}
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-8">
              <p>
                <strong className="text-gray-800 font-semibold">Forge</strong> est une entreprise spécialisée dans la conception et le déploiement 
                de solutions digitales innovantes. Nous développons des applications web et mobiles, 
                des systèmes ERP/CRM, des APIs performantes ainsi que des solutions Cloud sécurisées.
              </p>
              
              <p>
                Au-delà du développement logiciel, nous assurons également la mise en place complète 
                de votre infrastructure informatique avec une approche 360° de la transformation digitale.
              </p>
              
              <p className="text-blue-700 font-medium">
                Notre mission : transformer vos idées en solutions digitales fiables, évolutives et performantes.
              </p>
            </div>

            {/* Points forts */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${highlight.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                      {highlight.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-blue-500/25"
              >
                <span>Nos services</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <span>Contactez-nous</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bloc droite avec illustration */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            >
            {/* Lottie Animation */}
            <Player
              autoplay
              loop
              src="/lottie/Developer.json"
              style={{ height: '380px', width: '380px' }}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}