import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaDatabase, FaUserShield, FaLock, FaCookie, FaUserEdit, FaBell, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FaDatabase,
      title: 'Information We Collect',
      content: 'TechVid may collect information in several ways. When you register for a course available with us, we may ask for contact information such as your name, address, telephone number, and e-mail address, along with billing information. We may also request you to complete certain forms or surveys that gather information about your academic background, business, profession, job, and opinions or comments. Correspondence sent to us by you or third parties about your activities, including letters or emails, may be collected into a file specific to you.',
      color: 'primary',
    },
    {
      icon: FaUserShield,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our educational services, process your course registrations and payments, communicate with you about courses, updates, and promotional offers, personalize your learning experience, conduct research and analysis to improve our platform, and ensure the security and integrity of our services.',
      color: 'secondary',
    },
    {
      icon: FaLock,
      title: 'Information Sharing and Disclosure',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform, processing payments, or conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights, property, or safety of our users.',
      color: 'accent',
    },
    {
      icon: FaShieldAlt,
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
      color: 'primary',
    },
    {
      icon: FaCookie,
      title: 'Cookies and Tracking Technologies',
      content: 'Our platform uses cookies and similar tracking technologies to enhance your user experience, analyze platform usage, and personalize content. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of certain features on our platform.',
      color: 'secondary',
    },
    {
      icon: FaUserEdit,
      title: 'Your Rights and Choices',
      content: 'You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us. You may opt-out of receiving promotional communications by following the unsubscribe instructions in our emails. You can also request a copy of your personal data or request that we restrict processing of your information.',
      color: 'accent',
    },
    {
      icon: FaUserShield,
      title: 'Data Retention',
      content: 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we will securely delete or anonymize it.',
      color: 'primary',
    },
    {
      icon: FaShieldAlt,
      title: 'Third-Party Links',
      content: 'Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.',
      color: 'secondary',
    },
    {
      icon: FaUserShield,
      title: "Children's Privacy",
      content: 'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.',
      color: 'accent',
    },
    {
      icon: FaBell,
      title: 'Changes to Privacy Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website. Your continued use of our platform after such changes constitutes your acceptance of the updated privacy policy.',
      color: 'primary',
    },
    {
      icon: FaEnvelope,
      title: 'Contact Us',
      content: 'If you have any questions, concerns, or requests regarding this privacy policy or how we handle your personal information, please contact us at hr@techvidin.com or call us at +91 98495 40110. We are committed to addressing your privacy concerns promptly.',
      color: 'secondary',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - TechVid Innovations</title>
        <meta
          name="description"
          content="TechVid Innovations Privacy Policy. Learn how we collect, use, protect, and manage your personal information on our educational platform."
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
                Privacy Policy
              </h1>
              <p className="text-xl text-dark-light">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Last Updated Notice */}
        <section className="container-custom max-w-5xl mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"
          >
            <p className="text-blue-800">
              <strong>Last Updated:</strong> February 2026
            </p>
          </motion.div>
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
              className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold text-dark mb-4">
                Questions About Your Privacy?
              </h3>
              <p className="text-dark-light text-lg mb-6">
                We're here to help. Reach out to us if you have any concerns about how we handle your data.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
