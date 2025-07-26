'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controlsLeft.start('visible');
            controlsRight.start('visible');
        } else {
            controlsLeft.start('hidden');
            controlsRight.start('hidden');
        }
    }, [inView]);

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
        <section
            ref={ref}
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
                            src="/profile3.png"
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
    );
}
