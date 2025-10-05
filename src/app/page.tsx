'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center relative border-b border-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-label="Hero section introducing ULTIRO"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90">
            {/* Accent elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF3D22] rounded-full filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#FF3D22] rounded-full filter blur-[150px] opacity-15"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 z-10 relative">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
              delay: 0.2
            }}
          >
            We Accelerate <span className="text-[#FF3D22]">
              Innovation
            </span><br/>
            <span className="text-[#FF3D22]">
              & Build
            </span> Ambitious Ventures
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 max-w-4xl whitespace-normal font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.8
            }}
          >
            In close partnership with visionary founders and organizations, we leverage our Nordic and international networks to scale impactful solutions globally.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-5 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.2
            }}
            role="group"
            aria-label="Primary navigation actions"
          >
            <Link
              href="/scale"
              className="btn-outline rounded-full inline-flex items-center text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
              aria-label="Explore scaling solutions offered by ULTIRO"
            >
              <span className="relative z-10">Explore Scaling Solutions</span>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </Link>
            <Link
              href="/apply-founder"
              className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full text-base sm:text-lg font-medium relative group overflow-hidden"
              aria-label="Apply as a founder to ULTIRO"
            >
              <span className="relative z-10 flex items-center">
                Apply as Founder
                <motion.span
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <ArrowRight className="ml-2 hidden sm:inline" size={20} />
                  <ArrowRight className="ml-2 sm:hidden" size={18} />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <section 
        className="py-24 bg-black border-b border-gray-800"
        aria-labelledby="impact-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="impact-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Creating <span className="text-[#FF3D22]">Impact</span> That Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build and scale ventures that solve real problems and create lasting value in the Nordic region and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" role="list">
            <div 
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-colors"
              role="listitem"
            >
              <div className="w-12 h-12 bg-[#FF3D22] rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Venture Building</h3>
              <p className="text-gray-400">From concept to scale, we build ventures that address market needs with innovative solutions.</p>
            </div>
            
            <div 
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-colors"
              role="listitem"
            >
              <div className="w-12 h-12 bg-[#FF3D22] rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Scaling Solutions</h3>
              <p className="text-gray-400">We provide the expertise, network, and resources needed to scale businesses rapidly and sustainably.</p>
            </div>
            
            <div 
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#FF3D22] transition-colors"
              role="listitem"
            >
              <div className="w-12 h-12 bg-[#FF3D22] rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Network</h3>
              <p className="text-gray-400">Leveraging our extensive Nordic and international network to create opportunities and drive growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-black"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#FF3D22]">Build</span> Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join us in creating the next generation of impactful ventures. Whether you're a founder with a vision or an organization looking to innovate, we're here to help you succeed.
          </p>
          <div className="flex flex-wrap gap-5 justify-center" role="group" aria-label="Application options">
            <Link
              href="/apply-founder"
              className="inline-flex items-center px-8 py-4 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full text-lg font-medium"
              aria-label="Apply as a founder to ULTIRO"
            >
              Apply as Founder
            </Link>
            <Link
              href="/apply-partner"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full text-lg font-medium"
              aria-label="Apply as a partner to ULTIRO"
            >
              Apply as Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}