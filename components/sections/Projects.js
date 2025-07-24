'use client';

import { useState } from 'react';
import {
  FiAward,
  FiBook,
  FiPenTool,
  FiZap,
  FiCopy,
  FiList,
  FiLayers,
  FiBriefcase,
  FiBookOpen,
  FiCpu,
  FiUsers,
  FiGlobe,
  FiExternalLink,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

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

export default function AcademicPortfolio() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <section
      id="projects"
      className="bg-gray-50 p-6 md:p-12 min-h-screen font-sans overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Dr. Anup Ingle – Academic Portfolio
        </motion.h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeTab === tab.name
                  ? 'bg-white text-gray-900 border-gray-400 shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow'
              }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
      </div>
    </section>
  );
}

const SectionWrapper = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold border-l-4 pl-3 border-teal-400">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

// InfoBlock component for colored blocks
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
  return (
    <div className="space-y-8">
      <InfoBlock color="blue">
        <SectionWrapper title="Professional Profile">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg">Current Position</h3>
              <p>Assistant Professor, Department of Electronics & Telecommunication Engineering</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Education</h3>
              <p>Ph.D. in Electronics & Communication Engineering</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Experience</h3>
              <p>17+ years teaching experience<br />1+ year industry experience</p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Research Focus</h3>
              <p>Flow-based pattern matching to mitigate denial-of-service attacks on communication networks</p>
            </div>
          </div>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="teal">
        <SectionWrapper title="Professional Summary">
          <p>
            Dr. Anup Ingle is an accomplished academic and researcher with expertise in computer networks, 
            security, and IoT. His research focuses on intrusion detection systems, DDoS attack mitigation, 
            and network anomaly detection. With extensive experience in both academia and industry, he has 
            published numerous papers in reputed journals and conferences, authored several textbooks, and 
            actively contributes to student development through industry collaborations and internships.
          </p>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Interests
function Interests() {
  const researchInterests = [
    'Denial of Services Attacks (ICMP, UDP, TCP SYN and IP Spoofing, ARP Poisoning)',
    'Intrusion Detection and Prevention System (Snort)',
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
      <InfoBlock color="purple">
        <SectionWrapper title="Research Interests">
          <ul className="list-disc list-inside space-y-2">
            {researchInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="green">
        <SectionWrapper title="Teaching Interests">
          <ul className="list-disc list-inside space-y-2">
            {teachingInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="amber">
        <SectionWrapper title="Ultimate Research Goal">
          <p className="font-medium">
            To Design Hardware Firewall to prevent Network from various attacks
          </p>
        </SectionWrapper>
      </InfoBlock>
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

  return (
    <div className="space-y-8">
      <InfoBlock color="blue">
        <SectionWrapper title="Network Skills">
          <ul className="list-disc list-inside space-y-2">
            {networkSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="purple">
        <SectionWrapper title="Tools & Technologies">
          <ul className="list-disc list-inside space-y-2">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="teal">
        <SectionWrapper title="Programming Languages">
          <ul className="list-disc list-inside space-y-2">
            {programming.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="green">
        <SectionWrapper title="Other Technical Skills">
          <ul className="list-disc list-inside space-y-2">
            {otherSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
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
    <div className="space-y-8">
      <InfoBlock color="blue">
        <SectionWrapper title="Courses Taught">
          <ul className="list-disc list-inside space-y-2">
            {coursesTaught.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="purple">
        <SectionWrapper title="Project Guidance">
          <ul className="list-disc list-inside space-y-2">
            {projectGuidance.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Certifications
function Certifications() {
  return (
    <div className="space-y-8">
      <InfoBlock color="teal">
        <SectionWrapper title="Professional Certifications">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cisco Certified Network Associate (CCNA)</strong>
              <br />
              Score: 100%
              <br />
              <a href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline inline-flex items-center">
                About CCNA <FiExternalLink className="ml-1" size={14} />
              </a>
            </li>
            <li>
              <strong>Advanced Diploma in Computer Hardware and Networking (ADCHN)</strong>
              <br />
              Jetking, Noida | First Class (66.00%)
              <br />
              <a href="https://www.jetking.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline inline-flex items-center">
                Jetking Website <FiExternalLink className="ml-1" size={14} />
              </a>
            </li>
          </ul>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}

// Invited Talks
function InvitedTalks() {
  return (
    <div className="space-y-8">
      <InfoBlock color="purple">
        <SectionWrapper title="Guest Lectures">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Bharti Vidyapeeth Women's College of Engineering, Pune</strong>
              <br />
              Topic: 'Computer Network'
              <br />
              <a href="https://www.bvwomenscollege.edu.in/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline inline-flex items-center">
                College Website <FiExternalLink className="ml-1" size={14} />
              </a>
            </li>
            <li>
              <strong>Trinity College of Engineering and Research, Pune</strong>
              <br />
              Topic: 'Computer Network and Architecture'
              <br />
              <a href="https://www.trinityengg.edu.in/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline inline-flex items-center">
                College Website <FiExternalLink className="ml-1" size={14} />
              </a>
            </li>
          </ul>
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
    <div className="space-y-8">
      <InfoBlock color="blue">
        <SectionWrapper title="Research Focus Areas">
          <ul className="list-disc list-inside space-y-2">
            {researchFocus.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="teal">
        <SectionWrapper title="Current Research Projects">
          <ul className="list-disc list-inside space-y-2">
            {currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="purple">
        <SectionWrapper title="PhD Research">
          <p>
            <strong>Title:</strong> "FLOW-BASED PATTERN MATCHING APPROACH TO MITIGATE THE DENIAL OF SERVICE ATTACK ON COMMUNICATION NETWORK"
            <br /><br />
            Successfully completed PhD focusing on developing innovative approaches to detect and mitigate 
            various forms of Denial of Service attacks through pattern matching and machine learning techniques.
          </p>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="green">
        <SectionWrapper title="Research Tools & Resources">
          <div className="space-y-3">
            {researchLinks.map((link, index) => (
              <div key={index}>
                <a href={link.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-blue-600 hover:underline inline-flex items-center">
                  {link.title} <FiExternalLink className="ml-1" size={14} />
                </a>
                <p className="text-sm text-gray-600">{link.description}</p>
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
      link: "https://ijisae.org/"
    },
    {
      title: "Artificial intelligence-based classification performance evaluation in monophonic and polyphonic indian classical instruments recognition with hybrid domain features amalgamation",
      authors: "Chitre, Abhijit V., Wanjale, Kirti, Deshmukh, Aradhanaa, Kosbatwar, Shyamsunder P., Ingle, Anup & Hundekari, Sheela",
      journal: "Journal of Information and Optimization Sciences",
      details: "2023, 44:3, 341–353, DOI: 10.47974/JIOS-1345",
      link: "https://www.tandfonline.com/journals/tios20"
    },
    {
      title: "Investigating environmental sustainability applications using advanced monitoring systems",
      authors: "Sreenivasulu, K., Yadav, S., Pushpalatha, G., Sethumadhavan, R., Ingle, A., & Vijaya, R.",
      journal: "The Scientific Temper",
      details: "2023, 14(04), 1079–1084",
      link: "https://scientifictemper.com/"
    },
    {
      title: "Researching brain-computer interfaces for enhancing communication and control in neurological disorders",
      authors: "Rathore, N., Acharjee2, P. B., Thivyabrabha, K., P, U., Ingle, A., & Davinder kumar",
      journal: "The Scientific Temper",
      details: "2023, 14(04), 1098–1105",
      link: "https://scientifictemper.com/"
    },
    {
      title: "Smart Traffic: Integrating Machine Learning, and YOLO for Adaptive Traffic Management System",
      authors: "Sakhare, N., Hedau, M., B., G., Malpure, O., Shah, T., & Ingle, A.",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      details: "2024, 12(12s), 347–355",
      link: "https://ijisae.org/"
    }
  ];

  return (
    <SectionWrapper title="Journal Publications">
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <InfoBlock key={index} color={index % 2 === 0 ? 'teal' : 'blue'}>
            <div className="border-l-2 border-teal-200 pl-4">
              <h3 className="font-medium">{pub.title}</h3>
              <p className="text-sm text-gray-600">{pub.authors}</p>
              <p className="text-sm"><em>{pub.journal}</em></p>
              <p className="text-xs text-gray-500">{pub.details}</p>
              {pub.link && (
                <a href={pub.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-blue-600 hover:underline inline-flex items-center mt-2 text-sm">
                  Journal Website <FiExternalLink className="ml-1" size={14} />
                </a>
              )}
            </div>
          </InfoBlock>
        ))}
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
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Fundamentals of Artificial Intelligence and Machine Learning",
      course: "Second Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Modernized IoT",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Mobile Computing",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
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
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Video Analytics",
      course: "Third Year (TY) B.Tech Course in Artificial Intelligence and Machine Learning AIML",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Industrial Internet of Things",
      course: "Final Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Wireless Sensor Networks",
      course: "Final Year BTech. Course in Electronics and Telecommunication Engineering/ Electronics Engineering (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Blockchain Technology",
      course: "Final Year BTech Course in Computer Engineering/ Computer Science and Engineering (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
    },
    {
      title: "Deep Learning",
      course: "Final Year B.Tech Course In Computer Engineering, Computer Science & Engineering and Information Technology (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.niralipublication.com/"
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
                  Publisher <FiExternalLink className="ml-1" size={14} />
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
      company: "Healthy Globe Smart Virtual Education Pvt. Ltd. (Padhega Bharat) (HGSVE)",
      details: "05 Students (FYBTECH Students), Signed MOU",
      link: "#"
    },
    {
      company: "Deep Learning Research and Development (DLRD)",
      details: "11 Students (FYBTECH/SYBTECH Students)",
      link: "#"
    },
    {
      company: "PrepBytes, Ghaziabad",
      details: "Conducted Online workshop on Competitive Coding for FYBTECH Students",
      link: "https://www.prepbytes.com/"
    },
    {
      company: "PROGO",
      details: "01 Student (SYBTECH Student)",
      link: "#"
    },
    {
      company: "Optimum Data Analytics (ODA), Pune",
      details: "Signed MOU, 20 Students (SYBTECH Students), Completed 4 Industrial Projects",
      link: "#"
    },
    {
      company: "ASIC Networking Services Private Limited Pune",
      details: "Signed MOU",
      link: "#"
    },
    {
      company: "RIMOTE Private Limited, Singapore",
      details: "06 Students (Final Year BTECH Students), 02 Students (Third Year BTECH Students), Signed MOU",
      link: "https://rimote.io/"
    },
    {
      company: "Code Gurukul, Pune",
      details: "40+ Students (Final Year BTECH/SYBTECH/TYBTECH Students)",
      link: "https://www.codegurukul.com/"
    },
    {
      company: "OXVSYS, Pune",
      details: "02 Students",
      link: "#"
    },
    {
      company: "INNOTEK IT SYSTEMS LLP",
      details: "40 Students (FYBTECH Students)",
      link: "#"
    },
    {
      company: "CREATOR RESEARCH Pvt. Ltd.",
      details: "04 Students (FYBTECH Students)",
      link: "#"
    },
    {
      company: "Intenics Private Limited, Jabalpur",
      details: "03 Students (FYBTECH Students), Product Development under Internship – 01 Student (FYBTECH Student)",
      link: "#"
    }
  ];

  const industryVisits = [
    {
      name: "Mag Power, Pune",
      link: "#"
    },
    {
      name: "Revogreen Technologies Pvt. Ltd., Pune",
      link: "#"
    },
    {
      name: "Halliburton, Pune",
      link: "https://www.halliburton.com/"
    },
    {
      name: "H. B. Fuller",
      link: "https://www.hbfuller.com/"
    },
    {
      name: "Intenics Private Limited, Jabalpur",
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <InfoBlock color="blue">
        <SectionWrapper title="Industry Internships Facilitated">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {internships.map((internship, index) => (
              <div key={index} className="border-l-2 border-teal-200 pl-4">
                <h3 className="font-medium">{internship.company}</h3>
                <p className="text-sm text-gray-600">{internship.details}</p>
                {internship.link && internship.link !== '#' && (
                  <a href={internship.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline inline-flex items-center mt-1 text-sm">
                    Company Website <FiExternalLink className="ml-1" size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>

      <InfoBlock color="teal">
        <SectionWrapper title="Industry Visits Organized">
          <div className="flex flex-wrap gap-3">
            {industryVisits.map((visit, index) => (
              <div key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
                {visit.link && visit.link !== '#' ? (
                  <a href={visit.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline inline-flex items-center">
                    {visit.name} <FiExternalLink className="ml-1" size={14} />
                  </a>
                ) : (
                  <span>{visit.name}</span>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}