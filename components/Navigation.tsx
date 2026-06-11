'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const navLinks = [
  { href: '/news', label: 'News & Updates' },
  { href: '/lake-responsibly', label: 'Lake Responsibly' },
  { href: '/take-action', label: 'Take Action' },
  { href: '/membership', label: 'Membership' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Logo size={50} />
            <div className="hidden sm:block">
              <p className="font-display font-800 text-sm uppercase tracking-widest leading-tight text-sky">
                Lake Anna
              </p>
              <p className="font-display font-700 text-xs text-white uppercase tracking-widest leading-tight">
                Lake For All
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs font-display font-700 uppercase tracking-wider rounded transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-sky bg-navy-600'
                    : 'text-white hover:text-sky-200 hover:bg-navy-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="ml-3 px-4 py-2 bg-sky text-white text-xs font-display font-700 uppercase tracking-wider rounded hover:bg-sky-600 transition-colors duration-150"
            >
              Join Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded text-white hover:bg-navy-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-600 border-t border-navy-400">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 text-sm font-display font-700 uppercase tracking-wider rounded transition-colors ${
                  pathname === link.href
                    ? 'text-sky bg-navy-700'
                    : 'text-white hover:text-sky-200 hover:bg-navy-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-3 py-2 bg-sky text-white text-sm font-display font-700 uppercase tracking-wider rounded text-center hover:bg-sky-600 transition-colors"
            >
              Join Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
