import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6"
          >
            <span className="text-primary font-semibold text-lg">Our Vision</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8 leading-tight">
            To create a global learning ecosystem where education is{' '}
            <span className="text-gradient">accessible, practical, and transformative</span>{' '}
            for everyone, anytime, anywhere.
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-dark-light max-w-3xl mx-auto"
          >
            At TechVid Innovations, we empower individuals with practical knowledge and industry-ready skills through real-time projects, interactive online classes, and comprehensive career support - from basic to advanced levels.
          </motion.p>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-primary/20"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-secondary/20"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-accent/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
