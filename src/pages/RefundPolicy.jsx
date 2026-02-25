import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaCreditCard, FaFileInvoice, FaExclamationTriangle } from 'react-icons/fa';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - TechVid Innovations</title>
        <meta
          name="description"
          content="TechVid Innovations refund and cancellation policy. Learn about our payment terms, refund conditions, and fee structure."
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
                Refund & Payment Policy
              </h1>
              <p className="text-xl text-dark-light">
                Please read our refund and payment terms carefully before enrolling in any course.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding py-16">
          <div className="container-custom max-w-5xl">
            {/* Information Collection Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card mb-8 p-8"
            >
              <div className="flex items-start space-x-4">
                <FaFileInvoice className="text-primary text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-4">Information Collection</h2>
                  <p className="text-dark-light leading-relaxed">
                    TechVid may collect information in several ways. When you register for a course available with us, we may ask for contact information such as your name, address, telephone number, and e-mail address, along with billing information. We may also request you to complete certain forms or surveys that gather information about your academic background, business, profession, job, and opinions or comments. Correspondence sent to us by you or third parties about your activities, including letters or emails, may be collected into a file specific to you.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Refund & Cancellation Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card mb-8 p-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <FaMoneyBillWave className="text-accent text-3xl flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-dark">Refund & Cancellation Policy</h2>
              </div>

              <div className="space-y-6">
                {/* Pre-Registration Amount */}
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    Pre-Registration Amount Refund (Rs. 1000/-)
                  </h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium flex items-center">
                      <FaExclamationTriangle className="mr-2" />
                      No refund will be provided under any circumstances.
                    </p>
                  </div>
                </div>

                {/* Full Fees Refund */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    Refund Policy for Full Fees
                  </h3>
                  <ul className="space-y-2 text-dark-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Refund requests will be considered only before the commencement of the batch.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>The request must be submitted within 24 hours after pre-registration for the registered course.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Applications for refund must be submitted to the Program Director.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Payment Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card mb-8 p-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <FaCreditCard className="text-secondary text-3xl flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-dark">Payment Policy</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Accepted Payment Methods</h3>
                  <p className="text-dark-light">
                    All fees are accepted through Cheque, Demand Draft, ECS, Credit Card, Debit Card, UPI, Crypto, PayPal, Zest, Bajaj Finserv, and Gray Quest.
                  </p>
                  <p className="text-red-600 font-medium mt-2">
                    No cash transactions are accepted.
                  </p>
                </div>

                <div className="bg-light rounded-lg p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-dark mb-2">Important Terms</h3>
                  <ul className="space-y-2 text-dark-light">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>For confirmation of admission, the required fee amount must be paid.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Students can opt for either lump sum payment option or loan installment option through available payment partners.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span className="font-semibold text-dark">Fees once paid are non-refundable under any circumstances.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>TechVid provides options for students who wish to take a break due to unavoidable circumstances. For details, please contact your SSM.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-dark mb-2 flex items-center">
                    <FaExclamationTriangle className="text-yellow-600 mr-2" />
                    Late Payment & Default
                  </h3>
                  <ul className="space-y-2 text-dark-light">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Non-payment or delay beyond the due date will incur a late payment fee of Rs. 500/- per instance.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>In case of non-payment, delay beyond 15 days, or bounced cheque, the institute reserves the right to cancel the student's admission at its sole discretion without prior notice.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>All documents and KYC requirements must be submitted at the time of admission.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Price Changes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card mb-8 p-8"
            >
              <h2 className="text-2xl font-bold text-dark mb-4">Price Changes</h2>
              <p className="text-dark-light leading-relaxed">
                We reserve the right to modify, terminate, or amend the fees and features associated with your subscription. If we notify you at least fifteen (15) days in advance, your continued use of TechVid's online and/or blended learning courses after the changes have been made will constitute your acceptance of the changes.
              </p>
              <p className="text-dark-light leading-relaxed mt-4">
                If you do not wish to continue with the revised fees or features, you may terminate your subscription at any time. Upon acceptance of the new subscription terms, those terms and conditions will apply to all future months.
              </p>
            </motion.div>

            {/* Taxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-dark mb-4">Taxes</h2>
              <div className="space-y-4 text-dark-light leading-relaxed">
                <p>
                  When you purchase any online and/or blended learning course, service, or product from TechVid, you agree to pay the applicable fee along with all applicable sales, use, value-added, transaction taxes, or other government-required fees and charges that TechVid is required to collect (Taxes).
                </p>
                <p>
                  Estimated taxes will be calculated at checkout. Upon confirmation, you may be responsible for the final total amount based on billing details provided. All applicable taxes are calculated according to the billing information submitted at the time of purchase.
                </p>
                <p>
                  Where GST/VAT collection is required, GST/VAT will be calculated and added at checkout. You agree to indemnify and hold TechVid harmless against any claims by tax authorities regarding underpayment of Taxes, including GST/VAT, along with related penalties or interest.
                </p>
              </div>
            </motion.div>

            {/* Contact Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-dark-light text-lg">
                For any questions about our refund or payment policies, please{' '}
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

export default RefundPolicy;
