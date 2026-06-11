import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: 'home' | 'page';
}

export default function Hero({ title, subtitle, cta, secondaryCta, variant = 'home' }: HeroProps) {
  if (variant === 'page') {
    return (
      <div className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-900 text-4xl md:text-5xl uppercase tracking-wide text-white">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-white text-lg max-w-2xl opacity-90">{subtitle}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="relative text-white overflow-hidden" style={{ minHeight: '75vh' }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Lake Anna, Virginia"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark navy overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0, 30, 60, 0.55)' }} />

      {/* Content */}
      <div className="relative flex items-center" style={{ minHeight: '75vh' }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="font-display font-900 text-5xl md:text-7xl uppercase leading-none tracking-tight">
              <span className="block text-sky">Lake Anna</span>
              <span className="block text-white">Lake For All</span>
            </h1>
            {subtitle && (
              <p className="mt-6 text-white text-lg md:text-xl leading-relaxed max-w-2xl opacity-90">
                {subtitle}
              </p>
            )}
            {(cta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {cta && (
                  <Link
                    href={cta.href}
                    className="inline-flex items-center px-8 py-4 bg-white text-navy font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-sky-50 transition-colors duration-200"
                  >
                    {cta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-white hover:text-navy transition-colors duration-200"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
