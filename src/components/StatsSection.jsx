'use client';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { number: '20+', label: 'Projets et installations réalisé' },
    { number: '100+', label: 'Clients satisfaits' },
    { number: '3+', label: 'Partenaires stratégiques' },
    { number: '2+', label: 'Années d’expérience' },
  ];

  const companies = [
    '/logos/company1.png',
    '/logos/company2.png',
    '/logos/company3.png',
    '/logos/company4.png',
    '/logos/company5.png',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Nos chiffres et réalisations
        </h2>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600">
                {stat.number}
              </h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Entreprises partenaires */}
        <div className="overflow-hidden relative">
            <motion.div
            className="flex gap-12"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            >
            {[...companies, ...companies].map((logo, index) => (
                <div
                key={index}
                className="flex-shrink-0 w-1/4 flex justify-center items-center"
                >
                <img
                    src={logo}
                    alt="Entreprise partenaire"
                    className="h-16 object-contain grayscale hover:grayscale-0 transition"
                />
                </div>
            ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
