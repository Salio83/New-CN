import { ArrowRight, Activity, Heart, Users, BookOpen, TrendingUp, Shield, Stethoscope, Sparkles, Brain, Network } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50"
        />
        
        {/* Floating icons */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-1/4"
        >
          <Heart size={40} className="text-green-300 opacity-20" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4"
        >
          <Network size={50} className="text-emerald-300 opacity-20" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-16"
        >
          <Brain size={35} className="text-teal-300 opacity-20" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-3xl mb-8 shadow-2xl"
        >
          <Activity size={56} className="text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Sparkles size={16} className="text-green-600" />
            <span className="text-sm text-green-700">Projet Polytech Montpellier 2024</span>
          </div>
          
          <h1 className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
            La Controverse de la<br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Télémédecine & E-Santé
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Une exploration approfondie des enjeux, débats et perspectives entourant 
          la transformation numérique du système de santé. Découvrez le résultat 
          de nos recherches académiques et entretiens avec des experts du domaine 
          de la santé connectée et de la télémédecine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={() => setActiveSection('argumentation')}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explorer l'argumentation
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => setActiveSection('experts')}
            className="inline-flex items-center px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 hover:shadow-lg transition-all duration-300"
          >
            Rencontrer les experts
          </button>
        </motion.div>

        {/* Enhanced stats/features section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-6 bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-orange-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('experts')}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-100 rounded-2xl mb-4">
              <Stethoscope size={32} className="text-orange-600" />
            </div>
            <h3 className="text-gray-900 mb-2 font-semibold">3 Experts</h3>
            <p className="text-sm text-gray-600">
              Entretiens approfondis avec des professionnels de la santé
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-6 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('documentation')}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-100 rounded-2xl mb-4">
              <BookOpen size={32} className="text-emerald-600" />
            </div>
            <h3 className="text-gray-900 mb-2 font-semibold">20 Sources</h3>
            <p className="text-sm text-gray-600">
              Bibliographie académique complète et vérifiée
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-6 bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-red-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('chronologie')}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-red-100 rounded-2xl mb-4">
              <TrendingUp size={32} className="text-red-600" />
            </div>
            <h3 className="text-gray-900 mb-2 font-semibold">Chronologie</h3>
            <p className="text-sm text-gray-600">
              Évolution historique de la télémédecine
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-6 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:border-gray-400 transition-all cursor-pointer"
            onClick={() => setActiveSection('equipe')}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl mb-4">
              <Users size={32} className="text-gray-600" />
            </div>
            <h3 className="text-gray-900 mb-2 font-semibold">6 Membres</h3>
            <p className="text-sm text-gray-600">
              Une équipe pluridisciplinaire engagée
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
