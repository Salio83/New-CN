import React from 'react';
import { BookOpen, FileText, Video, Link as LinkIcon, Image as ImageIcon, Mic, ExternalLink } from 'lucide-react';

export function Documentation() {
  const documentation = {
    enregistrements: [
      {
        titre: "Entretien avec Mira Ballout",
        date: "15 octobre 2024",
        duree: "1h15",
        description: "Discussion sur la pratique de la télémédecine et l'accessibilité aux soins"
      },
      {
        titre: "Entretien avec Anne-Sophie Cases",
        date: "8 novembre 2024",
        duree: "1h30",
        description: "Analyse de l'empowerment du patient connecté et enjeux de la e-santé"
      },
      {
        titre: "Entretien avec Dr Gregoire Mercier",
        date: "12 novembre 2024",
        duree: "1h20",
        description: "Perspectives médicales et économiques de la télémédecine"
      }
    ],
    bibliographieAnglais: [
      {
        titre: "Impact of E-Health Literacy on Diabetes Self-Care Activities Among People With Type 2 Diabetes Attending Primary Healthcare Centers in Makkah City, Saudi Arabia: A Cross-Sectional Study, 2025",
        auteur: "AlShehri, Waleed S., et Yasser Y. Khojah",
        annee: "2025",
        type: "Article",
        doi: "10.7759/cureus.87968"
      },
      {
        titre: "Digital health technologies in swallowing care from screening to rehabilitation: A narrative review",
        auteur: "Alter, Isaac L., Carla Dias, Jack Briano, et Anaïs Rameau",
        annee: "2025",
        type: "Article",
        doi: "10.1016/j.anl.2025.05.002"
      },
      {
        titre: "Intention to Use Telemedicine Services during a Health Crisis: A Motivation-Opportunity-Ability Theory Approach",
        auteur: "Atmaja, Ferry Tema, Cedric Hsi-Jui Wu, Revanth Kumar Guttena, et Andreawan Honora",
        annee: "2024",
        type: "Article",
        doi: "10.1111/ijcs.13044"
      },
      {
        titre: "Navigating the future of health care with AI-driven digital therapeutics",
        auteur: "Vasdev, Nupur, Tanisha Gupta, Bhakti Pawar, Anoothi Bain, et Rakesh Kumar Tekade",
        annee: "2024",
        type: "Article",
        doi: "10.1016/j.drudis.2024.104110"
      },
      {
        titre: "Investigating the Current State of the Adoption of E-Health Tools for Digital Mental Health Services in a Selected South African Higher Education Institution",
        auteur: "Rhodrick, Nyasha Musakuro",
        annee: "2025",
        type: "Article",
        doi: "10.36096/ijbes.v7i2.698"
      },
      {
        titre: "Innovations in E-Health",
        auteur: "Wicks, Paul, Jon Stamford, Martha A. Grootenhuis, Lotte Haverman, et Sara Ahmed",
        annee: "2014",
        type: "Article",
        doi: "10.1007/s11136-013-0458-x"
      },
      {
        titre: "Strategies for sustainable adoption of e-health tools for digital mental health services",
        auteur: "Musakuro, Rhodrick N., et Liiza Gie",
        annee: "2025",
        type: "Article",
        doi: "10.4102/sajhrm.v23i0.3053"
      },
      {
        titre: "The Increasing Value of eHealth in the Delivery of Patient-Centred Cancer Care",
        auteur: "Penedo, Frank J, Laura B Oswald, Joshua P Kronenfeld, Sofia F Garcia, David Cella, et Betina Yanez",
        annee: "2020",
        type: "Article",
        doi: "10.1016/S1470-2045(20)30021-8"
      },
      {
        titre: "Electronic health records and e-prescribing in Australia: An exploration of technological utilisation in Australian community pharmacies",
        auteur: "Hareem, Amina, Ieva Stupans, Joon Soo Park, Julie E. Stevens, et Kate Wang",
        annee: "2024",
        type: "Article",
        doi: "10.1016/j.ijmedinf.2024.105472"
      }
    ],
    bibliographieFrancais: [
      {
        titre: "LA SANTÉ CONNECTÉE",
        auteur: "GLOANNEC & al.",
        annee: "2017",
        type: "Module MIP - EHESP",
        url: "https://documentation.ehesp.fr/memoires/2017/mip/groupe%2024.pdf"
      },
      {
        titre: "Optimisation d'une interface numérique de santé à distance pour une meilleure expérience-patient",
        auteur: "Lourdais, Chloé",
        annee: "2022",
        type: "Thèse de doctorat",
        url: "https://theses.hal.science/tel-04128753"
      },
      {
        titre: "E-santé et milieu carcéral",
        auteur: "Py, Ulysse",
        annee: "2024",
        type: "Thèse de doctorat",
        url: "https://theses.fr/2024LORR0275"
      },
      {
        titre: "La e-santé : de nouveaux usages pour les technologies individuelles en santé publique",
        auteur: "Salmon, Fréderic Durand, et Loïc Le Tallec",
        annee: "2014",
        type: "Article",
        doi: "10.3917/rindu.144.0070"
      },
      {
        titre: "Appropriation de la plateforme de télépathologie I-PATH-INCTR dans la prise en charge des cancers pédiatriques au Mali et en RDC",
        auteur: "Sossou, Komlanvi Etienne",
        annee: "2023",
        type: "Thèse de doctorat",
        url: "https://theses.hal.science/tel-04876097"
      },
      {
        titre: "La médecine sans médecin ? Le numérique au service du malade",
        auteur: "Vallancien, Guy",
        annee: "2015",
        type: "Ouvrage",
        doi: "10.3917/gall.valla.2015.01"
      },
      {
        titre: "e-Médecine, e-santé et informatique - entre espoirs technologiques et désillusion humaniste",
        auteur: "Béorchia, Sylvain",
        annee: "2017",
        type: "Article",
        doi: "10.4267/2042/63780"
      },
      {
        titre: "L'e-santé : l'empowerment du patient connecté",
        auteur: "Cases, Anne-Sophie",
        annee: "2017",
        type: "Article",
        doi: "10.3917/jgem.174.0137"
      },
      {
        titre: "Les nouvelles technologies : l'avenir de notre santé ?",
        auteur: "Chambaud, Laurent",
        annee: "2023",
        type: "Chapitre d'ouvrage",
        pages: "77-89"
      },
      {
        titre: "Pratique de la e-santé en néphrologie en France : Résultats de la première enquête sur la télénéphrologie",
        auteur: "Citarda, Salvatore, Anne-Laure Camarroque, Guillaume Seret, et al.",
        annee: "2019",
        type: "Article",
        doi: "10.1016/j.nephro.2019.06.001"
      },
      {
        titre: "Objets connectés et santé",
        auteur: "Debet, Anne",
        annee: "2017",
        type: "Article",
        doi: "10.3917/jdsam.hs2.0034"
      }
    ],
    webographie: [
      {
        titre: "Site officiel de l'Assurance Maladie - Téléconsultation",
        url: "ameli.fr/telemedicine",
        description: "Informations officielles sur la téléconsultation et son remboursement"
      },
      {
        titre: "Ordre National des Médecins - Télémédecine",
        url: "conseil-national.medecin.fr",
        description: "Cadre déontologique et bonnes pratiques"
      },
      {
        titre: "CNIL - Protection des données de santé",
        url: "cnil.fr/sante",
        description: "Recommandations sur la protection des données"
      },
      {
        titre: "Agence du Numérique en Santé (ANS)",
        url: "esante.gouv.fr",
        description: "Stratégie nationale et référentiels techniques"
      },
      {
        titre: "Fédération Hospitalière de France",
        url: "fhf.fr",
        description: "Position des hôpitaux sur la télémédecine"
      }
    ],
    entretiens: [
      {
        titre: "Entretien avec Mira Ballout",
        date: "15 octobre 2024",
        duree: "1h15",
        lieu: "Visioconférence",
        themes: ["Pratique de la télémédecine", "Accessibilité", "Défis techniques"]
      },
      {
        titre: "Entretien avec Anne-Sophie Cases",
        date: "8 novembre 2024",
        duree: "1h30",
        lieu: "Visioconférence",
        themes: ["E-santé", "Empowerment patient", "Innovation numérique"]
      },
      {
        titre: "Entretien avec Dr Gregoire Mercier",
        date: "12 novembre 2024",
        duree: "1h20",
        lieu: "CHU Montpellier",
        themes: ["Économie de la santé", "Télémédecine", "Modèles de financement"]
      }
    ],
    videos: [
      {
        titre: "La télémédecine en pratique - Reportage France 3",
        duree: "12:30",
        description: "Reportage dans une maison de santé utilisant la télémédecine"
      },
      {
        titre: "Débat : Télémédecine, progrès ou régression ?",
        duree: "45:00",
        description: "Table ronde avec différents acteurs du système de santé"
      },
      {
        titre: "Conférence HAS - État des lieux 2023",
        duree: "1:20:00",
        description: "Présentation des données et recommandations officielles"
      }
    ],
    illustrations: [
      {
        titre: "Infographie : Évolution du nombre de téléconsultations",
        description: "Graphique montrant l'explosion des consultations pendant la COVID-19"
      },
      {
        titre: "Carte des déserts médicaux en France",
        description: "Visualisation des zones sous-dotées en médecins"
      },
      {
        titre: "Schéma : Parcours type d'une téléconsultation",
        description: "Diagramme explicatif du processus technique et médical"
      }
    ]
  };

  const Shelf = ({ children, title, icon: Icon }: { children: React.ReactNode, title: string, icon: any }) => (
    <div className="mb-16">
      <div className="flex items-center mb-6 border-b border-gray-200 pb-4">
        <Icon className="mr-3 text-green-700" size={24} />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="px-4 py-8 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex flex-wrap gap-x-8 gap-y-12 items-end">
          {children}
        </div>
      </div>
    </div>
  );

  const Book = ({ title, author, year, type, doi, url }: { title: string, author: string, year: string, type: string, doi?: string, url?: string }) => {
    const link = doi ? `https://doi.org/${doi}` : (url?.startsWith('http') ? url : `https://${url}`);

    // Minimalist color palette for spines
    const spineColors = ['bg-green-700', 'bg-emerald-700', 'bg-teal-700', 'bg-cyan-700', 'bg-sky-700'];
    const colorIndex = title.length % spineColors.length;
    const spineColor = spineColors[colorIndex];

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-32 h-44 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 cursor-pointer border border-gray-200 rounded-r-sm"
      >
        {/* Minimalist Spine */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${spineColor} rounded-l-sm`}></div>

        {/* Content */}
        <div className="pl-4 pr-3 py-4 h-full flex flex-col">
          <div className="flex-1 overflow-hidden">
            <h4 className="text-gray-900 text-[11px] font-bold leading-tight mb-2 line-clamp-4">
              {title}
            </h4>
            <p className="text-gray-500 text-[10px] italic line-clamp-2">{author}</p>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-end">
            <span className="text-gray-400 text-[9px]">{year}</span>
            <span className="text-[8px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded uppercase tracking-wider">{type.slice(0, 3)}</span>
          </div>
        </div>
      </a>
    );
  };

  const VideoTape = ({ title, duration, description }: { title: string, duration: string, description: string }) => (
    <div className="group relative w-48 h-28 bg-gray-900 rounded shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
      {/* Tape Window Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-gray-800 rounded-sm flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-gray-700 mx-2"></div>
        <div className="w-8 h-8 rounded-full border-2 border-gray-700 mx-2"></div>
      </div>

      {/* Label */}
      <div className="absolute top-0 left-0 right-0 bg-white/95 p-3 h-14 border-b border-gray-800">
        <h4 className="text-gray-900 text-[10px] font-bold leading-tight line-clamp-2">{title}</h4>
      </div>

      {/* Duration Badge */}
      <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded">
        {duration}
      </div>

      {/* Play Overlay on Hover */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-green-600 border-b-[4px] border-b-transparent ml-0.5"></div>
        </div>
      </div>
    </div>
  );

  const Folder = ({ title, date, themes }: { title: string, date: string, themes: string[] }) => (
    <div className="group relative w-40 h-52 bg-green-50 rounded-r-md rounded-bl-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-green-100">
      {/* Tab */}
      <div className="absolute -top-2 left-0 w-16 h-3 bg-green-50 rounded-t border-t border-l border-r border-green-100"></div>

      {/* Content */}
      <div className="p-4 h-full flex flex-col">
        <div className="border-b border-green-200/50 pb-2 mb-2">
          <h4 className="text-green-900 text-[11px] font-bold leading-tight">{title}</h4>
          <p className="text-green-700/60 text-[10px] mt-1">{date}</p>
        </div>
        <div className="flex-1">
          <div className="mt-2 flex flex-wrap gap-1">
            {themes.map((theme, i) => (
              <span key={i} className="text-[8px] px-1.5 py-0.5 bg-white text-green-700 border border-green-100 rounded shadow-sm">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-6">
          <BookOpen className="mr-3 text-green-700" size={32} />
          <h1 className="text-gray-900 text-4xl font-bold">La Bibliothèque</h1>
        </div>

        <p className="text-gray-600 mb-16 max-w-3xl text-lg">
          Une collection organisée de savoirs, d'analyses et de témoignages pour approfondir la controverse.
        </p>

        {/* Bibliographie Section */}
        <Shelf title="Bibliographie" icon={FileText}>
          {documentation.bibliographieAnglais.map((item, index) => (
            <Book
              key={`en-${index}`}
              title={item.titre}
              author={item.auteur}
              year={item.annee}
              type={item.type}
              doi={item.doi}
            />
          ))}
          {documentation.bibliographieFrancais.map((item, index) => (
            <Book
              key={`fr-${index}`}
              title={item.titre}
              author={item.auteur}
              year={item.annee}
              type={item.type}
              doi={item.doi}
              url={item.url}
            />
          ))}
        </Shelf>

        {/* Vidéos Section */}
        <Shelf title="Vidéothèque" icon={Video}>
          {documentation.videos.map((item, index) => (
            <VideoTape
              key={index}
              title={item.titre}
              duration={item.duree}
              description={item.description}
            />
          ))}
        </Shelf>

        {/* Entretiens Section */}
        <Shelf title="Archives des Entretiens" icon={Mic}>
          {documentation.entretiens.map((item, index) => (
            <Folder
              key={index}
              title={item.titre}
              date={item.date}
              themes={item.themes}
            />
          ))}
        </Shelf>

        {/* Webographie (Classic List for now, or maybe a "Rolodex" style later? Keeping simple for now) */}
        <section className="mb-16 mt-24">
          <div className="flex items-center mb-6">
            <LinkIcon className="mr-2 text-green-700" size={24} />
            <h2 className="text-gray-900 text-2xl font-bold">Webographie</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentation.webographie.map((item, index) => (
              <a
                href={item.url.startsWith('http') ? item.url : `https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block p-4 border border-gray-200 bg-white rounded hover:border-green-400 hover:shadow-md transition-all group"
              >
                <h3 className="text-gray-900 font-bold mb-1 group-hover:text-green-700">{item.titre}</h3>
                <p className="text-sm text-green-600 mb-1 flex items-center">
                  <ExternalLink size={12} className="mr-1" />
                  {item.url}
                </p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Illustrations Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <ImageIcon className="mr-2 text-green-700" size={24} />
            <h2 className="text-gray-900 text-2xl font-bold">Galerie d'Illustrations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentation.illustrations.map((item, index) => (
              <div key={index} className="p-4 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 pb-6 rounded">
                <div className="w-full h-40 bg-gray-50 mb-3 flex items-center justify-center overflow-hidden rounded-sm">
                  <ImageIcon className="text-gray-300" size={48} />
                </div>
                <h3 className="text-gray-900 font-medium text-center text-sm">{item.titre}</h3>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
