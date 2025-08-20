import { Code, Smartphone, Cloud, Network } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      description:
        "Conception et développement de sites et applications web modernes, performants et sécurisés.",
      icon: <Code className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Applications Mobiles",
      description:
        "Création d’applications mobiles Android et iOS intuitives, scalables et adaptées à vos besoins.",
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Solutions Cloud",
      description:
        "Mise en place d’architectures cloud sécurisées, flexibles et adaptées à la croissance de votre entreprise.",
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Réseaux & Infrastructure",
      description:
        "Installation et gestion complète de réseaux informatiques avec les meilleurs équipements.",
      icon: <Network className="w-8 h-8 text-orange-600" />,
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nos Services
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez l’ensemble de nos solutions digitales conçues pour propulser
          votre entreprise vers l’avenir.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Prêt à transformer vos idées en réalité ?
        </h2>
        <p className="text-gray-600 mb-6">
          Contactez-nous dès aujourd’hui et travaillons ensemble sur votre
          prochain projet digital.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Contactez-nous
        </button>
      </div>
    </div>
  );
}
