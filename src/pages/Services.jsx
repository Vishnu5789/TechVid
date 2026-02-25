import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { programCategories, features } from '../data/programs';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const programName = searchParams.get('program');
    if (programName) {
      const program = programCategories.find(p => p.slug === programName);
      setSelectedProgram(program);
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {selectedProgram ? selectedProgram.name : 'Top Categories'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
          >
            {selectedProgram
              ? selectedProgram.description
              : 'Explore Our Best Online Programs'}
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {selectedProgram && (
            <div className="mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedProgram(null);
                  navigate('/services');
                }}
              >
                ← Back to All Programs
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programCategories.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  hover
                  className={`h-full ${
                    selectedProgram?.id === program.id ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{program.icon}</div>
                    <h3 className="text-2xl font-bold text-dark mb-3">{program.name}</h3>
                    <p className="text-dark-light mb-6">{program.description}</p>
                    <Button
                      variant={selectedProgram?.id === program.id ? 'primary' : 'outline'}
                      size="sm"
                      className="group"
                      onClick={() => {
                        setSelectedProgram(program);
                        navigate(`/services?program=${program.slug}`);
                      }}
                    >
                      Explore Programs
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Every program is designed with industry needs in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Industry-Aligned Curriculum',
                description: 'Content developed with input from industry experts',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Instructors',
                description: 'Learn from professionals with real-world experience',
              },
              {
                icon: '💼',
                title: 'Job Placement Support',
                description: 'Career guidance and placement assistance',
              },
              {
                icon: '📱',
                title: 'Flexible Learning',
                description: 'Study at your own pace, anytime, anywhere',
              },
              {
                icon: '🏆',
                title: 'Recognized Certificates',
                description: 'Earn credentials valued by employers',
              },
              {
                icon: '🤝',
                title: 'Community Support',
                description: 'Join a network of learners and alumni',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-dark-light">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of students who are already transforming their careers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" size="lg" className="bg-accent hover:bg-accent-600">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
