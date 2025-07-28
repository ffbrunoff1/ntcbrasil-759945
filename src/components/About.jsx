import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Zap } from 'lucide-react';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
      title: 'Qualidade Superior',
      description:
        'Nossos geossintéticos seguem os mais rigorosos padrões de qualidade, garantindo segurança e durabilidade para sua obra.',
    },
    {
      icon: <Layers className="h-10 w-10 text-brand-blue" />,
      title: 'Soluções Versáteis',
      description:
        'Oferecemos uma linha completa de produtos para diversas aplicações, desde drenagem e filtração até reforço de solo.',
    },
    {
      icon: <Zap className="h-10 w-10 text-brand-blue" />,
      title: 'Inovação Contínua',
      description:
        'Investimos em tecnologia para desenvolver soluções inovadoras que otimizam custos e aumentam a eficiência dos projetos.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              A <span className="text-gradient">NTC Brasil</span> é sua parceira
              em Geossintéticos
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Somos especialistas no fornecimento de soluções em geossintéticos
              para a construção civil. Com foco em inovação e qualidade, a NTC
              Brasil oferece produtos que são essenciais para a engenharia
              moderna, garantindo a estabilidade, durabilidade e
              sustentabilidade de grandes obras.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é entregar materiais de alta performance, como a
              manta geotêxtil, que atendem às necessidades específicas de cada
              projeto, seja em drenagem, filtração, separação de solos ou
              proteção. Conte com a nossa expertise para levar sua construção ao
              próximo nível.
            </p>
          </motion.div>
          <motion.img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1752756496683_nx8xo50a2er_geotextil_1.jpg"
            alt="Aplicação de Manta Geotêxtil em obra"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-light-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
