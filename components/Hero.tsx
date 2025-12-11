import { ArrowRight, Heart, Users, BookOpen, TrendingUp, Stethoscope, Brain, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      type: 'hero',
      badge: 'Projet Polytech Montpellier 2024',
      title: 'La Controverse de la',
      titleHighlight: 'Télémédecine & E-Santé',
      description: 'Une exploration approfondie des enjeux, débats et perspectives entourant la transformation numérique du système de santé. Découvrez le résultat de nos recherches académiques et entretiens avec des experts du domaine de la santé connectée et de la télémédecine.'
    },
    {
      id: 1,
      type: 'stats'
    },
    {
      id: 2,
      type: 'disclaimer'
    }
  ];

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setActiveSection('argumentation');
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Disable scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleNextSlide();
      if (e.key === 'Backspace') handlePrevSlide();
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
      onClick={handleNextSlide}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50"
        />
        
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-1/4">
          <Heart size={40} className="text-green-300 opacity-20" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-1/4">
          <Network size={50} className="text-emerald-300 opacity-20" />
        </motion.div>
        <motion.div animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-16">
          <Brain size={35} className="text-teal-300 opacity-20" />
        </motion.div>
      </div>

      {/* Slide Container */}
      <div className="w-full h-full relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center relative z-10 px-4"
            >
              <div className="max-w-3xl text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="inline-flex items-center justify-center w-28 h-28 mb-8"
                >
                  <svg width="112" height="112" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#10B981" opacity="0.1"/>
                    <path d="M20 28C20 28 10 22 10 15C10 12 12 10 14.5 10C16.5 10 18 11 20 13C22 11 23.5 10 25.5 10C28 10 30 12 30 15C30 22 20 28 20 28Z" fill="#10B981" opacity="0.8"/>
                    <path d="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                      <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 16 L22 24 L24 20 L26 20 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 20 L22 20 L24 20 L26 20 L28 16 L30 24 L32 20; M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20"/>
                    </path>
                    <circle cx="30" cy="12" r="6" fill="white"/>
                    <path d="M30 9 L30 15 M27 12 L33 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                    <span className="text-sm text-green-700">Projet Polytech Montpellier 2024</span>
                  </div>
                  <h1 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                    La Controverse de la<br />
                    <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Télémédecine & E-Santé
                    </span>
                  </h1>
                </motion.div>
                
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-gray-600 text-lg mb-12 leading-relaxed">
                  Une exploration approfondie des enjeux, débats et perspectives entourant la transformation numérique du système de santé. Découvrez le résultat de nos recherches académiques et entretiens avec des experts du domaine de la santé connectée et de la télémédecine.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500">Cliquez n'importe où ou appuyez sur ENTRÉE pour continuer</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center relative z-10 px-4"
            >
              <div className="max-w-5xl w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:border-emerald-700 transition-all" onClick={() => setActiveSection('experts')}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4">
                      <Stethoscope size={32} className="text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2 font-bold text-lg">3 Experts</h3>
                    <p className="text-sm text-gray-600">Entretiens approfondis avec des professionnels de la santé</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:border-emerald-700 transition-all" onClick={() => setActiveSection('documentation')}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-4">
                      <BookOpen size={32} className="text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2 font-bold text-lg">20 Sources</h3>
                    <p className="text-sm text-gray-600">Bibliographie académique complète et vérifiée</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:border-emerald-700 transition-all" onClick={() => setActiveSection('chronologie')}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl mb-4">
                      <TrendingUp size={32} className="text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2 font-bold text-lg">Chronologie</h3>
                    <p className="text-sm text-gray-600">Évolution historique de la télémédecine</p>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="p-6 bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:border-emerald-700 transition-all" onClick={() => setActiveSection('equipe')}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl mb-4">
                      <Users size={32} className="text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2 font-bold text-lg">6 Membres</h3>
                    <p className="text-sm text-gray-600">Une équipe pluridisciplinaire engagée</p>
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center">
                  <p className="text-sm text-gray-500 mb-4">Cliquez pour continuer ou appuyez sur RETOUR arrière</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center relative z-10 px-4 overflow-hidden"
            >
              <div className="max-w-2xl w-full max-h-screen overflow-y-auto py-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Clause de Non-Responsabilité</h2>
                  
                  <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl p-8 mb-8 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Non-Responsabilité</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      Ce site constitue un projet académique réalisé dans le cadre du cursus Polytech Montpellier. Les informations, données et analyses présentées ont pour objectif pédagogique d'explorer les controverses entourant la télémédecine et la e-santé. Elles ne constituent pas des conseils médicaux et ne doivent pas être utilisées comme base de décision médicale.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Les opinions exprimées sont celles des auteurs et ne reflètent pas nécessairement l'avis de l'établissement.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl p-8 mb-8 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Mentions Légales</h3>
                    <p className="text-gray-600 text-sm mb-3"><strong>Responsable éditorial :</strong> Polytech Montpellier</p>
                    <p className="text-gray-600 text-sm mb-3"><strong>Année :</strong> 2024</p>
                    <p className="text-gray-600 text-sm mb-3"><strong>Propriété Intellectuelle :</strong> © 2024 Polytech Montpellier. Tous droits réservés.</p>
                    <p className="text-gray-600 text-sm mb-3"><strong>Sources :</strong> Les références bibliographiques sont disponibles dans la section documentation du site.</p>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSection('argumentation');
                      }}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
                    >
                      Accéder au contenu principal
                      <ArrowRight size={20} className="ml-2" />
                    </button>
                    <p className="text-sm text-gray-500">Cliquez ou appuyez sur ENTRÉE pour continuer</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300 w-2'}`}
          />
        ))}
      </div>
    </div>
  );
}
