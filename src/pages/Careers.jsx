import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import { jobOpenings, benefits } from '../data/careers';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Application submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: '',
      });
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Careers & Job Openings - Join Our Team | TechVid Innovations</title>
        <meta name="description" content="Join TechVid Innovations team! Current openings: UI/UX Designer, Digital Marketing, Business Development, HR Manager. Apply now for exciting career opportunities in Hyderabad." />
        <meta name="keywords" content="TechVid careers, job openings Hyderabad, UI UX designer jobs, digital marketing jobs, business development jobs, HR manager jobs, education sector jobs" />
        <link rel="canonical" href="https://www.techvidin.com/careers" />
        <meta property="og:title" content="Careers at TechVid Innovations - Join Our Team" />
        <meta property="og:description" content="Exciting career opportunities in education technology. Join our mission to transform education." />
        <meta property="og:url" content="https://www.techvidin.com/careers" />
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
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
          >
            Build Your Career with TechVid Innovations and Make a Difference in Education
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-dark-light max-w-3xl mx-auto">
              Join a team that's passionate about transforming education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                    <p className="text-dark-light">{benefit.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-dark-light">
              Find your perfect role and start making an impact
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-dark mb-2">{job.title}</h3>
                      <p className="text-dark-light mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-dark-light">
                        <div className="flex items-center">
                          <FaBriefcase className="mr-2 text-primary" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-2 text-primary" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          setFormData(prev => ({ ...prev, position: job.title }));
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Apply for a Position
            </h2>
            <p className="text-lg text-dark-light">
              Fill out the form below and we'll get back to you soon
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
                <div className="mb-4">
                  <label htmlFor="position" className="block text-sm font-semibold text-dark mb-2">
                    Position Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="resume" className="block text-sm font-semibold text-dark mb-2">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
                <Textarea
                  label="Cover Letter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us why you're a great fit for this position..."
                />

                {submitMessage && (
                  <div className="mb-4 p-4 bg-success/10 border border-success text-success rounded-lg">
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loading size="sm" /> : 'Submit Application'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
