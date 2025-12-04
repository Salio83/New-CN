interface FooterProps {
  setActiveSection: (section: string) => void;
}

export function Footer({ setActiveSection }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 mb-4">À propos</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Projet universitaire d'analyse de la controverse sur la télémédecine et l'e-santé réalisé à Polytech Montpellier.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 mb-4">Navigation</h3>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection('accueil')}
                className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => setActiveSection('argumentation')}
                className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                Argumentation
              </button>
              <button
                onClick={() => setActiveSection('experts')}
                className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                Experts
              </button>
              <button
                onClick={() => setActiveSection('equipe')}
                className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                L'équipe
              </button>
            </nav>
          </div>
          
          <div>
            <h3 className="text-gray-900 mb-4">Mentions légales</h3>
            <button
              onClick={() => setActiveSection('disclaimer')}
              className="block text-sm text-gray-600 hover:text-green-600 transition-colors mb-4"
            >
              Clause de non-responsabilité
            </button>
            <p className="text-xs text-gray-500">
              © 2024 - Projet universitaire<br />
              Polytech Montpellier - Département IG
            </p>
          </div>
        </div>
        
        {/* Clause officielle */}
        <div className="pt-8 border-t border-gray-300">
          <p className="text-xs text-gray-600 leading-relaxed max-w-5xl mx-auto">
            Le site web suivant est un exercice réalisé par des élèves de 3ème année de l'école <strong>Polytech Montpellier</strong> dans le cadre du cours d'introduction au système d'information du département IG. Ces sites sont le résultat de travail d'étudiants et sont mis en ligne pour des raisons pédagogiques et didactiques; une fois en ligne, ils ne sont plus mis à jour. Vos réactions et commentaires sont très bienvenus. Pour signaler une erreur, réagir à un contenu ou demander une modification, merci d'écrire aux élèves et à la responsable de l'enseignement (<a href="mailto:isabelle.bourdon@umontpellier.fr" className="text-green-600 hover:underline">isabelle.bourdon@umontpellier.fr</a>). <strong>Polytech Montpellier</strong> décline toute responsabilité pour les erreurs et les imprécisions que peuvent contenir ces sites.
          </p>
        </div>
      </div>
    </footer>
  );
}
