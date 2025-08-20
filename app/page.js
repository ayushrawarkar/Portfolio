'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence
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
import {
  FiAward,
  FiBook,
  FiPenTool,
  FiZap,
  FiMapPin,
  FiCopy,
  FiList,
  FiActivity,
  FiDatabase,
  FiLayers,
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiWifi,
  FiTool,
  FiUsers,
  FiGlobe,
  FiClock,
  FiMic,
  FiExternalLink,
  FiTarget,
  FiUser,
  FiPhone,
  FiMail,
} from 'react-icons/fi';

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

export default function Home() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsAbout = useAnimation();

  const [refHero, inViewHero] = useInView({ threshold: 0.2 });
  const [refAbout, inViewAbout] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inViewHero) {
      controlsLeft.start('visible');
      controlsRight.start('visible');
    } else {
      controlsLeft.start('hidden');
      controlsRight.start('hidden');
    }
  }, [inViewHero]);

  useEffect(() => {
    if (inViewAbout) {
      controlsAbout.start('visible');
    } else {
      controlsAbout.start('hidden');
    }
  }, [inViewAbout]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        ref={refHero}
        id="home"
        className="bg-[#ddece7] pt-28 pb-20 px-6 md:px-12 shadow-inner overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={controlsLeft}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-teal-800">
                <Typewriter
                  words={['Dr. Anup Ingle']}
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={0}
                  delaySpeed={1000}
                  loop={1}
                />
              </span><br />
              Assistant Professor, E&TC.
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Expert in Electronics and Communication Engineering with a PhD and over 18 years of teaching experience. Dedicated to academic excellence and professional growth.
            </p>
            <Link
              href="/media"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-xl shadow hover:bg-teal-700 transition"
            >
              Media Showcase
            </Link>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={controlsRight}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative group rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
              <Image
                src="/profile11.png"
                alt="Dr. Anup Ingle"
                width={300}
                height={300}
                className="rounded-xl transform group-hover:scale-105 transition duration-300 object-cover"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Dr. Anup Ingle</h3>
              <p className="text-sm text-gray-500">Assistant Professor, Department of E&TC</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={refAbout}
        className="bg-[#f0fdfa] py-20 px-6 md:px-12 border-t border-gray-200 shadow-inner overflow-x-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeZoom}
            initial="hidden"
            animate={controlsAbout}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeZoom}
            initial="hidden"
            animate={controlsAbout}
            className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          >
            I am an educator, researcher, and engineer dedicated to advancing the fields of
            Electronics, IoT, and Wireless Sensor Networks. With over two decades of experience,
            I've mentored hundreds of students, published impactful research, and contributed to
            several innovative academic and industry collaborations.
          </motion.p>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeZoom}
                initial="hidden"
                animate={controlsAbout}
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
                animate={controlsAbout}
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
            animate={controlsAbout}
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

      {/* Academic Portfolio Section */}
      <AcademicPortfolio />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

// Academic Portfolio Component
const tabs = [
  { name: 'Overview', icon: <FiList /> },
  { name: 'Interests', icon: <FiLayers /> },
  { name: 'Technical Skills', icon: <FiCopy /> },
  { name: 'Teaching', icon: <FiBookOpen /> },
  { name: 'Certifications', icon: <FiAward /> },
  { name: 'Invited Talks', icon: <FiUsers /> },
  { name: 'Research', icon: <FiCpu /> },
  { name: 'Journals', icon: <FiPenTool /> },
  { name: 'Conferences', icon: <FiZap /> },
  { name: 'Books', icon: <FiBook /> },
  { name: 'Patents', icon: <FiBriefcase /> },
  { name: 'Industry Interaction', icon: <FiGlobe /> },
];

