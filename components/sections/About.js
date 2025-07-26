'use client';
import { useEffect } from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from 'react-icons/fa';

const fadeZoom = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const skills = [
  'IoT & Embedded Systems',
  'AI & Machine Learning',
  'Cybersecurity',
  'Wireless Sensor Networks',
  'Blockchain',
  'Edge & Cloud Computing',
  'Academic Research',
  'Technical Mentoring',
];

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: 'Ph.D. in Electronics and Communication Engineering',
    description: 'Awarded by Savitribai Phule Pune University.',
    base: 'bg-[#e0f7fa]',
    hover: 'hover:bg-[#b2ebf2]',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Assistant Professor at VIIT Pune',
    description: 'Guiding students and leading innovative research.',
    base: 'bg-[#fce4ec]',
    hover: 'hover:bg-[#f8bbd0]',
  },
  {
    icon: <FaLightbulb />,
    title: '80+ Publications & 20+ Years Experience',
    description: 'Specializing in WSN, IoT, AI, and advanced computing.',
    base: 'bg-[#f3e5f5]',
    hover: 'hover:bg-[#ce93d8]',
  },
];

const stats = [
  { label: 'Publications', count: 80, base: 'bg-[#e0f7fa]', hover: 'hover:bg-[#b2ebf2]' },
  { label: 'Years Experience', count: 18, base: 'bg-[#fff3e0]', hover: 'hover:bg-[#ffe0b2]' },
  { label: 'Students Mentored', count: 200, base: 'bg-[#f3e5f5]', hover: 'hover:bg-[#ce93d8]' },
  { label: 'Projects Guided', count: 50, base: 'bg-[#fce4ec]', hover: 'hover:bg-[#f8bbd0]' },
];

function StatCard({ count, label, base, hover }) {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { duration: 2 });
  const displayVal = useTransform(springVal, (val) => `${Math.floor(val)}+`);
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) motionVal.set(count);
    else motionVal.set(0);
  }, [inView, count]);

  return (
    <motion.div
      ref={ref}
      variants={fadeZoom}
      initial="hidden"
      animate="visible"
      className={`${base} ${hover} shadow-md p-6 rounded-xl border transition duration-300 hover:shadow-lg hover:scale-105`}
    >
      <motion.div className="text-3xl font-bold text-teal-700">{displayVal}</motion.div>
      <div className="text-sm text-gray-600 mt-2">{label}</div>
    </motion.div>
  );
}

export default function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#f0fdfa] py-20 px-6 md:px-12 border-t border-gray-200 shadow-inner overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeZoom}
          initial="hidden"
          animate={controls}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeZoom}
          initial="hidden"
          animate={controls}
          className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          I am an educator, researcher, and engineer dedicated to advancing the fields of
          Electronics, IoT, and Wireless Sensor Networks. With over two decades of experience,
          I’ve mentored hundreds of students, published impactful research, and contributed to
          several innovative academic and industry collaborations.
        </motion.p>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeZoom}
              initial="hidden"
              animate={controls}
              className="bg-[#e0f2f1] text-center py-3 px-4 rounded-xl text-gray-700 font-medium shadow hover:shadow-md hover:bg-[#b2dfdb] transition duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeZoom}
              initial="hidden"
              animate={controls}
              className={`${item.base} ${item.hover} rounded-xl shadow p-6 border transition duration-300 hover:shadow-lg hover:scale-105`}
            >
              <div className="text-teal-700 text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
          {stats.map((item, idx) => (
            <StatCard key={idx} {...item} />
          ))}
        </div>

        {/* Contact */}
        <motion.div
          variants={fadeZoom}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:anup.ingle@viit.ac.in"
            className="flex items-center gap-2 px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="tel:+919325383604"
            className="flex items-center gap-2 px-5 py-2 bg-white border text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            <FaPhoneAlt /> Call
          </a>
          <a
            href="https://www.linkedin.com/in/dr-anup-ingle-bb56a1148/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-[#eef6f5] border border-gray-200 text-gray-700 rounded-full hover:bg-[#d0ece9] transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
