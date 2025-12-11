import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Brain, Network, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FooterNav } from './FooterNav';

interface EquipeProps {
  setActiveSection: (section: string) => void;
}

export function Equipe({ setActiveSection }: EquipeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const members = [
    { id: 0, name: 'Mira Ballout', role: 'Médecin généraliste — Spécialiste des usages numériques', emoji: '👩‍⚕️', bio: "La télémédecine a transformé ma pratique. Je peux désormais suivre des patients qui, autrefois, renonçaient aux soins faute de moyens de transport." },
    { id: 1, name: 'Anne‑Sophie Cases', role: 'Professeure des universités en sciences de gestion — Université de Montpellier', emoji: '👩‍🏫', bio: "La télémédecine risque d'aggraver les inégalités sociales et territoriales. La fracture numérique est une réalité qu'on ne peut ignorer." },
    { id: 2, name: 'Dr Gregoire Mercier', role: "Sciences des données de santé — Unité d'évaluation économique, CHU Montpellier", emoji: '👨‍🔬', bio: "La multiplication des plateformes de téléconsultation pose des questions majeures en termes de sécurité et de confidentialité des données de santé." },
    { id: 3, name: 'Marc Petit', role: 'Spécialiste Données & Sécurité', emoji: '👨‍💻', bio: 'Analyste données et spécialiste en cybersécurité.' },
    { id: 4, name: 'Julie Bernard', role: 'Coordinatrice Générale', emoji: '👩‍💼', bio: 'Gestion logistique et coordination des entretiens.' },
    { id: 5, name: 'Luc Fontaine', role: 'Designer UX/UI - Développeur', emoji: '👨‍🎨', bio: 'Design et intégration de la plateforme interactive.' }
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

  const goHome = () => setActiveSection('home');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') handleNextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') handlePrevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      <motion.button initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} onClick={goHome} className="fixed top-6 left-6 z-30 flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40" />
        <motion.div animate={{ y: [0, 20, 0], x: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30" />
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50" />
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-1/4"><Heart size={40} className="text-green-300 opacity-20" /></motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-1/4"><Network size={50} className="text-emerald-300 opacity-20" /></motion.div>
        <motion.div animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-16"><Brain size={35} className="text-teal-300 opacity-20" /></motion.div>
      </div>

      <div className="w-full h-full relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div key="intro" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">
                <div className="inline-flex items-center justify-center w-28 h-28 mb-8">
                  <div className="text-6xl">👥</div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">6 Membres</h1>
                <p className="text-gray-600 text-lg">Une équipe pluridisciplinaire engagée dans l'étude de la télémédecine.</p>
                <p className="text-sm text-gray-500 mt-4">Utilisez ← → ou Cliquez / ENTRÉE pour naviguer</p>
              </div>
            </motion.div>
          )}

          {currentSlide >= 1 && currentSlide <= members.length && (
            <motion.div key={`member-${currentSlide}`} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.6 }} className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-2xl w-full">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/85 backdrop-blur-sm border-2 border-emerald-600 rounded-3xl shadow-2xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-8">
                      <span className="text-6xl">{members[currentSlide - 1].emoji}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{members[currentSlide - 1].name}</h2>
                    <p className="text-xl text-green-600 font-semibold mb-6">{members[currentSlide - 1].role}</p>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 mb-8">
                      <p className="text-gray-700 leading-relaxed">{members[currentSlide - 1].bio}</p>
                    </motion.div>

                    <div className="w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full mb-8"></div>

                    <p className="text-center text-sm text-gray-500">Membre {currentSlide} / {members.length}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <motion.div key={idx} className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300 w-2'}`} />
        ))}
      </div>

      <motion.button onClick={handlePrevSlide} whileHover={{ scale: 1.03 }} className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 rounded-full shadow-lg border-2 border-green-600">
        <ArrowLeft size={28} className="text-green-600" />
      </motion.button>
      <motion.button onClick={handleNextSlide} whileHover={{ scale: 1.03 }} className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-white/90 rounded-full shadow-lg border-2 border-green-600">
        <ArrowRight size={28} className="text-green-600" />
      </motion.button>

      <FooterNav setActiveSection={setActiveSection} currentSection="equipe" />
    </div>
  );
}