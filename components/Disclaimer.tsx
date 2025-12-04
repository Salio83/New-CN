import { AlertTriangle, Shield, Info } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <Shield className="mr-3" size={32} />
          <h1 className="text-gray-900">Clause de non-responsabilité</h1>
        </div>

        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            Le site web suivant est un exercice réalisé par des élèves de 3ème année de l'école <strong>Polytech Montpellier</strong> dans le cadre du cours d'introduction au système d'information du département IG. Ces sites sont le résultat de travail d'étudiants et sont mis en ligne pour des raisons pédagogiques et didactiques; une fois en ligne, ils ne sont plus mis à jour. Vos réactions et commentaires sont très bienvenus. Pour signaler une erreur, réagir à un contenu ou demander une modification, merci d'écrire aux élèves et à la responsable de l'enseignement (<a href="mailto:isabelle.bourdon@umontpellier.fr" className="text-green-600 hover:underline">isabelle.bourdon@umontpellier.fr</a>). Polytech Montpellier décline toute responsabilité pour les erreurs et les imprécisions que peuvent contenir ces sites.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Info className="mr-2 text-gray-600" size={20} />
              <h2 className="text-gray-900">Nature du projet</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Ce site web est un travail étudiant réalisé dans le cadre d'un cours universitaire 
              sur la cartographie des controverses. Il a pour objectif pédagogique d'analyser et 
              de présenter les différentes positions autour de la controverse de la télémédecine 
              et de l'e-santé.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les informations présentées reflètent l'état de nos recherches à la date de novembre 2024 
              et peuvent ne pas être exhaustives ou à jour.
            </p>
          </section>

          <section className="p-6 bg-gray-50 rounded-lg">
            <h2 className="text-gray-900 mb-4">Limitations et précautions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white border-b-2 border-gray-300">
                    <th className="text-left p-4 text-gray-900">Catégorie</th>
                    <th className="text-left p-4 text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">📋</span>
                        <span className="text-sm text-gray-900">Non-conseil médical</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Les contenus de ce site ne constituent en aucun cas un avis médical, un diagnostic 
                        ou une recommandation thérapeutique. Pour toute question relative à votre santé, 
                        consultez un professionnel de santé qualifié.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎓</span>
                        <span className="text-sm text-gray-900">Travail académique</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Ce site a été réalisé par des étudiants dans un cadre pédagogique. Bien que nous 
                        ayons apporté le plus grand soin à la recherche et à la vérification de nos sources, 
                        nous ne pouvons garantir l'exhaustivité ou l'exactitude absolue de toutes les 
                        informations présentées.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🔗</span>
                        <span className="text-sm text-gray-900">Sources externes</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Les références à des sites web externes, des documents ou des organisations sont 
                        fournies à titre informatif. Nous ne sommes pas responsables du contenu de ces 
                        sources externes ni de leur disponibilité.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">💬</span>
                        <span className="text-sm text-gray-900">Propos des experts</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Les citations et témoignages d'experts présentés sur ce site reflètent les opinions 
                        personnelles des personnes interrogées au moment des entretiens. Ces propos 
                        n'engagent que leurs auteurs et peuvent avoir évolué depuis.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">⚖️</span>
                        <span className="text-sm text-gray-900">Neutralité</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Nous avons cherché à présenter de manière équilibrée les différentes positions 
                        dans cette controverse. Cependant, toute analyse implique nécessairement des choix 
                        de présentation et d'interprétation qui peuvent refléter nos propres biais.
                      </p>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">📅</span>
                        <span className="text-sm text-gray-900">Actualité des informations</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Le domaine de la télémédecine et de l'e-santé évolue rapidement. Les informations 
                        présentées datent de novembre 2024 et peuvent avoir été modifiées ou complétées 
                        depuis. La réglementation, les pratiques et les technologies évoluent constamment.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Les contenus de ce site (textes, images, mise en page) sont protégés par le droit 
              d'auteur. Toute reproduction, même partielle, doit faire l'objet d'une autorisation 
              préalable et mentionner la source.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les citations d'experts et les références à des documents tiers restent la propriété 
              de leurs auteurs respectifs.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 mb-4">Protection des données personnelles</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Ce site web est un site statique qui ne collecte aucune donnée personnelle des visiteurs. 
              Aucun cookie n'est utilisé, aucune statistique de navigation n'est enregistrée.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Les données personnelles des experts interviewés (noms, fonctions) ont été publiées 
              avec leur accord explicite dans le cadre de ce projet académique.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 mb-4">Contact</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Pour toute question, remarque ou demande concernant ce site, vous pouvez nous contacter :
            </p>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Responsable de l'enseignement :</span> <a href="mailto:isabelle.bourdon@umontpellier.fr" className="text-green-600 hover:underline">isabelle.bourdon@umontpellier.fr</a>
              </p>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 italic">
              Dernière mise à jour : 27 novembre 2024<br />
              Version du site : 1.0
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
