'use client';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/navLinks';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-50/80 backdrop-blur-md shadow-sm px-6 py-2 overflow-x-hiddens">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="#home"
          className="text-2xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
        >
          Dr. Anup Ingle
        </Link>
        <div className="flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-2 py-1 text-[#334155] hover:text-[#0f766e] transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0f766e] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
