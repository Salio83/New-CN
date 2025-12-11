import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FooterNav } from './FooterNav';

interface DocumentationProps {
  setActiveSection: (section: string) => void;
}

export function Documentation({ setActiveSection }: DocumentationProps) {
  const [currentSlide] = useState(0);

  const bibliographie = [
    { title: "Impact of E-Health Literacy on Diabetes Self-Care Activities Among People With Type 2 Diabetes Attending Primary Healthcare Centers in Makkah City, Saudi Arabia: A Cross-Sectional Study", authors: "AlShehri, Waleed S.; Khojah, Yasser Y.", year: 2025, type: "Article" },
    { title: "Digital health technologies in swallowing care from screening to rehabilitation: A narrative review", authors: "Alter, Isaac L.; Dias, Carla; Briano, Jack; Rameau, Anaïs", year: 2025, type: "Article" },
    { title: "Intention to Use Telemedicine Services during a Health Crisis: A Motivation-Opportunity-Ability Theory Approach", authors: "Atmaja, Ferry Tema; Wu, Cedric Hsi-Jui; Guttena, Revanth Kumar; Honora, Andreawan", year: 2024, type: "Article" },
    { title: "Navigating the future of health care with AI-driven digital therapeutics", authors: "Vasdev, Nupur; Gupta, Tanisha; Pawar, Bhakti; Bain, Anoothi; Tekade, Rakesh Kumar", year: 2024, type: "Article" },
    { title: "Investigating the Current State of the Adoption of E-Health Tools for Digital Mental Health Services in a Selected South African Higher Education Institution", authors: "Rhodrick, Nyasha Musakuro", year: 2025, type: "Article" },
    { title: "Innovations in E-Health", authors: "Wicks, Paul; Stamford, Jon; Grootenhuis, Martha A.; Haverman, Lotte; Ahmed, Sara", year: 2014, type: "Article" },
    { title: "Strategies for sustainable adoption of e-health tools for digital mental health services", authors: "Musakuro, Rhodrick N.; Gie, Liiza", year: 2025, type: "Article" },
    { title: "The Increasing Value of eHealth in the Delivery of Patient-Centred Cancer Care", authors: "Penedo, Frank J; Oswald, Laura B; Kronenfeld, Joshua P; Garcia, Sofia F; Cella, David; Yanez, Betina", year: 2020, type: "Article" },
    { title: "Electronic health records and e-prescribing in Australia: An exploration of technological utilisation in Australian community pharmacies", authors: "Hareem, Amina; Stupans, Ieva; Park, Joon Soo; Stevens, Julie E.; Wang, Kate", year: 2024, type: "Article" },
    // AMUE article ajouté en mode présentation
    { title: "AMUE — Accompagnement des transformations numériques dans l'enseignement et la santé", authors: "AMUE", year: 2021, type: "Rapport / Article institutionnel" },
    { title: "LA SANTÉ CONNECTÉE", authors: "GLOANNEC & al.", year: 2017, type: "Monographie" },
    { title: "Optimisation d'une interface numérique de santé à distance pour une meilleure expérience-patient", authors: "Lourdais, Chloé", year: 2022, type: "Thèse" },
    { title: "E-santé et milieu carcéral", authors: "Py, Ulysse", year: 2024, type: "Thèse" },
    { title: "La e-santé : de nouveaux usages pour les technologies individuelles en santé publique", authors: "Salmon, Fréderic Durand; Le Tallec, Loïc", year: 2014, type: "Article" },
    { title: "Appropriation de la plateforme de télépathologie I-PATH-INCTR dans la prise en charge des cancers pédiatriques au Mali et en RDC", authors: "Sossou, Komlanvi Etienne", year: 2023, type: "Thèse" },
    { title: "La médecine sans médecin ? Le numérique au service du malade", authors: "Vallancien, Guy", year: 2015, type: "Ouvrage" },
    { title: "e-Médecine, e-santé et informatique - entre espoirs technologiques et désillusion humaniste", authors: "Béorchia, Sylvain", year: 2017, type: "Article" },
    { title: "L'e-santé : l'empowerment du patient connecté", authors: "Cases, Anne‑Sophie", year: 2017, type: "Article" },
    { title: "Les nouvelles technologies : l'avenir de notre santé ?", authors: "Chambaud, Laurent", year: 2023, type: "Chapitre" },
    { title: "Pratique de la e-santé en néphrologie en France : Résultats de la première enquête sur la télénéphrologie", authors: "Citarda, Salvatore; Camarroque, Anne‑Laure; Seret, Guillaume, et al.", year: 2019, type: "Article" },
    { title: "Objets connectés et santé", authors: "Debet, Anne", year: 2017, type: "Article" }
  ];

  const videotheque = [
    { title: "La télémédecine en pratique - Reportage France 3", duration: "12:30" },
    { title: "Débat : Télémédecine, progrès ou régression ?", duration: "45:00" },
    { title: "Conférence HAS - État des lieux 2023", duration: "1:20:00" }
  ];

  const archives = [
    { expert: "Mira Ballout", date: "15 octobre 2024", topics: ["Pratique de la télémédecine","Accessibilité","Défis techniques"] },
    { expert: "Anne‑Sophie Cases", date: "8 novembre 2024", topics: ["E-santé","Empowerment patient","Innovation numérique"] },
    { expert: "Dr Gregoire Mercier", date: "12 novembre 2024", topics: ["Économie de la santé","Télémédecine","Modèles de financement"] }
  ];

  const webographie = [
    { name: "Site officiel de l'Assurance Maladie - Téléconsultation", url: "https://ameli.fr/telemedicine", desc: "Informations officielles sur la téléconsultation et son remboursement" },
    { name: "Ordre National des Médecins - Télémédecine", url: "https://conseil-national.medecin.fr", desc: "Cadre déontologique et bonnes pratiques" },
    { name: "CNIL - Protection des données de santé", url: "https://cnil.fr/sante", desc: "Recommandations sur la protection des données" },
    { name: "Agence du Numérique en Santé (ANS)", url: "https://esante.gouv.fr", desc: "Stratégie nationale et référentiels techniques" },
    { name: "Fédération Hospitalière de France", url: "https://fhf.fr", desc: "Position des hôpitaux sur la télémédecine" }
  ];

  const gallery = [
    { title: "Infographie : Évolution du nombre de téléconsultations" },
    { title: "Carte des déserts médicaux en France" },
    { title: "Schéma : Parcours type d'une téléconsultation" }
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const goPrev = () => setActiveSection('experts');
  const goNext = () => setActiveSection('chronologie');

  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-6">
        <button onClick={() => setActiveSection('home')} className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#10B981" opacity="0.1"/>
            <path d="M20 28C20 28 10 22 10 15C10 12 12 10 14.5 10C16.5 10 18 11 20 13C22 11 23.5 10 25.5 10C28 10 30 12 30 15C30 22 20 28 20 28Z" fill="#10B981" opacity="0.8"/>
            <path d="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 16 L22 24 L24 20 L26 20 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 20 L22 20 L24 20 L26 20 L28 16 L30 24 L32 20; M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20"/>
            </path>
            <circle cx="30" cy="12" r="6" fill="white"/>
            <path d="M30 9 L30 15 M27 12 L33 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-gray-900 font-bold">La Bibliothèque</span>
        </button>
      </motion.div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bibliographie</h2>
            <p className="text-gray-600 mb-6">Une collection organisée de savoirs, d'analyses et de témoignages pour approfondir la controverse.</p>
            <div className="space-y-4">
              {bibliographie.map((b, i) => (
                <div key={i} className="p-4 bg-white/80 backdrop-blur-sm border border-green-100 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{b.title}</h3>
                      <p className="text-sm text-gray-600">{b.authors} — {b.year} · <span className="text-xs text-green-600 font-medium">{b.type}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vidéothèque</h3>
              <div className="space-y-3">
                {videotheque.map((v, i) => (
                  <div key={i} className="p-3 bg-white/85 border border-green-100 rounded-lg flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-800">{v.title}</div>
                      <div className="text-xs text-gray-500">Durée : {v.duration}</div>
                    </div>
                    <div className="text-sm text-green-600">Play</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Archives des Entretiens</h3>
              <div className="space-y-3">
                {archives.map((a, i) => (
                  <div key={i} className="p-3 bg-white/85 border border-green-100 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-800">{a.expert}</div>
                        <div className="text-xs text-gray-500">{a.date}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      {a.topics.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Webographie</h3>
              <ul className="space-y-2">
                {webographie.map((w, i) => (
                  <li key={i} className="p-3 bg-white/85 border border-green-100 rounded-lg">
                    <a href={w.url} target="_blank" rel="noreferrer" className="font-medium text-green-700">{w.name}</a>
                    <div className="text-xs text-gray-500">{w.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Galerie d'Illustrations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gallery.map((g, i) => (
                  <div key={i} className="p-4 bg-white/85 border border-green-100 rounded-lg text-gray-800">{g.title}</div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <h4 className="text-sm text-gray-500">Sources changent avec</h4>
        </div>
      </div>

      <div className="p-6 flex items-center justify-center gap-6">
        <motion.button onClick={goPrev} whileHover={{ scale: 1.03 }} className="p-3 bg-white/90 rounded-full border-2 border-green-600 shadow">
          <ArrowLeft size={20} className="text-green-600" />
        </motion.button>
        <span className="text-sm text-gray-600">Documentation</span>
        <motion.button onClick={goNext} whileHover={{ scale: 1.03 }} className="p-3 bg-white/90 rounded-full border-2 border-green-600 shadow">
          <ArrowRight size={20} className="text-green-600" />
        </motion.button>
      </div>

      <FooterNav setActiveSection={setActiveSection} currentSection="documentation" />
    </div>
  );
}
