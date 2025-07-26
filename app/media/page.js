'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
export const dynamic = 'force-static';

const images = [
  '/media1 (2).jpeg',
  '/media2 (2).jpeg',
  '/media3 (2).jpeg',
  '/media4 (2).jpeg',
  '/media5.jpeg',
  '/media6.jpeg',
  '/media7.jpeg',
];

export default function MediaShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-10">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12 text-center drop-shadow-lg"
      >
        ✨ Media Gallery
      </motion.h1>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group"
          >
            <Image
              src={src}
              alt={`Media ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Image Index */}
            <span className="absolute bottom-3 right-3 text-xs bg-white/80 text-gray-700 px-2 py-0.5 rounded-full shadow-sm">
              #{index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
