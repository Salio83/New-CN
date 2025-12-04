import { FileText, Download } from 'lucide-react';

export function ArticleResume() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FileText className="mr-3" size={32} />
            <h1 className="text-gray-900">Article pour l'AMUE</h1>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <Download size={16} className="mr-2" />
            Télécharger PDF
          </button>
        </div>

        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-900">
            Article de synthèse destiné à l'Association des Managers des Universités et Établissements (AMUE)
          </p>
        </div>

        <article className="prose max-w-none">
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Résumé</p>
            <p className="text-gray-700 italic">
              Cet article explore la controverse entourant la télémédecine et l'e-santé en France, 
              en analysant les arguments des différentes parties prenantes et les enjeux sociétaux, 
              économiques et éthiques soulevés par la transformation numérique du système de santé.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La pandémie de COVID-19 a marqué un tournant décisif dans l'adoption de la télémédecine 
              en France. En quelques semaines, le nombre de téléconsultations est passé de quelques 
              milliers à plusieurs millions par mois, forçant l'ensemble des acteurs du système de 
              santé à repenser leurs pratiques. Cette transformation accélérée a cristallisé une 
              controverse préexistante sur la place du numérique dans la relation de soins.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Au-delà des aspects techniques, cette controverse révèle des tensions profondes sur 
              la conception même de la médecine, le rôle du médecin, et les valeurs fondamentales 
              du système de santé français : équité d'accès, qualité des soins, et humanité de la 
              relation soignant-soigné.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">Une innovation porteuse de promesses</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les partisans de la télémédecine mettent en avant des arguments convaincants. Dans 
              les zones rurales et les déserts médicaux, elle permet un accès aux soins qui serait 
              autrement impossible. Le Dr. Marie Dubois, médecin généraliste en Creuse, témoigne : 
              "La télémédecine a transformé ma pratique. Je peux désormais suivre des patients qui, 
              autrefois, renonçaient aux soins faute de moyens de transport."
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              L'argument économique est également significatif. Selon l'IRDES, la téléconsultation 
              permet une réduction des coûts de transport, une optimisation du temps médical, et 
              une diminution des hospitalisations évitables. Pour les patients atteints de maladies 
              chroniques, le suivi régulier à distance améliore l'observance thérapeutique et la 
              détection précoce des complications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Enfin, les acteurs économiques du secteur voient dans l'e-santé une opportunité de 
              modernisation et d'efficience du système de santé, permettant de faire face aux défis 
              démographiques et épidémiologiques à venir.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">Des risques et limites préoccupants</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Face à cet enthousiasme, de nombreuses voix s'élèvent pour pointer les dangers d'une 
              adoption trop rapide et insuffisamment encadrée. Le Pr. Ahmed Benali, sociologue de 
              la santé, alerte : "La télémédecine risque d'aggraver les inégalités sociales et 
              territoriales. La fracture numérique est une réalité qu'on ne peut ignorer."
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les personnes âgées, les populations précaires, et les personnes en situation de 
              handicap peuvent se retrouver exclues de cette évolution technologique. Le rapport 
              du Défenseur des droits de 2022 souligne que 13 millions de Français sont en difficulté 
              avec le numérique.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sur le plan médical, les praticiens expriment des réserves quant à la qualité du 
              diagnostic. Le Pr. Jean Martin, cardiologue, explique : "La téléconsultation a sa 
              place, mais ne peut remplacer l'examen clinique pour les pathologies complexes." 
              L'impossibilité d'ausculter, de palper, ou d'évaluer finement l'état général du 
              patient peut conduire à des erreurs diagnostiques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Enfin, la question de la protection des données de santé est centrale. La CNIL 
              rappelle régulièrement les risques liés à la multiplication des plateformes et à 
              l'hébergement de données sensibles. La cybersécurité en santé représente un enjeu 
              majeur de souveraineté et de confiance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">Vers un modèle hybride et régulé</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La controverse sur la télémédecine ne peut se résoudre par un choix binaire entre 
              adoption totale ou rejet. Elle appelle à la construction d'un modèle hybride, 
              combinant les avantages du numérique et les impératifs de la médecine traditionnelle.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cela nécessite un cadre réglementaire renforcé, garantissant la qualité des soins, 
              la protection des données, et l'équité d'accès. La formation des professionnels de 
              santé aux outils numériques doit être généralisée, tout comme l'accompagnement des 
              populations fragiles dans leur usage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le modèle économique doit également évoluer pour éviter une médecine à deux vitesses : 
              une médecine numérique "low-cost" pour les plus démunis, et une médecine traditionnelle 
              "premium" pour ceux qui peuvent se l'offrir. La définition d'un juste remboursement et 
              d'indications claires pour le recours à la téléconsultation sont essentielles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              La controverse sur la télémédecine et l'e-santé est révélatrice des tensions qui 
              traversent notre société face à la transformation numérique. Elle interroge notre 
              capacité collective à concilier innovation technologique et préservation des valeurs 
              humanistes qui fondent notre système de santé.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Loin d'être un simple débat technique, cette controverse pose des questions 
              fondamentales : quel type de médecine voulons-nous ? Comment garantir l'équité 
              d'accès aux soins à l'ère numérique ? Quelle place accordons-nous à la relation 
              humaine dans le soin ? Les réponses à ces questions détermineront l'avenir de 
              notre système de santé.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Mots-clés</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Télémédecine', 'E-santé', 'Controverse', 'Innovation', 'Équité', 'Protection des données', 'Fracture numérique'].map((mot, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {mot}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Date de publication : Novembre 2024 | Nombre de mots : 1,247
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
