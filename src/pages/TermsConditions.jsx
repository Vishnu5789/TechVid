import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaFileContract, FaShieldAlt, FaUserLock, FaCreditCard, FaCopyright, FaExclamationCircle } from 'react-icons/fa';

const TermsConditions = () => {
  const sections = [
    {
      icon: FaFileContract,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our TechVid platform, you agree to be bound by these Terms and Conditions.',
      color: 'primary',
    },
    {
      icon: FaShieldAlt,
      title: 'Use of Platform',
      content: 'Our platform is intended for educational purposes only. You may use the platform to access educational content, participate in online classes and assessments, and communicate with other users. You agree to use the platform in a responsible manner and to comply with all applicable laws.',
      color: 'secondary',
    },
    {
      icon: FaUserLock,
      title: 'Account Registration',
      content: 'To access our platform, you must create an account. You agree to provide accurate and complete information during the registration process and to keep your account information up to date. You are solely responsible for maintaining the security of your account and password.',
      color: 'accent',
    },
    {
      icon: FaCreditCard,
      title: 'Payment',
      content: 'Our platform may offer paid services, such as access to premium content or courses. You agree to pay all fees associated with these services. All payments are final and non-refundable.',
      color: 'primary',
    },
    {
      icon: FaCopyright,
      title: 'Intellectual Property',
      content: 'Our platform and all its content, including text, graphics, logos, and images, are the property of our company or its licensors. You may not copy, distribute, or modify any part of our platform or its content without our prior written consent.',
      color: 'secondary',
    },
    {
      icon: FaFileContract,
      title: 'User Content',
      content: 'You may submit content, such as comments, questions, or feedback, through our platform. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, and distribute your content.',
      color: 'accent',
    },
    {
      icon: FaExclamationCircle,
      title: 'Prohibited Activities',
      content: 'You agree not to engage in any activity that may harm our platform or its users, such as hacking, spamming, or distributing malware. You also agree not to use our platform for any illegal or unauthorized purpose.',
      color: 'red-600',
    },
    {
      icon: FaShieldAlt,
      title: 'Termination',
      content: 'We may terminate your account or access to our platform at any time, with or without cause. You may also terminate your account at any time by contacting us.',
      color: 'primary',
    },
    {
      icon: FaExclamationCircle,
      title: 'Disclaimer of Warranties',
      content: 'Our platform is provided "as is" and without warranties of any kind, whether express or implied. We do not guarantee that our platform will be error-free, uninterrupted, or secure.',
      color: 'secondary',
    },
    {
      icon: FaShieldAlt,
      title: 'Limitation of Liability',
      content: 'Our company will not be liable for any damages, whether direct, indirect, incidental, or consequential, arising from your use of our platform.',
      color: 'accent',
    },
    {
      icon: FaFileContract,
      title: 'Governing Law',
      content: 'These Terms and Conditions will be governed by and construed in accordance with the laws of the jurisdiction where our company is located.',
      color: 'primary',
    },
    {
      icon: FaFileContract,
      title: 'Changes to Terms and Conditions',
      content: 'We may update these Terms and Conditions at any time, without prior notice. Your continued use of our platform after any changes will indicate your acceptance of the updated Terms and Conditions.',
      color: 'secondary',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms and Conditions - TechVid Innovations</title>
        <meta
          name="description"
          content="Read TechVid Innovations Terms and Conditions. Learn about platform usage, account registration, payments, intellectual property, and user responsibilities."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-light to-white">
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl text-dark-light">
                Please read these terms and conditions carefully before using our platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding py-16">
          <div className="container-custom max-w-5xl">
            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="card p-8"
                  >
                    <div className="flex items-start space-x-4">
                      <Icon className={`text-${section.color} text-3xl flex-shrink-0 mt-1`} />
                      <div>
                        <h2 className="text-2xl font-bold text-dark mb-4">
                          {section.title}
                        </h2>
                        <p className="text-dark-light leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-dark-light text-lg">
                For any questions about our terms and conditions, please{' '}
                <a href="/contact" className="text-primary hover:text-secondary transition-colors font-semibold">
                  contact us
                </a>
                .
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
