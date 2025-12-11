import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ExpertsProps {
  setActiveSection: (section: string) => void;
}

export function Experts({ setActiveSection }: ExpertsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experts = [
    {
      id: 0,
      name: 'Mira Ballout',
      role: 'Médecin généraliste — Spécialiste des usages numériques',
      contact: '0751534190',
      stance: 'Favorable',
      quote: "La télémédecine a transformé ma pratique. Je peux désormais suivre des patients qui, autrefois, renonçaient aux soins faute de moyens de transport.",
      tags: ['Médecine générale','Usages numériques','Pratique quotidienne']
    },
    {
      id: 1,
      name: 'Anne‑Sophie Cases',
      role: "Professeure des universités en sciences de gestion — Université de Montpellier",
      contact: 'anne-sophie.cases@umontpellier.fr',
      stance: 'Analytique',
      quote: "La télémédecine risque d'aggraver les inégalités sociales et territoriales. La fracture numérique est une réalité qu'on ne peut ignorer.",
      tags: ['Sciences de gestion','E-santé','Recherche']
    },
    {
      id: 2,
      name: 'Dr Gregoire Mercier',
      role: "Sciences des données de santé — Unité d'évaluation économique, CHU Montpellier",
      contact: 'g-mercier@chu-montpellier.fr',
      stance: 'Vigilante',
      quote: "La multiplication des plateformes de téléconsultation pose des questions majeures en termes de sécurité et de confidentialité des données de santé.",
      tags: ['Recherche & Données de Santé','Évaluation économique','Sciences de la santé']
    }
  ];

  const slides = [
    { id: 0, type: 'intro' },
    ...experts.map((exp, idx) => ({ id: idx + 1, type: 'expert', data: exp })),
    { id: experts.length + 1, type: 'methodo' } // méthode des entretiens
  ];

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setActiveSection('documentation');
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setActiveSection('argumentation');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') handleNextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') handlePrevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div 
      className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden"
    >
      {/* Header minimaliste (même style que les autres pages) */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="fixed top-6 left-6 z-30">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#10B981" opacity="0.1"/>
          <path d="M20 28C20 28 10 22 10 15C10 12 12 10 14.5 10C16.5 10 18 11 20 13C22 11 23.5 10 25.5 10C28 10 30 12 30 15C30 22 20 28 20 28Z" fill="#10B981" opacity="0.8"/>
          <path d="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 16 L22 24 L24 20 L26 20 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 20 L22 20 L24 20 L26 20 L28 16 L30 24 L32 20; M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20"/>
          </path>
          <circle cx="30" cy="12" r="6" fill="white"/>
          <path d="M30 9 L30 15 M27 12 L33 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Slide container */}
      <div className="w-full h-full relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* Intro */}
          {currentSlide === 0 && (
            <motion.div key="intro" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">
                <div className="inline-flex items-center justify-center w-28 h-28 mb-8">
                  <div className="text-6xl">🎤</div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entretiens — Experts</h1>
                <p className="text-gray-600 text-lg">Trois experts sélectionnés pour couvrir la diversité des points de vue sur la télémédecine.</p>
              </div>
            </motion.div>
          )}

          {/* Experts */}
          {currentSlide >= 1 && currentSlide <= experts.length && (
            <motion.div
              key={`expert-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              <div className="max-w-2xl w-full">
                <div className="bg-white/85 backdrop-blur-sm border-2 border-emerald-600 rounded-3xl shadow-2xl p-8 md:p-12">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4">
                      <span className="text-3xl">{experts[currentSlide - 1].name.split(' ')[0][0]}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{experts[currentSlide - 1].name}</h2>
                    <p className="text-sm text-green-600 font-semibold mb-2">{experts[currentSlide - 1].role}</p>
                    {experts[currentSlide - 1].contact && <p className="text-xs text-gray-500 mb-2">{experts[currentSlide - 1].contact}</p>}
                    <p className="text-sm font-medium text-gray-700 mb-1">Position : <span className="text-green-600 font-bold">{experts[currentSlide - 1].stance}</span></p>
                  </div>

                  <blockquote className="text-gray-700 italic text-lg text-center mb-6">“{experts[currentSlide - 1].quote}”</blockquote>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {experts[currentSlide - 1].tags.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-200">{t}</span>
                    ))}
                  </div>

                  <p className="text-center text-sm text-gray-500">Expert {currentSlide} / {experts.length}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Méthodologie */}
          {currentSlide === slides.length - 1 && (
            <motion.div key="methodo" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-3xl w-full">
                <div className="bg-white/85 backdrop-blur-sm border-2 border-emerald-600 rounded-3xl shadow-2xl p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Méthodologie des entretiens</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les entretiens ont été menés entre septembre et novembre 2025, en présentiel ou en visioconférence. Chaque entretien a duré entre 45 et 90 minutes et a été retranscrit intégralement.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les experts ont été sélectionnés pour représenter la diversité des points de vue et des parties prenantes impliquées dans la controverse de la télémédecine.
                  </p>
                  <p className="text-center text-sm text-gray-500">Fin — utilisez les flèches ← → ou Espace/Entrée pour naviguer</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <div key={idx} className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300 w-2'}`} />
        ))}
      </div>

      {/* Arrows */}
      <motion.button onClick={handlePrevSlide} className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 rounded-full shadow-lg border-2 border-green-600">
        <ArrowLeft size={24} className="text-green-600" />
      </motion.button>
      <motion.button onClick={handleNextSlide} className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 rounded-full shadow-lg border-2 border-green-600">
        <ArrowRight size={24} className="text-green-600" />
      </motion.button>
    </div>
  );
}
