import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Brain, Network, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EquipeProps {
  setActiveSection: (section: string) => void;
}

export function Equipe({ setActiveSection }: EquipeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const members = [
    { 
      id: 0, 
      name: 'Alice Dupré', 
      role: 'Project Lead - Analystes', 
      emoji: '👩‍💼', 
      bio: 'Coordinatrice du projet et responsable de l\'analyse documentaire sur les enjeux réglementaires et éthiques de la télémédecine' 
    },
    { 
      id: 1, 
      name: 'Thomas Moreau', 
      role: 'Chercheur Principal', 
      emoji: '👨‍🔬', 
      bio: 'Spécialiste en recherche académique et méthodologie scientifique. Expert en analyse comparative des systèmes de santé numériques' 
    },
    { 
      id: 2, 
      name: 'Sophie Leclerc', 
      role: 'Experte Santé Numérique', 
      emoji: '👩‍⚕️', 
      bio: 'Professionnelle du secteur santé avec 12 ans d\'expérience. Référente e-santé et télémédecine au niveau institutionnel' 
    },
    { 
      id: 3, 
      name: 'Marc Petit', 
      role: 'Spécialiste Données & Sécurité', 
      emoji: '👨‍💻', 
      bio: 'Analyste données et spécialiste en cybersécurité. Responsable de l\'analyse des risques technologiques et de protection des données' 
    },
    { 
      id: 4, 
      name: 'Julie Bernard', 
      role: 'Coordinatrice Générale', 
      emoji: '👩‍💼', 
      bio: 'Gestion logistique, coordination des entretiens avec les experts et des ressources documentaires du projet' 
    },
    { 
      id: 5, 
      name: 'Luc Fontaine', 
      role: 'Designer UX/UI - Développeur', 
      emoji: '👨‍🎨', 
      bio: 'Création et développement de cette plateforme interactive. Design et intégration des données de recherche' 
    }
  ];

  const slides = [
    { id: 0, type: 'intro' },
    ...members.map((mem, idx) => ({ id: idx + 1, type: 'member', data: mem }))
  ];

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setActiveSection('home');
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setActiveSection('chronologie');
    }
  };

  const goHome = () => {
    setActiveSection('home');
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
      {/* Header avec logo cliquable */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onClick={goHome}
        className="fixed top-6 left-6 z-30 flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
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
        <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40" />
        <motion.div animate={{ y: [0, 20, 0], x: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30" />
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50" />
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-1/4"><Heart size={40} className="text-green-300 opacity-20" /></motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-1/4"><Network size={50} className="text-emerald-300 opacity-20" /></motion.div>
        <motion.div animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-16"><Brain size={35} className="text-teal-300 opacity-20" /></motion.div>
      </div>

      {/* Slide Container */}
      <div className="w-full h-full relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          
          {/* SLIDE 0: INTRO */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center relative z-10 px-4"
            >
              <div className="max-w-3xl text-center">
                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, type: "spring" }} className="inline-flex items-center justify-center w-28 h-28 mb-8">
                  <div className="text-6xl">👥</div>
                </motion.div>
                
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                  6 Membres<br />
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Pluridisciplinaires
                  </span>
                </motion.h1>
                
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-gray-600 text-lg mb-12 leading-relaxed">
                  Une équipe engagée dans l'exploration rigoureuse de la controverse de la télémédecine et de l'e-santé
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col gap-3">
                  <p className="text-sm text-gray-500">Cliquez ou appuyez sur ENTRÉE pour continuer</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* SLIDES 1-6: MEMBERS */}
          {currentSlide >= 1 && currentSlide <= 6 && (
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center relative z-10 px-4"
            >
              <div className="max-w-2xl w-full">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-3xl shadow-2xl p-8 md:p-12">
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-8">
                      <span className="text-6xl">{members[currentSlide - 1].emoji}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {members[currentSlide - 1].name}
                    </h2>
                    <p className="text-xl text-green-600 font-semibold mb-6">
                      {members[currentSlide - 1].role}
                    </p>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        {members[currentSlide - 1].bio}
                      </p>
                    </motion.div>

                    <div className="w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full mb-8"></div>

                    <p className="text-center text-sm text-gray-500">
                      Membre {currentSlide} / {members.length}
                    </p>
                  </div>
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

      {/* Navigation arrows */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={handlePrevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all border-2 border-green-600 cursor-pointer"
      >
        <ArrowLeft size={28} className="text-green-600" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={handleNextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all border-2 border-green-600 cursor-pointer"
      >
        <ArrowRight size={28} className="text-green-600" />
      </motion.button>
    </div>
  );
}