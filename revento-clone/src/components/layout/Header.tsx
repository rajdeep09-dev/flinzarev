'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-20">
            <Image
              src="/images/logo.svg"
              alt="Revento"
              fill
              style={{ objectFit: 'contain' }}
              className="object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white text-sm uppercase hover:text-secondary transition-colors"
          >
            All Pages
          </Link>
          <Link
            href="/about"
            className="text-white text-sm uppercase hover:text-secondary transition-colors"
          >
            About
          </Link>
          <Link
            href="/testimonial"
            className="text-white text-sm uppercase hover:text-secondary transition-colors"
          >
            Reviews
          </Link>
          <Link href="/contact">
            <Button
              className="bg-white hover:bg-secondary text-primary hover:text-white transition-all rounded-full"
            >
              Get in touch
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-primary p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white text-sm uppercase hover:text-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              All Pages
            </Link>
            <Link
              href="/about"
              className="text-white text-sm uppercase hover:text-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/testimonial"
              className="text-white text-sm uppercase hover:text-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              <Button
                className="bg-white hover:bg-secondary text-primary hover:text-white transition-all rounded-full w-full"
              >
                Get in touch
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
