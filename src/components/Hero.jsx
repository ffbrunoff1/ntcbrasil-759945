import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-light-gray overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-white to-brand-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-5 z-0"></div>
      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-dark-text mb-4"
          variants={itemVariants}
        >
          <span className="text-gradient">Solucoes em drenagem</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-8"
          variants={itemVariants}
        >
          Transforme suas obras com nossa manta geotêxtil de alta performance.
          Soluções eficientes para drenagem, filtração e separação que garantem
          a durabilidade e estabilidade do seu projeto.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-lg shadow-blue-glow transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Solicite um Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-brand-white to-transparent z-10"></div>
    </section>
  );
}
