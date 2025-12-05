import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Timeline() {
  const events = [
    {
      year: "1950-1960",
      title: "Prémices de la télémédecine",
      description: "Premières expérimentations de transmission d'images médicales par téléphone.",
      category: "innovation"
    },
    {
      year: "1970",
      title: "NASA et télémédecine spatiale",
      description: "Développement de systèmes de surveillance médicale à distance pour les astronautes.",
      category: "innovation"
    },
    {
      year: "1990-2000",
      title: "Démocratisation d'Internet",
      description: "Émergence des premières plateformes de consultation en ligne et des dossiers médicaux électroniques.",
      category: "innovation"
    },
    {
      year: "2009",
      title: "Légalisation en France",
      description: "La loi HPST reconnaît officiellement la télémédecine et en définit le cadre juridique.",
      category: "legislation"
    },
    {
      year: "2018",
      title: "Remboursement par l'Assurance Maladie",
      description: "La téléconsultation devient remboursable en France, marquant un tournant majeur.",
      category: "legislation"
    },
    {
      year: "2020",
      title: "Pandémie COVID-19",
      description: "Explosion de l'usage de la télémédecine : +1000% de téléconsultations. Assouplissement des règles.",
      category: "crise"
    },
    {
      year: "2021",
      title: "Débats sur la pérennisation",
      description: "Questionnements sur le maintien des mesures dérogatoires et les risques de surutilisation.",
      category: "controverse"
    },
    {
      year: "2022",
      title: "Encadrement renforcé",
      description: "Nouvelles régulations pour prévenir les abus et garantir la qualité des soins.",
      category: "legislation"
    },
    {
      year: "2023-2024",
      title: "Intégration de l'IA",
      description: "Émergence de l'intelligence artificielle dans le diagnostic et le suivi des patients. Nouveaux débats éthiques.",
      category: "innovation"
    },
    {
      year: "2025",
      title: "État des lieux actuel",
      description: "Stabilisation de l'usage, mais persistance des controverses sur l'équité d'accès et la qualité des soins.",
      category: "controverse"
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
