import { User, Mail, Building2, Quote, Phone } from 'lucide-react';

export function Experts() {
  const experts = [
    {
      nom: "Mira Ballout",
      role: "Médecin généraliste",
      institution: "Spécialiste des usages numériques",
      position: "Favorable",
      email: null,
      phone: "0751534190",
      citation: "La télémédecine a transformé ma pratique. Je peux désormais suivre des patients qui, autrefois, renonçaient aux soins faute de moyens de transport.",
      themes: ["Médecine générale", "Usages numériques", "Pratique quotidienne"]
    },
    {
      nom: "Anne-Sophie Cases",
      role: "Professeure des universités en sciences de gestion",
      institution: "Université de Montpellier",
      position: "Analytique",
      email: "anne-sophie.cases@umontpellier.fr",
      phone: null,
      citation: "La télémédecine risque d'aggraver les inégalités sociales et territoriales. La fracture numérique est une réalité qu'on ne peut ignorer.",
      themes: ["Sciences de gestion", "E-santé", "Recherche"]
    },
    {
      nom: "Dr Gregoire Mercier",
      role: "Sciences des données de santé",
      institution: "Unité d'évaluation économique - CHU Montpellier",
      position: "Vigilante",
      email: "g-mercier@chu-montpellier.fr",
      phone: null,
      citation: "La multiplication des plateformes de téléconsultation pose des questions majeures en termes de sécurité et de confidentialité des données de santé.",
      themes: ["Recherche & Données de Santé", "Évaluation économique", "Sciences de la santé"]
    }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes('Favorable')) return 'text-green-700 bg-green-50 border-green-200';
    if (position.includes('Critique')) return 'text-red-700 bg-red-50 border-red-200';
    if (position.includes('Nuancée') || position.includes('Analytique') || position.includes('Vigilante')) 
      return 'text-green-700 bg-green-50 border-green-200';
    return 'text-gray-700 bg-gray-50 border-gray-200';
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <User className="mr-3" size={32} />
          <h1 className="text-gray-900">Les Experts</h1>
        </div>
        
        <p className="text-gray-600 mb-16 max-w-3xl">
          Nous avons recueilli les témoignages et analyses d'experts issus de différents horizons : praticiens, chercheurs, régulateurs, et acteurs économiques. Voici les principaux acteurs de cette controverse.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1"><strong>{expert.nom}</strong></h3>
                  <p className="text-sm text-gray-600 mb-1">{expert.role}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Building2 size={14} className="mr-1" />
                    {expert.institution}
                  </div>
                  
                  {/* Contact info */}
                  <div className="space-y-1 mt-2">
                    {expert.email && (
                      <div className="flex items-center text-xs text-green-600">
                        <Mail size={12} className="mr-1" />
                        <a href={`mailto:${expert.email}`} className="hover:underline">
                          {expert.email}
                        </a>
                      </div>
                    )}
                    {expert.phone && (
                      <div className="flex items-center text-xs text-green-600">
                        <Phone size={12} className="mr-1" />
                        {expert.phone}
                      </div>
                    )}
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs border rounded-full whitespace-nowrap ${getPositionColor(expert.position)}`}>
                  {expert.position}
                </span>
              </div>

              <div className="mb-4 p-4 bg-gray-50 rounded-lg relative">
                <Quote size={16} className="absolute top-3 left-3 text-gray-300" />
                <p className="text-sm text-gray-700 italic pl-6">
                  "{expert.citation}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {expert.themes.map((theme, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-gray-900 mb-4">Méthodologie des entretiens</h3>
          <p className="text-sm text-gray-600 mb-4">
            Les entretiens ont été menés entre septembre et novembre 2025, en présentiel ou en visioconférence. 
            Chaque entretien a duré entre 45 et 90 minutes et a été retranscrit intégralement.
          </p>
          <p className="text-sm text-gray-600">
            Les experts ont été sélectionnés pour représenter la diversité des points de vue et des 
            parties prenantes impliquées dans la controverse de la télémédecine.
          </p>
        </div>
      </div>
    </div>
  );
}
