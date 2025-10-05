'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-[#FF3D22]">ULTIRO</div>
              </Link>
            </div>
            <div className="hidden md:ml-4 lg:ml-6 md:flex md:items-center md:space-x-2 lg:space-x-3">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/scale"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Scale
              </Link>
              <Link
                href="/programs"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Programs
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link
                href="/insights"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Insights
              </Link>
              <Link
                href="/careers"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#FF3D22] transition-colors duration-200"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-4">
            <Link
              href="/apply-founder"
              className="whitespace-nowrap inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-[#FF3D22] text-xs lg:text-sm font-medium rounded-full text-white bg-[#FF3D22] hover:bg-transparent hover:text-[#FF3D22] transition-colors duration-200"
            >
              Apply as Founder
            </Link>
            <Link
              href="/apply-partner"
              className="whitespace-nowrap inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-white text-xs lg:text-sm font-medium rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Apply as Partner
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FF3D22] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF3D22] relative ${isOpen ? 'opacity-0' : 'z-50'}`}
              aria-expanded={isOpen ? "true" : "false"}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden flex flex-col overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-[#FF3D22] transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="px-4 pt-20 pb-6">
            <Link href="/" className="inline-block mb-8" onClick={() => setIsOpen(false)}>
              <div className="text-3xl font-bold text-[#FF3D22]">ULTIRO</div>
            </Link>
            <div className="space-y-4">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/scale"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Scale
              </Link>
              <Link
                href="/programs"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/insights"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/careers"
                className="text-gray-300 hover:text-white block px-3 py-4 text-xl font-medium border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="px-4 py-8 border-t border-gray-800">
            <div className="flex flex-col gap-5">
              <Link
                href="/apply-founder"
                className="block w-full text-center py-4 px-6 border-2 border-[#FF3D22] text-lg font-medium rounded-full text-white bg-[#FF3D22] hover:bg-transparent hover:text-[#FF3D22] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Apply as Founder
              </Link>
              <Link
                href="/apply-partner"
                className="block w-full text-center py-4 px-6 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Apply as Partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;