import { FileText, ExternalLink } from 'lucide-react';

export function ArticleResume() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FileText className="mr-3 text-green-700" size={32} />
            <h1 className="text-gray-900 font-bold text-xl">Article de Synthèse (AMUE)</h1>
          </div>
          <a href="https://amue.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-green-200 text-green-700 rounded-lg text-sm hover:bg-green-50 transition-colors">
            <ExternalLink size={16} className="mr-2" />
            Site de l'AMUE
          </a>
        </div>

        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-900 font-medium">
            Cet article a été rédigé dans le cadre du cours d'introduction au système d'information du département IG.
          </p>
        </div>

        <article className="prose max-w-none text-justify">

          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">CONTROVERSE : e-Santé, la médecine pour tous, mais à quel prix ?</h1>
          </div>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">I. INTRODUCTION</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              L'e-santé désigne l'ensemble des domaines où les Technologies de l'Information et de la Communication (TIC) sont mises au service du bien-être et de la santé. Définie par l'OMS comme « les services du numérique au service du bien-être de la personne », son essor se caractérise par une rapidité de diffusion sans précédent. La télémédecine (téléconsultation, télé-expertise) et les objets connectés ou m-santé (santé mobile) en sont les piliers. L'utilisation du Dossier Médical Partagé (DMP) est un exemple de système d'information clé pour le suivi des patients, et la pratique de la télémédecine dans des spécialités comme la néphrologie est désormais bien engagée (Citarda et al., 2019).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">II. Les promesses : l'efficacité au service de l'accès et de la personnalisation</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La santé numérique améliore l’accessibilité et la rapidité des soins, contribuant à réduire les inégalités territoriales. Le développement de la télémédecine vers des structures isolées, comme les EHPAD, constitue une réponse concrète à la pénurie de médecins.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Au-delà de l’accès, la personnalisation et la prévention sont au cœur de cette transformation : l’analyse génétique et l’IA permettent une médecine plus précise et plus réactive. Les études montrent également l’efficacité de l’e-santé dans le suivi des maladies chroniques et des troubles dépressifs grâce aux applications mobiles. Les montres connectées renforcent cette dynamique en assurant un suivi continu d’indicateurs de santé au quotidien.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ces avancées ouvrent enfin la voie à une réduction significative des coûts pour les systèmes de santé.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">III. Les risques et dérives : le soin transformé en marché</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le développement de l’e-santé soulève des risques majeurs pour la sécurité et l’équité des soins. La protection des données reste le principal enjeu : au-delà du piratage, l’usage des informations personnelles soulève des questions éthiques, comme le profilage ou la discrimination des patients.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Une dérive notable est la marchandisation du secteur, notamment dans le "wellness", qui transforme la promesse de soins en véritable opportunité commerciale. La crainte d’une médecine déshumanisée, avec la réduction des consultations physiques, fragilise la relation soignant-soigné et pose un défi particulier en santé mentale, où le contact humain reste essentiel pour la qualité du soin.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Enfin, la persistance de la fracture numérique creuse de nouvelles inégalités d’accès :
            </p>

            <figure className="my-8">
              <img
                src="/esm45-infographie-fracture-numerique-600.jpg"
                alt="Infographie sur la fracture numérique en France"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                Figure : La fracture numérique en France
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed">
              Comme le montre la figure ci-dessus, 14 % des Français n’ont pas Internet et restent exclus de cette santé numérique, accentuant le risque de marginalisation des populations les plus vulnérables.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">IV. La controverse : un débat contrôlé et une question de pouvoir</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le véritable problème n’est pas technique, mais politique. Le débat est influencé par de nombreux conflits d’intérêts. Les grandes entreprises privées dominent l’innovation et la gestion de nos données, créant un rapport de force déséquilibré : nous sommes totalement transparents, tandis que leurs pratiques restent opaques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cette logique de profit appliquée à la santé alimente une méfiance publique difficile à lever. Face à la puissance mondiale des GAFAM, tels que Google, Apple… et à des lois qui évoluent trop lentement, la régulation peine à suivre. La question centrale devient alors : la technologie sert-elle réellement le soin, ou la santé est-elle simplement devenue un marché pour l’industrie technologique ?
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">V. CONCLUSION</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Pour relever la controverse autour de l’e-santé — offrir une médecine accessible à tous tout en garantissant sécurité et éthique — il est essentiel de mettre en place une gouvernance publique de la santé numérique, de développer une éthique des algorithmes et de sécuriser les données grâce à des technologies comme la Blockchain. L’éducation numérique en santé reste également un levier indispensable pour réduire les inégalités et garantir une utilisation responsable des outils numériques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Comme l’a évoqué Anne-Sophie Cases lors de son interview, l’empowerment du patient connecté ouvre une perspective prometteuse : mieux informé et accompagné, le patient peut gagner en autonomie et en pouvoir d’action sur son parcours de soin, même si, selon elle, cette évolution doit rester équilibrée et préserver avant tout le contact humain.
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
    </div >
  );
}
