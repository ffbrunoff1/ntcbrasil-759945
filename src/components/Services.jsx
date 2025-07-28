import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  const applications = [
    'Drenagem eficiente de solos',
    'Separação de materiais distintos',
    'Reforço estrutural de solos',
    'Proteção de sistemas de impermeabilização',
    'Filtração em sistemas de contenção',
    'Estabilização de estradas e ferrovias',
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-4"
            variants={itemVariants}
          >
            Nosso Produto Destaque
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16"
            variants={itemVariants}
          >
            Sua obra precisa de soluções inovadoras? Conheça nossa linha de
            geossintéticos!
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-brand-white p-8 md:p-12 rounded-2xl shadow-2xl grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-4">
              Manta Geotêxtil de Alta Performance
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A manta geotêxtil é uma solução versátil e eficiente para diversas
              aplicações em construção civil e engenharia. Fabricada com fibras
              sintéticas, oferece alta resistência e durabilidade, suportando
              condições severas sem comprometer sua integridade. Ideal para
              obras de infraestrutura como estradas e barragens, este material
              contribui significativamente para a estabilidade e longevidade das
              construções.
            </p>
            <div className="space-y-3">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{app}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1752756496683_nx8xo50a2er_geotextil_1.jpg"
            alt="Rolo de Manta Geotêxtil"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
            variants={imageVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
