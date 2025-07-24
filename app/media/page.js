'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
export const dynamic = 'force-static';

const images = [
  '/media1.avif',
  '/media2.webp',
  '/media3.webp',
  '/media4.avif',
  '/media5.avif',
  '/media6.webp',
 
];

export default function MediaShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10 text-center"
      >
        ✨ Media Gallery
      </motion.h1>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Media ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
