import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import { programCategories } from '../../data/programs';

const ProgramsOverview = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Explore Our Programs
          </h2>
          <p className="text-lg text-dark-light max-w-3xl mx-auto">
            Choose from our comprehensive range of industry-aligned programs designed to
            make you job-ready
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programCategories.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover onClick={() => navigate(`/services?program=${program.slug}`)}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-dark mb-3">{program.name}</h3>
                  <p className="text-dark-light mb-6">{program.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services?program=${program.slug}`);
                    }}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
