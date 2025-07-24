'use client';
import { useEffect } from 'react';
import { FiPhone, FiMapPin, FiMail, FiGlobe, FiClock, FiUser } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-16 bg-[#f0fdfa] overflow-x-hidden" id="contact">
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-6 shadow-2xl rounded-2xl bg-white"
      >
        {/* Heading */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
          className="text-center pt-10 mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Academic Inquiries & Collaboration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out for research collaborations, student guidance, or academic discussions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 p-8">
          {/* Left Contact Info Card */}
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            className="bg-[#f0fbfc] text-gray-900 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Contact Information
            </h3>

            <div className="space-y-6">
              <ContactDetail
                icon={<FiUser size={18} className="text-cyan-600" />}
                label="Name"
                value="Dr. Anup Ingle"
              />
              <ContactDetail
                icon={<FiPhone size={18} className="text-cyan-600" />}
                label="Phone"
                value="+91-9999999999 (Primary)"
                secondValue="+91-9888888888 (Secondary)"
              />
              <ContactDetail
                icon={<FiMail size={18} className="text-cyan-600" />}
                label="Email"
                value="xyz@viit.ac.in(Official)"
                secondValue="xyz.yyy@gmail.com (Personal)"
              />
              <ContactDetail
                icon={<FiMapPin size={18} className="text-cyan-600" />}
                label="Office"
                value="Department of Electronics & Telecommunication"
                secondValue="VIIT, Pune, Maharashtra"
              />
              <ContactDetail
                icon={<FiClock size={18} className="text-cyan-600" />}
                label="Availability"
                value="Mon-Fri: 10:00 AM - 5:00 PM"
                secondValue="By appointment only"
              />
             
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <select
                id="subject"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-200 bg-white"
              >
                <option value="">Select inquiry type</option>
                <option value="research">Research Collaboration</option>
                <option value="guidance">Student Guidance</option>
                <option value="lecture">Invited Lecture Request</option>
                <option value="other">Other Academic Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-200"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="consent"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-200"
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                I consent to the processing of my personal data for academic communication purposes
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium py-3 rounded-md hover:opacity-90 transition shadow-md hover:shadow-lg"
            >
              Send Academic Inquiry
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

function ContactDetail({ icon, label, value, secondValue, isLink = false }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-700">{label}</p>
        {isLink ? (
          <a 
            href={`https://${value}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-cyan-600 hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-gray-600">{value}</p>
        )}
        {secondValue && (
          <p className="text-sm text-gray-600 mt-1">{secondValue}</p>
        )}
      </div>
    </div>
  );
}