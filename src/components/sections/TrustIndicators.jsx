import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../common/Card';
import { reviewPlatforms } from '../../data/reviews';

const TrustIndicators = () => {
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
            Trusted by Thousands of Learners
          </h2>
          <p className="text-lg text-dark-light max-w-2xl mx-auto">
            See what our students and industry experts say about us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewPlatforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="text-center">
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{platform.name}</h3>
                <div className="flex items-center justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(platform.rating)
                          ? 'text-accent'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-dark">
                    {platform.rating}
                  </span>
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-600 transition-colors font-medium"
                >
                  View Insights <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
