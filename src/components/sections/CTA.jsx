import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-secondary to-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for actual image */}
              <div className="aspect-square bg-white/10 backdrop-blur-lg p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">📚</div>
                  <p className="text-2xl font-semibold">Student Success</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-full opacity-50"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-medium mb-4 text-gray-100"
            >
              At TechVid Innovations,
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Education is not just a service -{' '}
              <span className="text-accent">it's our Responsibility</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-100 mb-8"
            >
              We are committed to providing quality education that transforms lives and creates
              opportunities for everyone, regardless of their background or circumstances.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-accent hover:bg-accent-600"
              >
                Join Our Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
