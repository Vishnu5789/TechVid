import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { contactInfo } from '../../data/contact';
import { programCategories } from '../../data/programs';

const Footer = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blogs', path: 'https://techvid-blogs.vercel.app/', external: true },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Terms and Conditions', path: '/terms-conditions' },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/logo/logo.jpg" 
                alt="TechVid Innovations" 
                className="h-12 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Learn - Innovative - Lead. Follow what lights you up with fearless imagination, shaping your own path without worrying about tradition.
            </p>
          </div>

          {/* Categories */}
          <div>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center justify-between w-full md:pointer-events-none"
            >
              <h4 className="text-lg font-semibold mb-4">CATEGORIES</h4>
              <span className="md:hidden">
                {isCategoriesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <ul
              className={`space-y-2 ${
                isCategoriesOpen ? 'block' : 'hidden'
              } md:block`}
            >
              {programCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/services?program=${category.slug}`}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <button
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              className="flex items-center justify-between w-full md:pointer-events-none"
            >
              <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
              <span className="md:hidden">
                {isCompanyOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <ul
              className={`space-y-2 ${
                isCompanyOpen ? 'block' : 'hidden'
              } md:block`}
            >
              {companyLinks.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start space-x-2 text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  <FaPhone className="mt-1 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start space-x-2 text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  <FaEnvelope className="mt-1 flex-shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-gray-300 text-sm">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>
                    {contactInfo.address.line1}<br />
                    {contactInfo.address.line2}<br />
                    {contactInfo.address.line3}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright © 2024 TechVid. All rights reserved
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