function AcademicPortfolio() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <section id='projects' className="bg-gray-50 p-6 md:p-12 min-h-screen font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Dr. Anup Ingle – Academic Portfolio
        </motion.h1>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <motion.button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition relative overflow-hidden border
                  ${isActive
                    ? 'bg-white text-gray-900 border-teal-400 shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow'}
                `}
              >
                {tab.icon}
                <span className="hidden md:inline">{tab.name}</span>

                {/* Active Highlight Effect */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 border-2 border-teal-400 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-2xl rounded-2xl p-6 md:p-10"
          >
            {activeTab === 'Overview' && <Overview />}
            {activeTab === 'Interests' && <Interests />}
            {activeTab === 'Technical Skills' && <TechSkills />}
            {activeTab === 'Teaching' && <Teaching />}
            {activeTab === 'Certifications' && <Certifications />}
            {activeTab === 'Invited Talks' && <InvitedTalks />}
            {activeTab === 'Research' && <Research />}
            {activeTab === 'Journals' && <JournalPubs />}
            {activeTab === 'Conferences' && <Conferences />}
            {activeTab === 'Books' && <Books />}
            {activeTab === 'Patents' && <Patents />}
            {activeTab === 'Industry Interaction' && <IndustryInteraction />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* Section Wrapper */
const SectionWrapper = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold border-l-4 pl-3 border-teal-400">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

/* InfoBlock */
const InfoBlock = ({ color = 'teal', children }) => {
  const colorClasses = {
    teal: 'bg-teal-50 border-teal-200',
    blue: 'bg-blue-50 border-blue-200',
    amber: 'bg-amber-50 border-amber-200',
    purple: 'bg-purple-50 border-purple-200',
    green: 'bg-green-50 border-green-200',
  };

  return (
    <div className={`rounded-lg border p-4 mb-4 ${colorClasses[color] || colorClasses.teal}`}>
      {children}
    </div>
  );
};

// Overview
function Overview() {
  const info = [
    {
      icon: <FiBriefcase className="text-blue-600" size={22} />,
      title: "Current Position",
      text: "Assistant Professor, Department of Electronics & Telecommunication Engineering"
    },
    {
      icon: <FiBookOpen className="text-blue-600" size={22} />,
      title: "Education",
      text: "Ph.D. in Electronics & Communication Engineering"
    },
    {
      icon: <FiClock className="text-blue-600" size={22} />,
      title: "Experience",
      text: "17+ years teaching experience\n1+ year industry experience"
    },
    {
      icon: <FiTarget className="text-blue-600" size={22} />,
      title: "Research Focus",
      text: "Flow-based pattern matching to mitigate denial-of-service attacks on communication networks"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Professional Profile */}
      <SectionWrapper title="Professional Profile">
        <div className="grid md:grid-cols-2 gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-lg p-5 shadow-sm hover:shadow-md transition flex items-start space-x-3"
            >
              <div className="p-2 bg-white rounded-full shadow-sm">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-700 whitespace-pre-line mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Professional Summary */}
      <SectionWrapper title="Professional Summary">
        <div className="bg-teal-50 border border-teal-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <p className="text-gray-700 leading-relaxed">
            Dr. Anup Ingle is an accomplished academic and researcher with expertise in computer networks,
            security, and IoT. His research focuses on intrusion detection systems, DDoS attack mitigation,
            and network anomaly detection. With extensive experience in both academia and industry, he has
            published numerous papers in reputed journals and conferences, authored several textbooks, and
            actively contributes to student development through industry collaborations and internships.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}

// Interests
function Interests() {
  const researchInterests = [
    'Denial of Services Attacks (ICMP, UDP, TCP SYN and IP Spoofing, ARP Poisoning)',
    'Offline and Online Solution for Network Prevention',
    'Data Mining (Weka) and Cloud Computing',
    'Routing and Router Configuration',
    'Internet of Things (IoT): Smart City, Cloud Computing',
    'AI/ML/DL using Python Programming'
  ];

  const teachingInterests = [
    'Computer Networks and Security',
    'Telecommunication Switching and Systems',
    'Management Information System',
    'Mobile Communication',
    'Computer Fundamentals/Programming (C, C++, Embedded C)',
    'Data Structure and Algorithm'
  ];

  return (
    <div className="space-y-8">
      {/* Research Interests */}
      <div>
        <InfoBlock color="purple">
          <SectionWrapper title="Research Interests">
            <div className="flex items-center gap-2 mb-3 text-purple-700">
              <FiCpu size={22} />
              <span className="font-semibold">Core Research Domains</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {researchInterests.map((interest, index) => (
                <li key={index} className="leading-relaxed">
                  {interest}
                </li>
              ))}
            </ul>
          </SectionWrapper>
        </InfoBlock>
      </div>

      {/* Teaching Interests */}
      <div>
        <InfoBlock color="green">
          <SectionWrapper title="Teaching Interests">
            <div className="flex items-center gap-2 mb-3 text-green-700">
              <FiBookOpen size={22} />
              <span className="font-semibold">Subjects & Areas</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {teachingInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </SectionWrapper>
        </InfoBlock>
      </div>

      {/* Ultimate Research Goal */}
      <div>
        <InfoBlock color="amber">
          <SectionWrapper title="Ultimate Research Goal">
            <div className="flex items-center gap-2 mb-2 text-amber-700">
              <FiTarget size={22} />
              <span className="font-semibold">Long-Term Vision</span>
            </div>
            <p className="font-medium text-gray-800 bg-amber-100 border border-amber-200 rounded-lg p-3">
              To <span className="text-amber-700 font-semibold">Design Hardware Firewall </span>
              to prevent Networks from various attacks.
            </p>
          </SectionWrapper>
        </InfoBlock>
      </div>
    </div>
  );
}

// Technical Skills
function TechSkills() {
  const networkSkills = [
    'LAN Configuration',
    'Switch and Router Configuration',
    'Network Programming',
    'Internet Traffic Monitoring through Packet analyzer tools (Tcpdump, Wireshark)'
  ];

  const tools = [
    'Snort (Intrusion Detection System)',
    'Weka (Data Mining)',
    'hping3 (Network Testing)',
    'Network Monitoring tools'
  ];

  const programming = [
    'C, C++',
    'Java',
    'Python',
    'Embedded C'
  ];

  const otherSkills = [
    'Website Development',
    'IoT System Design',
    'Machine Learning Implementation'
  ];

  const SkillList = ({ items }) => (
    <ul className="space-y-2 mt-2">
      {items.map((skill, index) => (
        <li
          key={index}
          className="flex items-center gap-2 bg-white/40 rounded-md px-3 py-1 border border-gray-200 hover:bg-white transition"
        >
          <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
          {skill}
        </li>
      ))}
    </ul>
  );

  const SectionHeader = ({ icon: Icon, title, color }) => (
    <div className="flex items-center gap-2 mb-3">
      <Icon className={`text-${color}-700`} size={22} />
      <span className="font-semibold text-gray-800">{title}</span>
    </div>
  );

  return (
    <div className="space-y-8">
      <InfoBlock color="blue">
        <SectionWrapper title="">
          <SectionHeader icon={FiWifi} title="Network Skills" color="blue" />
          <SkillList items={networkSkills} />
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="purple">
        <SectionWrapper title="">
          <SectionHeader icon={FiTool} title="Tools & Technologies" color="purple" />
          <SkillList items={tools} />
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="teal">
        <SectionWrapper title="">
          <SectionHeader icon={FiCode} title="Programming Languages" color="teal" />
          <SkillList items={programming} />
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="green">
        <SectionWrapper title="">
          <SectionHeader icon={FiCpu} title="Other Technical Skills" color="green" />
          <SkillList items={otherSkills} />
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Teaching
function Teaching() {
  const coursesTaught = [
    'Computer Networks',
    'Telecommunication Switching and Systems',
    'Management Information System',
    'Computer Networks and Security',
    'Mobile Communication',
    'Computer Fundamentals/Programming (C, C++, Embedded C)',
    'Data Structure and Algorithm'
  ];

  const projectGuidance = [
    'BE/BTech Final Year Projects: 30+',
    'BE/BTech Third Year Projects: 20+',
    'BE/BTech Second Year Projects: 20+',
    'FY BTech Project-Based Learning: 700+'
  ];

  return (
    <div className="space-y-10">
      {/* Courses Taught Section */}
      <InfoBlock color="blue">
        <SectionWrapper title="Courses Taught">
          <div className="flex items-center gap-2 mb-4 text-blue-700">
            <FiBookOpen size={22} />
            <span className="font-semibold">Subjects & Topics</span>
          </div>
          <ul className="space-y-2">
            {coursesTaught.map((course, index) => (
              <li
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 transition"
              >
                {course}
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      {/* Project Guidance Section */}
      <InfoBlock color="purple">
        <SectionWrapper title="Project Guidance">
          <div className="flex items-center gap-2 mb-4 text-purple-700">
            <FiUsers size={22} />
            <span className="font-semibold">Mentorship & Supervision</span>
          </div>
          <ul className="space-y-2">
            {projectGuidance.map((project, index) => (
              <li
                key={index}
                className="bg-purple-50 border border-purple-100 rounded-md px-3 py-2 text-gray-800 hover:bg-purple-100 transition"
              >
                {project}
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Certifications
function Certifications() {
  const certs = [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      details: "Score: 100%",
      link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
      linkText: "About CCNA",
      provider: "Cisco",
      year: "2022"
    },
    {
      name: "Advanced Diploma in Computer Hardware and Networking (ADCHN)",
      details: "Jetking, Noida | First Class (66.00%)",
      link: "https://www.jetking.com/",
      linkText: "Jetking Website",
      provider: "Jetking",
      year: "2021"
    }
  ];

  return (
    <SectionWrapper title="Professional Certifications">
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-green-50 border border-green-100 rounded-lg p-6 shadow-sm hover:shadow-md transition group min-h-[200px] flex flex-col justify-between"
          >
            {/* Year Badge */}
            <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-3 py-0.5 rounded-full shadow-sm">
              {cert.year}
            </span>

            <div>
              {/* Icon + Title */}
              <div className="flex items-center mb-3">
                <FiAward className="text-green-600 mr-2 flex-shrink-0" size={24} />
                <h3 className="font-semibold text-gray-800 text-lg">{cert.name}</h3>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-700 mb-1">{cert.details}</p>
              <p className="text-xs text-gray-500 mb-2">Provider: {cert.provider}</p>
            </div>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-700 hover:underline text-sm mt-3"
            >
              {cert.linkText} <FiExternalLink className="ml-1" size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Invited Talks
function InvitedTalks() {
  const talks = [
    {
      college: "Bharti Vidyapeeth Women's College of Engineering, Pune",
      topic: "Computer Network",
      link: "https://www.bvwomenscollege.edu.in/"
    },
    {
      college: "Trinity College of Engineering and Research, Pune",
      topic: "Computer Network and Architecture",
      link: "https://www.trinityengg.edu.in/"
    }
  ];

  return (
    <div className="space-y-8">
      <InfoBlock color="purple">
        <SectionWrapper title="Guest Lectures">
          <div className="flex items-center gap-2 mb-4 text-purple-700">
            <FiMic size={22} />
            <span className="font-semibold">Invited Talks & Sessions</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {talks.map((talk, index) => (
              <div
                key={index}
                className="bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800">{talk.college}</h3>
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-medium text-purple-700">Topic:</span> {talk.topic}
                </p>
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center mt-2 text-sm"
                >
                  College Website <FiExternalLink className="ml-1" size={14} />
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Research
function Research() {
  const researchFocus = [
    'Flow-based pattern matching for DoS attack mitigation',
    'Statistical approaches for network anomaly detection',
    'Machine learning algorithms for DDoS attack detection',
    'Hardware-based solutions for network security'
  ];

  const currentProjects = [
    'Designing hardware firewall for network attack prevention',
    'IoT-based smart city solutions',
    'Federated learning for network security',
    'AI-based traffic management systems'
  ];

  const researchLinks = [
    {
      title: "Snort IDS",
      url: "https://www.snort.org/",
      description: "Open-source network intrusion detection system"
    },
    {
      title: "Weka Data Mining",
      url: "https://www.cs.waikato.ac.nz/ml/weka/",
      description: "Collection of machine learning algorithms"
    },
    {
      title: "hping3",
      url: "http://www.hping.org/",
      description: "Network testing tool"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Research Focus Areas */}
      <InfoBlock color="blue">
        <SectionWrapper title="Research Focus Areas">
          <div className="flex items-center gap-2 mb-3 text-blue-700">
            <FiCpu size={22} />
            <span className="font-semibold">Core Domains</span>
          </div>
          <ul className="space-y-2">
            {researchFocus.map((area, index) => (
              <li
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-md px-3 py-2 text-gray-800 hover:bg-blue-100 transition"
              >
                {area}
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      {/* Current Research Projects */}
      <InfoBlock color="teal">
        <SectionWrapper title="Current Research Projects">
          <div className="flex items-center gap-2 mb-3 text-teal-700">
            <FiActivity size={22} />
            <span className="font-semibold">Ongoing Work</span>
          </div>
          <ul className="space-y-2">
            {currentProjects.map((project, index) => (
              <li
                key={index}
                className="bg-teal-50 border border-teal-100 rounded-md px-3 py-2 text-gray-800 hover:bg-teal-100 transition"
              >
                {project}
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      {/* PhD Research */}
      <InfoBlock color="purple">
        <SectionWrapper title="PhD Research">
          <p className="bg-purple-50 border border-purple-100 rounded-md p-4 text-gray-800 leading-relaxed">
            <strong className="text-purple-700">Title:</strong> <br />
            "FLOW-BASED PATTERN MATCHING APPROACH TO MITIGATE THE DENIAL OF SERVICE ATTACK ON COMMUNICATION NETWORK"
            <br /><br />
            Successfully completed PhD focusing on developing innovative approaches to detect and mitigate
            various forms of Denial of Service attacks through pattern matching and machine learning techniques.
          </p>
        </SectionWrapper>
      </InfoBlock>

      {/* Research Tools & Resources */}
      <InfoBlock color="green">
        <SectionWrapper title="Research Tools & Resources">
          <div className="flex items-center gap-2 mb-3 text-green-700">
            <FiDatabase size={22} />
            <span className="font-semibold">Tools & References</span>
          </div>
          <div className="space-y-3">
            {researchLinks.map((link, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-100 rounded-md p-3 hover:bg-green-100 transition"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center font-medium"
                >
                  {link.title} <FiExternalLink className="ml-1" size={14} />
                </a>
                <p className="text-sm text-gray-700 mt-1">{link.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Journals
function JournalPubs() {
  const publications = [
    {
      title: "Intrusion Detection for ICMP-Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      journal: "International Journal of Research in Computer Science and Information Technology (IJRCSIT)",
      details: "ISSN: 2319-5010, Volume 1, Issue 1 (A), Feb 2013",
      link: "https://www.ijrcsit.org/"
    },
    {
      title: "Intrusion Detection for TCP-SYNC Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      journal: "International Journal of Advanced Research in Computer Science(IJARCS)",
      details: "Vol 4, No 5, May 2013",
      link: "http://ijarcs.info/"
    },
    {
      title: "Update on Next Generation Network Attacks A Review Paper on Network Attacks Classified into Mobile & Computer Based",
      authors: "Ansari Mohsin Jaweed Ahmed, Shaikh Mohd Rehan, Anup Ingle, Sanket Lokhande, Rohan Saswadkar",
      journal: "International Journal of Electrical, Electronics and Computer Systems (IJEECS)",
      details: "ISSN (Online): 2347-2820, Volume -3, Issue-4 2015",
      link: "https://www.ijeecs.org/"
    },
    {
      title: "Statistical Approaches For Network Anomaly Detection For UDP Spoofing",
      authors: "Anup Ingle, Aditya Wagh, Rajneesh Sharma, Akshay Shikre",
      journal: "International Journal of Advanced Computational Engineering and Networking",
      details: "ISSN: 2320-2106, Volume-4, Issue-7, July 2016",
      link: "http://www.ijacen.com/"
    },
    {
      title: "DDoS Attack Detection Algorithms Based on Pattern Classification and Machine Learning",
      authors: "Anup Ingle",
      journal: "Journal of University of Shanghai for Science and Technology",
      details: "ISSN: 1007-6735, Volume 23, Issue 2, February 2021",
      link: "http://www.jusst.org/"
    },
    {
      title: "A review on Ad-Hoc Network In Pervasive Environment",
      authors: "Pravin G Gawande, Rajendra S Talware, Shailesh V Kulkarni, Anup W Ingle, Milind S Patil, Gajanan H Chavhan",
      journal: "Journal of Eur. Chem. Bull.",
      details: "2023, 12(S3), 2934–2941",
      link: "https://www.eurchembull.com/"
    },
    {
      title: "Car Identification For Brake Light Detection Using Haar Cascade Approach",
      authors: "Shailesh V Kulkarni, Pravin G Gawande, Rajendra S Talware, KJ Raut, Anup W Ingle, Vishal B Ambhore",
      journal: "Journal of Eur. Chem. Bull.",
      details: "2023, 12(S3), 20–30",
      link: "https://www.eurchembull.com/"
    },
    {
      title: "Intelligent Conversational Agents Based Custom Question Answering System",
      authors: "Nitin Sakhare, Jyoti Bangare, Dr. Deepika Ajalkar, Dr. Gajanan Walunjkar, Dr. Madhuri Borawake, Dr. Anup Ingle",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      details: "IJISAE, 2023, 11(6s), 337–344",
      link: "https://ijisae.org/index.php/IJISAE/article/view/2860"
    },
    {
      title: "Artificial intelligence-based classification performance evaluation in monophonic and polyphonic indian classical instruments recognition with hybrid domain features amalgamation",
      authors: "Chitre, Abhijit V., Wanjale, Kirti, Deshmukh, Aradhanaa, Kosbatwar, Shyamsunder P., Ingle, Anup & Hundekari, Sheela",
      journal: "Journal of Information and Optimization Sciences",
      details: "2023, 44:3, 341–353, DOI: 10.47974/JIOS-1345",
      link: "https://www.tarupublications.com/doi/10.47974/JIOS-1345"
    },
    {
      title: "Investigating environmental sustainability applications using advanced monitoring systems",
      authors: "Sreenivasulu, K., Yadav, S., Pushpalatha, G., Sethumadhavan, R., Ingle, A., & Vijaya, R.",
      journal: "The Scientific Temper",
      details: "2023, 14(04), 1079–1084",
      link: "https://scientifictemper.com/index.php/tst/article/view/939"
    },
    {
      title: "Researching brain-computer interfaces for enhancing communication and control in neurological disorders",
      authors: "Rathore, N., Acharjee2, P. B., Thivyabrabha, K., P, U., Ingle, A., & Davinder kumar",
      journal: "The Scientific Temper",
      details: "2023, 14(04), 1098–1105",
      link: "https://scientifictemper.com/index.php/tst/article/view/871"
    },
    {
      title: "Smart Traffic: Integrating Machine Learning, and YOLO for Adaptive Traffic Management System",
      authors: "Sakhare, N., Hedau, M., B., G., Malpure, O., Shah, T., & Ingle, A.",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      details: "2024, 12(12s), 347–355",
      link: "https://ijisae.org/index.php/IJISAE/article/view/4520"
    }
  ];

  const extractYear = (details) => {
    const match = details.match(/(20\d{2}|19\d{2})/);
    return match ? match[0] : null;
  };

  const highlightDetails = (text) => {
    return text.replace(/(Volume|Vol|Issue|ISSN|DOI)/gi, "🔹$1");
  };

  return (
    <SectionWrapper title="Journal Publications">
      <div className="relative border-l-2 border-green-400 ml-4">
        {publications.map((pub, index) => {
          const year = extractYear(pub.details);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="ml-6 relative mb-12"
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-4 top-6 w-3 h-3 rounded-full ${index % 2 === 0 ? "bg-green-500" : "bg-green-400"
                  }`}
              />

              <div className="relative bg-green-50 border border-green-100 rounded-lg p-5 shadow-sm hover:shadow-md transition min-h-[150px]">

                {/* Year badge */}
                {year && (
                  <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-3 py-0.5 rounded-full shadow-sm">
                    {year}
                  </span>
                )}

                {/* Title */}
                <h3 className="font-semibold text-gray-800 text-base mb-1 pr-16">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-sm text-gray-700 mb-1">{pub.authors}</p>

                {/* Journal */}
                <p className="text-sm italic text-gray-600">{pub.journal}</p>

                {/* Details */}
                <p className="text-xs text-gray-600 mt-1">
                  {highlightDetails(pub.details)}
                </p>

                {/* Link */}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-green-700 hover:underline text-sm"
                  >
                    Journal Website <FiExternalLink className="ml-1" size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

