'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  ArrowRight
} from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Mamour Fall',
    role: 'Fondateur & CEO',
    image: 'team/mamour.jpg',
    description: "Développeur fullstack, expert en applications web et mobiles cross plateform, APIs et solutions cloud.",
    gradient: 'from-blue-500 to-cyan-500',
    email: 'mamourf958@gmail.com',
  },
  {
    id: 2,
    name: 'Abdoul Aziz Seye',
    role: 'CTO - Responsable Technique',
    image: 'team/abdoul.jpg',
    description: 'Technicien réseau et infrastructure, il gère l\'installation et la configuration des systèmes informatiques.',
    gradient: 'from-green-500 to-emerald-500',
    email: 'abdoulaziz@gmail.com',
  },
  {
    id: 3,
    name: 'Christina Duarte',
    role: 'CMO - Responsable Marketing',
    image: 'team/christina.jpg',
    description: 'Spécialiste en marketing digital, elle supervise la stratégie de communication et de visibilité de l\'entreprise.',
    gradient: 'from-purple-500 to-pink-500',
    email: 'yande@gmail.com',
  },
];

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="equipe">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Users className="w-4 h-4" />
          Notre Équipe
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Rencontrez nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experts</span>
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Une équipe passionnée de professionnels dédiés à transformer vos idées en solutions technologiques innovantes.
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            variants={itemVariants}
            className="group relative"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200/40">
              
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-[0.02] rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {member.name}
                </h3>
                
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Contact Button */}
                {member.email && (
                  <motion.a
                    href={`mailto:${member.email}`}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${member.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contacter</span>
                  </motion.a>
                )}
              </div>

              {/* Subtle hover glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${member.gradient} blur-3xl -z-10 scale-110`} 
                   style={{ filter: 'blur(40px)', opacity: '0.03' }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Simple CTA */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Discuter avec notre équipe</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}