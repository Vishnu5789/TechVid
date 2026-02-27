import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { founders, team } from '../data/team';
import { partners } from '../data/partners';
import { certificates } from '../data/certificates';

const About = () => {
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <>
      <Helmet>
        <title>About Us - Meet Our Founders | TechVid Innovations</title>
        <meta name="description" content="Learn about TechVid Innovations, our mission to provide accessible education, and meet our visionary founders. ISO certified educational institution in Hyderabad." />
        <meta name="keywords" content="TechVid Innovations about, founders, educational institution, ISO certified, Hyderabad tech education, online learning platform" />
        <link rel="canonical" href="https://www.techvidin.com/about" />
        <meta property="og:title" content="About TechVid Innovations - Meet Our Founders" />
        <meta property="og:description" content="Learn about our mission to provide accessible, practical, and transformative education. Meet our visionary founders." />
        <meta property="og:url" content="https://www.techvidin.com/about" />
        <meta property="og:image" content="https://www.techvidin.com/images/founders/Founder&CEO.png" />
      </Helmet>
      
      <div>
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
        <div className="container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About TechVid Innovations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
          >
            Transforming education through technology and innovation
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-dark mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-dark-light leading-relaxed"
            >
              At TechVid Innovations, we are committed to delivering quality education that transforms lives through real-time projects, interactive learning, and industry experience. We bridge the gap between academic knowledge and practical skills, empowering learners to achieve their career goals with confidence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-dark-light">
              Visionaries leading the education revolution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card hover className="h-full">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover object-[center_22%] scale-80"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-2">{founder.name}</h3>
                    <p className="text-primary font-semibold mb-4">{founder.role}</p>
                    <p className="text-dark-light mb-6">{founder.bio}</p>
                    <div className="flex justify-center gap-4">
                      {founder.linkedin !== '#' && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-600 transition-colors"
                        >
                          <FaLinkedin size={24} />
                        </a>
                      )}
                      {founder.portfolio !== '#' && (
                        <a
                          href={founder.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-600 transition-colors"
                        >
                          <FaGlobe size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {team.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Team</h2>
              <p className="text-lg text-dark-light">
                Passionate professionals dedicated to your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover>
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary bg-gray-100">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-[center_22%] scale-71"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">{member.name}</h3>
                      <p className="text-dark-light mb-4">{member.role}</p>
                      {member.linkedin !== '#' && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-600 transition-colors"
                        >
                          <FaLinkedin className="mr-2" /> Connect
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      {partners.length > 0 && (
        <section className="section-padding bg-light">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Our Partnered Companies
              </h2>
              <p className="text-lg text-dark-light">
                Collaborating with industry leaders to provide the best opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover className="h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏢</div>
                      <h3 className="font-semibold text-dark">{partner.name}</h3>
                      <a
                        href={partner.link}
                        className="text-sm text-primary hover:text-primary-600 mt-2 inline-block"
                      >
                        Know More
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certificates */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              WE ARE LEGALLY CERTIFIED
            </h2>
            <p className="text-lg text-dark-light">
              Recognized and certified by government and international bodies
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="relative">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <FaCheckCircle className="text-6xl text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    {certificates[currentCertificate].title}
                  </h3>
                  {certificates[currentCertificate].company && (
                    <p className="text-dark-light mb-2">
                      {certificates[currentCertificate].company}
                    </p>
                  )}
                  {certificates[currentCertificate].number && (
                    <p className="text-dark-light mb-2">
                      Number: {certificates[currentCertificate].number}
                    </p>
                  )}
                  {certificates[currentCertificate].reference && (
                    <p className="text-dark-light mb-2">
                      Reference: {certificates[currentCertificate].reference}
                    </p>
                  )}
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedCertificate(certificates[currentCertificate])}
                >
                  Verify Certificate
                </Button>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevCertificate}
                  className="p-3 rounded-full bg-light hover:bg-primary hover:text-white transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <div className="flex gap-2">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCertificate(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentCertificate
                          ? 'bg-primary w-8'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextCertificate}
                  className="p-3 rounded-full bg-light hover:bg-primary hover:text-white transition-colors"
                >
                  <FaChevronRight />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Modal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        title={selectedCertificate?.title}
        size="lg"
      >
        {selectedCertificate && (
          <div className="text-center">
            <p className="text-dark-light mb-4">
              Certificate verification will open in a new window
            </p>
            <Button
              variant="primary"
              onClick={() => window.open(selectedCertificate.verifyLink, '_blank')}
            >
              Open Verification Link
            </Button>
          </div>
        )}
      </Modal>
    </div>
    </>
  );
};

export default About;
