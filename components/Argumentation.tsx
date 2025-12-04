import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Argumentation() {
  const debatPoints = {
    favorables: [
      {
        titre: "Accessibilité des soins",
        description: "La télémédecine permet d'accéder aux soins pour les populations isolées et les déserts médicaux.",
        sources: ["Entretien Dr. Dubois", "Rapport HAS 2023"]
      },
      {
        titre: "Optimisation du temps médical",
        description: "Réduction des déplacements et meilleure organisation du temps des professionnels de santé.",
        sources: ["Étude CNAM", "Entretien Pr. Martin"]
      },
      {
        titre: "Continuité des soins",
        description: "Suivi régulier des patients chroniques et maintien du lien médecin-patient à distance.",
        sources: ["OMS Guidelines", "Témoignages patients"]
      },
      {
        titre: "Réduction des coûts",
        description: "Diminution des frais de transport et des hospitalisations évitables.",
        sources: ["Analyse économique IRDES"]
      }
    ],
    defavorables: [
      {
        titre: "Fracture numérique",
        description: "Exclusion des personnes âgées, précaires ou non équipées en outils numériques.",
        sources: ["Entretien sociologue", "Rapport Défenseur des droits"]
      },
      {
        titre: "Qualité du diagnostic",
        description: "Impossibilité d'effectuer un examen clinique complet et risque d'erreurs diagnostiques.",
        sources: ["Conseil national de l'Ordre des médecins", "Entretien Dr. Rousseau"]
      },
      {
        titre: "Protection des données",
        description: "Risques de piratage et de violation de la confidentialité des données de santé.",
        sources: ["CNIL", "Cybersécurité en santé"]
      },
      {
        titre: "Déshumanisation",
        description: "Perte du contact humain et de la relation de confiance médecin-patient.",
        sources: ["Études sociologiques", "Témoignages professionnels"]
      }
    ],
    enjeux: [
      {
        titre: "Régulation et cadre légal",
        description: "Nécessité d'adapter la législation et d'établir des normes claires pour encadrer la pratique.",
        sources: ["Code de la santé publique", "Directives européennes"]
      },
      {
        titre: "Formation des professionnels",
        description: "Besoin de former les soignants aux outils numériques et aux spécificités de la consultation à distance.",
        sources: ["Entretiens formation continue"]
      },
      {
        titre: "Modèle économique",
        description: "Définir une tarification équitable et un modèle de remboursement pérenne.",
        sources: ["Négociations conventionnelles"]
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-gray-900 mb-6">
            Argumentation
          </h1>
          <p className="text-gray-600">
            La controverse autour de la télémédecine et de l'e-santé révèle des positions 
            contrastées. Voici une synthèse des arguments principaux issus de nos recherches 
            et entretiens avec les experts.
          </p>
        </div>

        {/* Arguments favorables */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <CheckCircle className="text-green-600 mr-3" size={32} />
            <h2 className="text-gray-900">Arguments favorables</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {debatPoints.favorables.map((arg, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                <h3 className="text-gray-900 mb-3">{arg.titre}</h3>
                <p className="text-sm text-gray-600 mb-4">{arg.description}</p>
                <div className="flex flex-wrap gap-2">
                  {arg.sources.map((source, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arguments défavorables */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <XCircle className="text-red-600 mr-3" size={32} />
            <h2 className="text-gray-900">Arguments défavorables</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {debatPoints.defavorables.map((arg, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                <h3 className="text-gray-900 mb-3">{arg.titre}</h3>
                <p className="text-sm text-gray-600 mb-4">{arg.description}</p>
                <div className="flex flex-wrap gap-2">
                  {arg.sources.map((source, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-red-50 text-red-700 rounded-full">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enjeux transversaux */}
        <section>
          <div className="flex items-center mb-8">
            <AlertCircle className="text-gray-600 mr-3" size={32} />
            <h2 className="text-gray-900">Enjeux transversaux</h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * debatPoints.enjeux.length + '%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {[...debatPoints.enjeux, ...debatPoints.enjeux].map((enjeu, index) => (
                <div key={index} className="flex-shrink-0 w-[400px] p-6 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-gray-900 mb-3">{enjeu.titre}</h3>
                  <p className="text-sm text-gray-600 mb-4">{enjeu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {enjeu.sources.map((source, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-gray-900 mb-4">Synthèse</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            La controverse sur la télémédecine met en lumière une tension entre l'innovation 
            technologique et les valeurs fondamentales de la médecine. Si les avantages en termes 
            d'accessibilité et d'efficience sont indéniables, les risques liés à l'équité d'accès, 
            à la qualité des soins et à la protection des données ne peuvent être ignorés. 
            L'enjeu principal réside dans la capacité à développer un système hybride qui combine 
            les bénéfices du numérique tout en préservant l'humanité de la relation soignant-soigné.
          </p>
        </div>
      </div>
    </div>
  );
}
