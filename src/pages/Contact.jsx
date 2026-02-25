import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import Loading from '../components/common/Loading';
import { contactInfo } from '../data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: (
        <>
          {contactInfo.address.line1}<br />
          {contactInfo.address.line2}<br />
          {contactInfo.address.line3}
        </>
      ),
      color: 'text-primary',
    },
    {
      icon: FaPhone,
      title: 'Call Now',
      content: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
      color: 'text-secondary',
    },
    {
      icon: FaEnvelope,
      title: 'Email Now',
      content: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: 'text-accent',
    },
  ];

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const CardContent = (
                <Card hover>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-light mb-4 ${card.color}`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">{card.title}</h3>
                    <p className="text-dark-light">{card.content}</p>
                  </div>
                </Card>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {card.link ? (
                    <a href={card.link} className="block">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-dark-light mb-8">
                Fill out the form below and we'll respond as soon as possible
              </p>

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
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
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
                    {isSubmitting ? <Loading size="sm" /> : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">Connect With Us</h3>
                <p className="text-dark-light mb-6">
                  Reach out to us directly through WhatsApp or follow us on Instagram for updates and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="secondary" size="lg" className="bg-success hover:bg-success/90 w-full sm:w-auto">
                      <FaWhatsapp className="mr-2" size={24} />
                      WhatsApp
                    </Button>
                  </a>
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="secondary" size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full sm:w-auto">
                      <FaInstagram className="mr-2" size={24} />
                      Instagram
                    </Button>
                  </a>
                </div>
              </div>

              <Card>
                <h3 className="text-xl font-bold text-dark mb-4">Office Hours</h3>
                <div className="space-y-2 text-dark-light">
                  <p><strong>Tuesday - Sunday:</strong> 10:30 AM - 7:30 PM</p>
                  <p><strong>Monday:</strong> Closed</p>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-dark mb-4">Visit Us</h3>
                <div className="space-y-4">
                  <p className="text-dark-light">
                    {contactInfo.address.line1}<br />
                    {contactInfo.address.line2}<br />
                    {contactInfo.address.line3}
                  </p>
                  <a
                    href={contactInfo.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="md" className="w-full sm:w-auto">
                      <FaMapMarkerAlt className="mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-dark mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/about" className="block text-primary hover:text-primary-600 transition-colors">
                    About TechVid Innovations
                  </a>
                  <a href="/services" className="block text-primary hover:text-primary-600 transition-colors">
                    Our Programs
                  </a>
                  <a href="/careers" className="block text-primary hover:text-primary-600 transition-colors">
                    Career Opportunities
                  </a>
                  <a href="https://techvid-blogs.vercel.app/" target="_blank" rel="noopener noreferrer" className="block text-primary hover:text-primary-600 transition-colors">
                    Our Blog
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d${contactInfo.location.split('=')[1].split(',')[1]}!3d${contactInfo.location.split('=')[1].split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzEyLjEiTiA3OMKwMjMnMzguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TechVid Innovations Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
