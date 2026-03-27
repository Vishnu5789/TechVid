import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaRoute, FaVideo, FaAward, FaBriefcase } from 'react-icons/fa';
import Card from '../common/Card';
import { features } from '../../data/programs';

const iconMap = {
  monitor: FaDesktop,
  route: FaRoute,
  video: FaVideo,
  award: FaAward,
  briefcase: FaBriefcase,
};

const Features = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">

        {/* WHY CHOOSE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Choose Techvid Innovation
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            We provide industry-focused education with practical experience and comprehensive career support
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-dark-light">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* OUR COLLABORATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Collaborations
          </h2>
          <p className="text-dark-light">
            We proudly collaborate with leading organizations and institutions
          </p>
        </motion.div>

        {/* COLLABORATION LOGOS - ALWAYS COLOR */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">

          <img src="/images/our-partners/p1.png" alt="partner1"
            className="w-full h-16 object-contain" />

          <img src="/images/our-partners/p2.png" alt="partner2"
            className="w-full h-16 object-contain" />

          <img src="/images/our-partners/p3.png" alt="partner3"
            className="w-full h-16 object-contain" />

          <img src="/images/our-partners/p4.png" alt="partner4"
            className="w-full h-16 object-contain" />

          <img src="/images/our-partners/p5.png" alt="partner5"
            className="w-full h-16 object-contain" />

          <img src="/images/our-partners/p6.png" alt="partner6"
            className="w-full h-16 object-contain" />

        </div>

      </div>
    </section>
  );
};

export default Features;