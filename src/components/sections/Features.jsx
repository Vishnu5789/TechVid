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
                    <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                    <p className="text-dark-light">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
