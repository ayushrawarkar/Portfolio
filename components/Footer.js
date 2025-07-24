'use client';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, BookOpen, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Left Column: About */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white">Dr. Anup Ingle</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Assistant Professor in Electronics & Telecommunication Engineering with expertise in 
            Network Security, IoT, and AI/ML. Passionate about research and student mentorship.
          </p>
        </div>

        {/* Center Column: Academic Resources */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-white mb-3">Academic Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              { href: '#research', label: 'Research Interests', icon: <BookOpen size={16} className="mr-2" /> },
              { href: '#publications', label: 'Publications', icon: <BookOpen size={16} className="mr-2" /> },
              { href: '#projects', label: 'Research Projects', icon: <GraduationCap size={16} className="mr-2" /> },
              { href: '#teaching', label: 'Teaching Portfolio', icon: <GraduationCap size={16} className="mr-2" /> }
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-teal-400 transition-colors flex items-center"
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Connect With Me</h4>
          <div className="space-y-3 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <Link href="mailto:aingle@sinhgad.edu" className="hover:text-teal-400 transition">
                xyz@viit.ac.in
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <Link href="mailto:anup.ingle@gmail.com" className="hover:text-teal-400 transition">
                xyz.xyz@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="https://linkedin.com/in/anup-ingle" target="_blank" className="hover:text-teal-400 transition">
              <Linkedin size={20} />
            </Link>
            <Link href="https://scholar.google.com/citations?user=PROFILE_ID" target="_blank" className="hover:text-teal-400 transition">
              <BookOpen size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-teal-400 transition">
              <Github size={20} />
            </Link>
            <Link href="https://researchgate.net/profile/Anup-Ingle" target="_blank" className="hover:text-teal-400 transition">
              <GraduationCap size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4 overflow-x-hidden">
        &copy; {new Date().getFullYear()} Dr. Anup Ingle. All rights reserved.
      </div>
    </footer>
  );
}