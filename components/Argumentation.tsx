import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, ArrowRight, Brain, Network, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ArgumentationProps {
  setActiveSection: (section: string) => void;
}

export function Argumentation({ setActiveSection }: ArgumentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const debatePoints = [
    {
      category: 'Accessibilité',
      pro: 'Accès aux soins pour zones rurales et isolées',
      con: 'Fracture numérique et inégalités technologiques',
      icon: 'accessibility'
    },
    {
      category: 'Efficience',
      pro: 'Réduction des délais d\'attente et des coûts',
      con: 'Limitation du diagnostic clinique approfondi',
      icon: 'efficiency'
    },
    {
      category: 'Données & Sécurité',
      pro: 'Centralisation des données médicales',
      con: 'Risques de piratage et violations de confidentialité',
      icon: 'security'
    },
    {
      category: 'Relation Soignant-Soigné',
      pro: 'Continuité de suivi et monitoring en temps réel',
      con: 'Perte de l\'humanité et de l\'empathie médicale',
      icon: 'relationship'
    },
    {
      category: 'Régulation',
      pro: 'Standardisation des pratiques médicales',
      con: 'Rigidité bureaucratique et manque d\'adaptation',
      icon: 'regulation'
    },
    {
      category: 'Innovation',
      pro: 'Évolution rapide des technologies de santé',
      con: 'Obsolescence rapide et coûts de mise à jour',
      icon: 'innovation'
    }
  ];

  const slides = [
    { id: 0, type: 'intro' },
    { id: 1, type: 'table' },
    { id: 2, type: 'synthesis' }
  ];

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setActiveSection('experts');
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goHome = () => {
    setActiveSection('home');
  };

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
      {/* Header avec logo cliquable */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={(e) => {
          e.stopPropagation();
          goHome();
        }}
        className="fixed top-6 left-6 z-30 flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#10B981" opacity="0.1"/>
          <path d="M20 28C20 28 10 22 10 15C10 12 12 10 14.5 10C16.5 10 18 11 20 13C22 11 23.5 10 25.5 10C28 10 30 12 30 15C30 22 20 28 20 28Z" fill="#10B981" opacity="0.8"/>
          <path d="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 16 L22 24 L24 20 L26 20 L28 20 L32 20; M8 20 L12 20 L14 20 L16 20 L18 20 L20 20 L22 20 L24 20 L26 20 L28 16 L30 24 L32 20; M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20"/>
          </path>
          <circle cx="30" cy="12" r="6" fill="white"/>
          <path d="M30 9 L30 15 M27 12 L33 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-sm font-bold text-gray-900">ControCare</span>
      </motion.button>

      {/* Animated background */}
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
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50" />
        
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
          
          {/* SLIDE 0: INTRO */}
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
                  <div className="text-6xl">⚖️</div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-6">
                  <h1 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                    La Controverse de la<br />
                    <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Télémédecine & E-Santé
                    </span>
                  </h1>
                </motion.div>
                
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-gray-600 text-lg mb-12 leading-relaxed">
                  Exploration complète des enjeux, avantages et défis de la transformation numérique du système de santé
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500">Cliquez n'importe où ou appuyez sur ENTRÉE pour continuer</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 1: TABLE */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center relative z-10 px-4"
            >
              <div className="max-w-6xl w-full h-full overflow-y-auto py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-3xl shadow-2xl overflow-hidden"
                >
                  {/* Table Header */}
                  <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
                    <div className="p-6 md:p-8 border-r border-emerald-500">
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <span className="text-2xl">⚖️</span> Enjeux
                      </h2>
                    </div>
                    <div className="p-6 md:p-8 border-r border-emerald-500">
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <CheckCircle size={24} /> Avantages
                      </h2>
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <AlertCircle size={24} /> Défis
                      </h2>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-emerald-200">
                    {debatePoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                        className="grid grid-cols-1 md:grid-cols-3 hover:bg-green-50/50 transition-colors"
                      >
                        <div className="p-6 md:p-8 border-r border-emerald-100 bg-gradient-to-r from-emerald-50 to-transparent">
                          <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">
                            {point.category}
                          </h3>
                          <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                        </div>

                        <div className="p-6 md:p-8 border-r border-emerald-100 flex items-center">
                          <div className="flex gap-3 w-full">
                            <div className="flex-shrink-0 pt-1">
                              <TrendingUp size={24} className="text-green-600 flex-shrink-0" />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                              {point.pro}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 md:p-8 flex items-center">
                          <div className="flex gap-3 w-full">
                            <div className="flex-shrink-0 pt-1">
                              <TrendingDown size={24} className="text-red-500 flex-shrink-0" />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                              {point.con}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mt-8">
                  <p className="text-sm text-gray-500 mb-4">Cliquez pour continuer ou appuyez sur RETOUR arrière</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 2: SYNTHESIS */}
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-3xl shadow-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-4xl">🎯</span> Synthèse
                  </h2>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                    <p className="text-base md:text-lg">
                      La controverse sur la télémédecine met en lumière une <strong>tension entre l'innovation technologique et les valeurs fondamentales de la médecine</strong>. Si les avantages en termes d'accessibilité et d'efficience sont indéniables, les risques liés à l'équité d'accès, à la qualité des soins et à la protection des données ne peuvent être ignorés.
                    </p>
                    
                    <p className="text-base md:text-lg">
                      L'<strong>enjeu principal réside dans la capacité à développer un système hybride</strong> qui combine les bénéfices du numérique tout en préservant l'humanité de la relation soignant-soigné. Cela nécessite une <strong>approche équilibrée</strong> impliquant régulateurs, professionnels de santé, patients et technologues.
                    </p>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">💡 Recommandation</p>
                      <p className="text-gray-700">
                        Favoriser une <strong>transition progressive et inclusive</strong> vers la télémédecine en garantissant l'accès équitable, la sécurité des données et le maintien de la qualité relationnelle des soins.
                      </p>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextSlide();
                      }}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
                    >
                      Continuer
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