// Conferences
function Conferences() {
  const conferences = [
    {
      title: "Intrusion Detection for ICMP-Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      event: "2nd National Conference on Computer Communication and Information Technology-2013(NC3IT-2013)",
      details: "Sinhgad Institute of Computer Science, Pandharpur, Feb 15-16, 2013",
      link: "https://www.sinhgad.edu/"
    },
    {
      title: "Intrusion Detection for TCP-SYNC Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      event: "National Conference on Networks & Soft Computing (NCNSC-13)",
      details: "Sponsored by DST, Govt. of India, Vignan University, Guntur, Mar 25-26, 2013",
      link: "https://vignan.ac.in/"
    },
    {
      title: "Computational intelligence based intrusion detection systems for wireless communication and pervasive computing networks",
      authors: "A. Gupta, O. J. Pandey, M. Shukla, A. Dadhich, S. Mathur and A. Ingle",
      event: "2013 IEEE International Conference on Computational Intelligence and Computing Research",
      details: "Enathi, India, 2013, pp. 1-7, doi: 10.1109/ICCIC.2013.6724156",
      link: "https://ieeexplore.ieee.org/document/6724156"
    },
    {
      title: "Intelligent Perpetual Echo Attack Detection on User Datagram Protocol Port 7 Using Ant Colony Optimization",
      authors: "A. Gupta, O. J. Pandey, M. Shukla, A. Dadhich, A. Ingle and V. Ambhore",
      event: "2014 International Conference on Electronic Systems, Signal Processing and Computing Technologies",
      details: "Nagpur, India, 2014, pp. 419-424, doi: 10.1109/ICESC.2014.82",
      link: "https://ieeexplore.ieee.org/document/6808050"
    },
    {
      title: "Towards context-aware smart mechatronics networks: Integrating Swarm Intelligence and Ambient Intelligence",
      authors: "A. Gupta, O. J. Pandey, M. Shukla, A. Dadhich, A. Ingle and P. Gawande",
      event: "2014 International Conference on Issues and Challenges in Intelligent Computing Techniques (ICICT)",
      details: "Ghaziabad, India, 2014, pp. 64-69, doi: 10.1109/ICICICT.2014.6781254",
      link: "https://ieeexplore.ieee.org/document/6781254"
    },
    {
      title: "ICMP Denial of Service (DoS) Attack Detection System",
      authors: "Sanket Lokhande, Anup Ingle, Nilshree Damani, Aditi Mallavarapu, Mohnish Awade, Piyush Mathurkar",
      event: "International Conference on Science and Technology (ICST-2K14)",
      details: "S B PATIL College of Engineering, Indapur, Pune, 21-22 Feb 2014",
      link: "https://sbcoer.ac.in/"
    },
    {
      title: "Update on Next Generation Network Attack A Review Paper on Network Attacks Classified into Mobile & Computer Base",
      authors: "Ansari Mohsin Jaweed Ahmed, Shaikh Mohd Rehan, Anup Ingle, Sanket Lokhande, Rohan Saswadkar",
      event: "International Conference on Electrical. Electronics and Computer Science Engineering (ICEESCE-2015)",
      details: "ISBN:978-2-642-24819-2, Pune, 25th Jan 2015",
      link: "#"
    },
    {
      title: "Statistical Approaches For Network Anomaly Detection For UDP Spoofing",
      authors: "Anup Ingle, Aditya Wagh, Rajneesh Sharma, Akshay Shikre",
      event: "54th IRF INTERNATIONAL CONFERENCE",
      details: "08-05-2016, Pune, India",
      link: "https://www.irfconference.org/"
    },
    {
      title: "Emergency Ambulance Route Clearing System",
      authors: "Anup Ingle, Ashwini Kumbhalkar, Amruta Manukar, Asmita Jadhav",
      event: "Proceeding of 56th IRF International Conference",
      details: "29th May, 2016, Pune. ISBN:978-93-86083-26-5",
      link: "https://www.irfconference.org/"
    },
    {
      title: "Smart Parking System",
      authors: "Anup Ingle, Ashutosh Pathrabe, Tukaram Panchal, Rajat Pandharpurkar",
      event: "International Conference on Recent Trends in Engineering and Technology, VISHWACON-2016-17",
      details: "VIIT Pune, 17-18 Feb 2017. ISBN: 978-93-85665-68-4",
      link: "https://www.viit.ac.in/"
    },
    {
      title: "Hardware entity for Anomaly Detection of Network Traffic",
      authors: "Anup Ingle, Rishabh Rodkar, Makarand Potdar, Akshay K. Kalbhor",
      event: "International Conference on Recent Trends in Engineering and Technology, VISHWACON-2016-17",
      details: "VIIT Pune, 17-18 Feb 2017. ISBN: 978-93-85665-68-4",
      link: "https://www.viit.ac.in/"
    },
    {
      title: "Traffic Flow Optimization Using CNN and GCN for Adaptive Signal Control",
      authors: "S. Kolte, A. Ingle, K. Kshirsagar, P. G. Gawande, K. A. Kumbhar and R. S. Kawchale",
      event: "2023 3rd Asian Conference on Innovation in Technology (ASIANCON)",
      details: "Ravet IN, India, 2023, pp. 1-4, doi: 10.1109/ASIANCON58793.2023.10269944",
      link: "https://ieeexplore.ieee.org/document/10269944"
    },
    {
      title: "Enhanced Honey Badger Algorithm for Resource Allocation and Task Scheduling in Cloud Environment",
      authors: "R. Rajagopal, A. Arunarani, A. Arivarasi, A. Ingle, R. T and R. V. Prakash",
      event: "2023 4th International Conference on Smart Electronics and Communication (ICOSEC)",
      details: "Trichy, India, 2023, pp. 1375-1380, doi: 10.1109/ICOSEC58147.2023.10275908",
      link: "https://ieeexplore.ieee.org/document/10275908"
    },
    {
      title: "Federated Machine Learning for Cardiac Disease Detection Using Internet of Medical Things",
      authors: "K. Aggarwal, V. R. Vimal, U. Patil, S. C, A. Ingle and T. S. Kumar",
      event: "2023 International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS)",
      details: "Erode, India, 2023, pp. 1326-1331, doi: 10.1109/ICSSAS57918.2023.10331771",
      link: "https://ieeexplore.ieee.org/document/10331771"
    },
    {
      title: "Analyzing Convolutional Neural Networks as feature extractors for Video Regression",
      authors: "S. Jain, R. Ghotekar, A. Dawande, A. Pawar, A. W. Ingle and V. M. Marathe",
      event: "2023 7th International Conference On Computing, Communication, Control And Automation (ICCUBEA)",
      details: "Pune, India, 2023, pp. 1-5, doi: 10.1109/ICCUBEA58933.2023.10392012",
      link: "https://ieeexplore.ieee.org/document/10392012"
    }
  ];

  return (
    <SectionWrapper title="Conference Publications">
      <div className="space-y-6">
        {conferences.map((conf, index) => (
          <InfoBlock key={index} color={index % 2 === 0 ? 'teal' : 'blue'}>
            <div className="border-l-2 border-teal-200 pl-4">
              <h3 className="font-medium">{conf.title}</h3>
              <p className="text-sm text-gray-600">{conf.authors}</p>
              <p className="text-sm"><em>{conf.event}</em></p>
              <p className="text-xs text-gray-500">{conf.details}</p>
              {conf.link && conf.link !== '#' && (
                <a href={conf.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center mt-2 text-sm">
                  {conf.link.includes('ieeexplore') ? 'IEEE Xplore' : 'Conference Website'} <FiExternalLink className="ml-1" size={14} />
                </a>
              )}
            </div>
          </InfoBlock>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Books
function Books() {
  const books = [
    {
      title: "Internet of Things",
      course: "Second Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/internet-things-second-year-sy-degree-artifical-intelligence-data-science-semester-4/p/itmacd4162afea0c"
    },
    {
      title: "Fundamentals of Artificial Intelligence and Machine Learning",
      course: "Second Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/fundamentals-artificial-intelligence-machine-learning-second-year-sy-degree-ai-ml-semester-4/p-itma80b1223298ac"
    },
    {
      title: "Modernized IoT",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/modernized-iot-final-year-degree-course-electronics-telecommunication-engineering-semester-7-sppu/p/itmad50a3e06e835"
    },
    {
      title: "Mobile Computing",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/mobile-computing-final-year-degree-course-electronics-telecommunication-engineering-semester-8-sppu/p/itma5a016621bb51?pid=9788119115044&lid=LSTBOK97881191150448JUZUP&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Cloud Computing",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Image Processing",
      course: "Final Year Degree Course in COMPUTER ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/image-processing-final-year-degree-course-computer-engineering-semester-8-sppu/p/itm0022ef1f48058"
    },
    {
      title: "Video Analytics",
      course: "Third Year (TY) B.Tech Course in Artificial Intelligence and Machine Learning AIML",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/video-analytics-third-year-ty-b-tech-artificial-intelligence-machine-learning-aiml-semester-6-sppu/p/itm06436aa3af9bc?pid=9788119115938&lid=LSTBOK97881191159380XSIPF&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Industrial Internet of Things",
      course: "Final Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/industrial-internet-things-final-year-b-tech-artificial-intelligence-data-science-ai-ds-semester-7-sppu/p/itm957e3a6776d27?pid=9788119117857&lid=LSTBOK9788119117857BXS774&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Wireless Sensor Networks",
      course: "Final Year BTech. Course in Electronics and Telecommunication Engineering/ Electronics Engineering (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/wireless-sensor-networks-dbatu-final-year-b-tech-course-electronics-telecommunication-engineering-engineering-semester-7/p/itmab4a57f5dad4e?pid=9788119116942&lid=LSTBOK9788119116942TWLSSS&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Blockchain Technology",
      course: "Final Year BTech Course in Computer Engineering/ Computer Science and Engineering (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/blockchain-technology-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering/p/itm1a6aeb6c2942c?pid=9788119116249&lid=LSTBOK9788119116249Q5RX2A&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Deep Learning",
      course: "Final Year B.Tech Course In Computer Engineering, Computer Science & Engineering and Information Technology (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/deep-learning-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering-information-technology/p/itm7753b86928502"
    }
  ];

  return (
    <SectionWrapper title="Authored Books">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book, index) => (
          <InfoBlock key={index} color={index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'blue' : 'purple'}>
            <div className="border-l-2 border-teal-200 pl-4">
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.course}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">Published by: {book.publisher}</p>
                <a href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center text-sm">
                  Purchase <FiExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </div>
          </InfoBlock>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Patents
function Patents() {
  return (
    <div className="space-y-8">
      <InfoBlock color="teal">
        <SectionWrapper title="Granted Patents">
          <div className="border-l-2 border-teal-200 pl-4">
            <h3 className="font-medium">
              DESIGN AND DEVELOPMENT OF AN ULTRASONIC VIBRATION-ASSISTED TURNING TOOLONG FIXTURE AND HARD MACHINE
            </h3>
            <p className="text-sm text-gray-600">
              Published on 09.12.2022, Application Number: 202221004356
            </p>
            <a href="https://ipindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center mt-2 text-sm">
              Indian Patent Office <FiExternalLink className="ml-1" size={14} />
            </a>
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Industry Interaction
function IndustryInteraction() {
  const internships = [
    {
      company: "Healthy Globe Smart Virtual Education Pvt. Ltd. (Padhega Bharat)",
      details: "05 Students (FYBTECH Students), Signed MOU",
      link: "https://padhegabharat.com"
    },
    {
      company: "Deep Learning Research & Development (DLRD)",
      details: "11 Students (FYBTECH/SYBTECH Students)",
      link: "https://www.dlrd.in"
    },
    {
      company: "PrepBytes, Ghaziabad",
      details: "Conducted Online workshop on Competitive Coding for FYBTECH Students",
      link: "https://www.prepbytes.com/"
    },
    {
      company: "PROGO",
      details: "01 Student (SYBTECH Student)",
      link: "https://www.progoconsultancyservices.com/"
    },
    {
      company: "Optimum Data Analytics (ODA), Pune",
      details: "Signed MOU, 20 Students (SYBTECH Students), Completed 4 Industrial Projects",
      link: "https://www.optimumdataanalytics.com/"
    },
    {
      company: "ASIC Networking Services Pvt. Ltd., Pune",
      details: "Signed MOU",
      link: "http://www.asicindia.com"
    },
    {
      company: "RIMOTE Private Limited, Singapore",
      details: "06 Students (Final Year), 02 Students (Third Year), Signed MOU",
      link: "https://rimote.io/"
    },
    {
      company: "Code Gurukul, Pune",
      details: "40+ Students (Final Year/SYBTECH/TYBTECH)",
      link: "https://code‑gurukul.com/"
    },
    {
      company: "OXVSYS, Pune",
      details: "02 Students",
      link: "https://oxvsys.com/"
    },
    {
      company: "INNOTEK IT SYSTEMS LLP",
      details: "40 Students (FYBTECH Students)",
      link: "https://www.innoteksystem.com/"
    },
    {
      company: "CREATOR RESEARCH Pvt. Ltd.",
      details: "04 Students (FYBTECH Students)",
      link: "https://creatorresearch.com/"
    },
    {
      company: "Intenics Private Limited, Jabalpur",
      details: "03 Students (FYBTECH Students), Product Development under Internship – 01 Student",
      link: "https://intenics.in/"
    }
  ];

  const industryVisits = [
    { name: "Mag Power, Pune", link: "https://magpowerpune.com/" },
    { name: "Revogreen Technologies Pvt. Ltd., Pune", link: "https://revogreen.in/" },
    { name: "Halliburton, Pune", link: "https://www.halliburton.com/" },
    { name: "H. B. Fuller", link: "https://www.hbfuller.com/" },
    { name: "Intenics Private Limited, Jabalpur", link: "https://intenics.in/" }
  ];

  return (
    <div className="space-y-10">
      {/* Industry Internships */}
      <InfoBlock color="blue">
        <SectionWrapper title="Industry Internships Facilitated">
          <div className="flex items-center gap-2 mb-3 text-blue-700">
            <FiBriefcase size={22} />
            <span className="font-semibold">Collaborations & Student Internships</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {internships.map((internship, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-medium text-gray-800">{internship.company}</h3>
                <p className="text-sm text-gray-700 mt-1">{internship.details}</p>
                <a
                  href={internship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline"
                >
                  Company Website <FiExternalLink className="ml-1" size={14} />
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>

      {/* Industry Visits */}
      <InfoBlock color="teal">
        <SectionWrapper title="Industry Visits Organized">
          <div className="flex items-center gap-2 mb-3 text-teal-700">
            <FiMapPin size={22} />
            <span className="font-semibold">Practical Exposure & Site Visits</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {industryVisits.map((visit, j) => (
              <div
                key={j}
                className="bg-teal-50 border border-teal-100 px-4 py-2 rounded-lg hover:bg-teal-100 transition"
              >
                <a
                  href={visit.link !== "#" ? visit.link : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-blue-600 ${visit.link !== "#" ? "hover:underline" : ""
                    }`}
                >
                  {visit.name}
                  {visit.link !== "#" && <FiExternalLink className="ml-1" size={14} />}
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Contact Section
const fadeVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView]);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-[#f0fdfa]" id="contact">
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-white"
      >
        {/* Heading */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
          className="text-center pt-8 mb-8 px-2"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Academic Inquiries & Collaboration
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out for research collaborations, student guidance, or academic discussions
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-4 sm:p-6 md:p-8">
          {/* Left Contact Info */}
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            className="bg-[#f0fbfc] text-gray-900 rounded-xl p-6 sm:p-8 shadow-md w-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Contact Information
            </h3>

            <div className="space-y-5 sm:space-y-6">
              <ContactDetail
                icon={<FiUser size={18} className="text-cyan-600" />}
                label="Name"
                value="Dr. Anup Ingle"
              />
              <ContactDetail
                icon={<FiPhone size={18} className="text-cyan-600" />}
                label="Phone"
                value="+91-9325383604 (Primary)"
              />
              <ContactDetail
                icon={<FiMail size={18} className="text-cyan-600" />}
                label="Email"
                value="anup.ingle@viit.ac.in"
                isEmail
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
            className="space-y-5 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-cyan-200"
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
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-cyan-200"
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
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-cyan-200 bg-white"
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
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-cyan-200"
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input
                id="consent"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-200 mt-1"
              />
              <label htmlFor="consent" className="text-xs sm:text-sm text-gray-700">
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

function ContactDetail({ icon, label, value, secondValue, isLink = false, isEmail = false }) {
  const content = isEmail ? (
    <a
      href={`mailto:${value}`}
      className="text-sm sm:text-base text-cyan-600 hover:underline break-all"
    >
      {value}
    </a>
  ) : isLink ? (
    <a
      href={`https://${value}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm sm:text-base text-cyan-600 hover:underline break-all"
    >
      {value}
    </a>
  ) : (
    <p className="text-sm sm:text-base text-gray-600 break-all">{value}</p>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-medium text-gray-700">{label}</p>
        {content}
        {secondValue && (
          <p className="text-sm sm:text-base text-gray-600 mt-1 break-words">{secondValue}</p>
        )}
      </div>
    </div>
  );
}