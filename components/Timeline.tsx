import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Timeline() {
  const events = [
    {
      year: "Années 1960",
      title: "Les premières expérimentations modernes de la télémédecine",
      description: "Premiers projets aux États-Unis, notamment pour des liaisons entre hôpitaux universitaires et centres isolés dans un contexte de recherche.",
      category: "innovation"
    },
    {
      year: "2004",
      title: "Officialisation de l’e-health",
      description: "L’Organisation Mondiale de la Santé (OMS) adopte officiellement le terme \"eHealth\". Jalon conceptuel marquant l'application des TIC au domaine de la santé à l'échelle mondiale.",
      category: "legislation"
    },
    {
      year: "2010",
      title: "Décret Français sur la Télémédecine (19 octobre)",
      description: "Jalon réglementaire majeur qui définit les cinq actes de télémédecine : téléconsultation, téléexpertise, télésurveillance, téléassistance et régulation médicale.",
      category: "legislation"
    },
    {
      year: "2013-2015",
      title: "Émergence des Nouveaux Usages en Santé Publique",
      description: "Période de réflexion sur l'intégration des technologies individuelles et mobiles dans les parcours de soins, marquant le début de la reconnaissance du potentiel de la santé mobile (m-santé).",
      category: "innovation"
    },
    {
      year: "2017",
      title: "Année de la Réflexion Éthique et de l'Empowerment",
      description: "Nombreuses publications s'interrogeant sur l'impact des objets connectés sur la santé, l'autonomisation du patient connecté (empowerment), et les enjeux éthiques et humanistes face aux avancées technologiques.",
      category: "controverse"
    },
    {
      year: "2018",
      title: "Remboursement par l'Assurance Maladie (15 septembre)",
      description: "Entrée en vigueur de la prise en charge des actes de télémédecine (téléconsultation et téléexpertise). Point de bascule pour le déploiement de masse de la télémédecine en France, la rendant accessible et remboursable.",
      category: "legislation"
    },
    {
      year: "2020",
      title: "Crise sanitaire liée à la COVID-19",
      description: "Accélération des usages numériques en santé. La téléconsultation est temporairement libéralisée, conduisant à une adoption massive et un changement d'échelle des pratiques.",
      category: "crise"
    },
    {
      year: "2024-2025",
      title: "Intensification des recherches sur l'IA en e-santé",
      description: "Les travaux se concentrent sur l'intégration de l'Intelligence Artificielle (thérapeutiques numériques pilotées par IA), l'extension de la e-santé à des milieux spécifiques (comme le milieu carcéral), et la recherche de stratégies d'adoption durable des outils numériques en santé mentale.",
      category: "innovation"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'innovation':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'legislation':
        return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'crise':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'controverse':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'innovation':
        return 'Innovation technologique';
      case 'legislation':
        return 'Évolution législative';
      case 'crise':
        return 'Événement majeur';
      case 'controverse':
        return 'Controverse';
      default:
        return '';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <Calendar className="mr-3" size={32} />
          <h1 className="text-gray-900 text-3xl font-bold">Chronologie</h1>
        </div>

        <p className="text-gray-600 mb-16 max-w-3xl">
          L'évolution de la télémédecine et de l'e-santé : des premières expérimentations
          aux défis contemporains.
        </p>

        <div className="relative pl-8 sm:pl-32 py-8">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-32 top-0 bottom-0 w-0.5 bg-green-200" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start"
              >
                {/* Dot */}
                <div className="absolute left-0 sm:left-0 w-5 h-5 bg-green-600 rounded-full border-4 border-white z-10 transform -translate-x-[9px]" />

                {/* Date Label (Desktop only - left side) */}
                <div className="hidden sm:block absolute left-[-140px] w-28 text-right">
                  <span className="text-lg font-bold text-green-700">{event.year}</span>
                </div>

                {/* Content Card */}
                <div className="ml-8 w-full max-w-3xl">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-green-200 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <span className="sm:hidden px-3 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                        {event.year}
                      </span>
                      <span className={`px-3 py-1 text-xs rounded-full border ${getCategoryColor(event.category)}`}>
                        {getCategoryLabel(event.category)}
                      </span>
                    </div>

                    <h3 className="text-gray-900 mb-2 font-bold text-lg">{event.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="w-4 h-4 bg-orange-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Innovation technologique</p>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="w-4 h-4 bg-emerald-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Évolution législative</p>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="w-4 h-4 bg-red-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Événement majeur</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <div className="w-4 h-4 bg-gray-600 rounded-full mb-2" />
            <p className="text-xs text-gray-700">Controverse</p>
          </div>
        </div>
      </div>
    </div>
  );
}
