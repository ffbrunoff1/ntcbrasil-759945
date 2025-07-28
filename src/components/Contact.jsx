import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Enviando...');

    // Simulação de envio para Formspree ou similar
    // Em um projeto real, você usaria fetch para enviar os dados
    setTimeout(() => {
      // Simula sucesso
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-dark-text mb-4"
            variants={formVariants}
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12"
            variants={formVariants}
          >
            Entre em contato agora e descubra como podemos otimizar seu projeto
            de construção.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <h3 className="text-2xl font-bold text-dark-text mb-6">
              Fale Conosco
            </h3>
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/ffbrunoff@yahoo.com.br"
              method="POST"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-brand-blue text-brand-white font-bold rounded-lg shadow-lg shadow-blue-glow transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Enviar Mensagem <Send className="ml-2 h-5 w-5" />
              </button>
              {status && (
                <p className="mt-4 text-center text-gray-600">{status}</p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <h3 className="text-2xl font-bold text-dark-text mb-6">
              Nossas Informações
            </h3>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-dark-text">Email</h4>
                <p className="text-gray-600">ffbrunoff@yahoo.com.br</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-dark-text">
                  Endereço
                </h4>
                <p className="text-gray-600">
                  Padre Lebret, 801, G05, Bloco 03
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
