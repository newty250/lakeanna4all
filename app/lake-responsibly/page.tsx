import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Lake Responsibly',
  description:
    'Boater safety rules and education for Lake Anna. Learn the guidelines that keep our public lake safe and enjoyable for everyone.',
};

const rules = [
  {
    icon: '📏',
    title: '200-Foot Separation Rule',
    description:
      'Maintain at least 200 feet of separation from shorelines, docks, and other vessels at all times while operating at speed. This protects shorelines from wake erosion, keeps docks and swimmers safe, and prevents collisions.',
    important: true,
  },
  {
    icon: '🔄',
    title: 'Avoid Repetitive Passes',
    description:
      'Minimize repetitive passes along residential shorelines and community docks. Multiple passes in the same area compound wake effects and can cause significant erosion and property damage to waterfront properties.',
    important: false,
  },
  {
    icon: '🚧',
    title: 'Respect Personal Property',
    description:
      'Respect personal property and private docks. Do not moor to private docks without permission, and avoid intentionally directing wakes toward docked vessels or waterfront structures.',
    important: false,
  },
  {
    icon: '🦺',
    title: 'Life Jackets for Children',
    description:
      'All children under the age of 13 must wear a properly fitted, Coast Guard-approved life jacket whenever on a vessel underway in Virginia waters. This is Virginia law — not optional.',
    important: true,
  },
  {
    icon: '🎵',
    title: 'Reasonable Music Levels',
    description:
      'Play music at reasonable volumes and avoid explicit lyrics. Lake Anna has residential communities along the shoreline — sounds carry far across the water. Be a good neighbor.',
    important: false,
  },
  {
    icon: '💧',
    title: 'Discharge Ballast Tanks',
    description:
      'Discharge ballast tanks when not in use, especially before leaving the lake or moving between bodies of water. This prevents the spread of aquatic invasive species that can devastate lake ecosystems.',
    important: false,
  },
  {
    icon: '📚',
    title: 'Complete Boater Safety Course',
    description:
      'All boat operators must complete a Virginia Department of Wildlife Resources (DWR)-approved boater safety course. Education is the foundation of a safe lake community. Courses are available online and in-person.',
    important: false,
  },
];

export default function LakeResponsiblyPage() {
  return (
    <>
      <Hero
        title="Lake Responsibly"
        subtitle="Rules, guidelines, and best practices for keeping Lake Anna safe, clean, and enjoyable for every user — today and for generations to come."
        variant="page"
      />

      {/* Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
              Rules of the Lake
            </p>
            <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide">
              Know Before You Go
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              These rules combine Virginia law, DWR guidelines, and community standards to help every lake user coexist respectfully.
            </p>
          </div>

          <div className="space-y-5">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`flex gap-5 p-6 rounded-xl border ${
                  rule.important
                    ? 'border-sky-200 bg-sky-50'
                    : 'border-navy-100 bg-sky-50'
                }`}
              >
                <div className="text-3xl shrink-0 mt-1">{rule.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-800 text-navy text-lg">
                      {rule.title}
                    </h3>
                    {rule.important && (
                      <span className="text-xs font-display font-700 uppercase tracking-wider text-white bg-sky px-2 py-0.5 rounded">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DWR Boater Safety Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-5">🎓</div>
          <h2 className="font-display font-900 text-3xl md:text-4xl uppercase tracking-wide mb-4">
            Get Your Boater Safety Certification
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Virginia requires all motorized boat operators to complete a DWR-approved boater safety course. It&apos;s quick, often free, and could save a life — including yours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.dwr.virginia.gov/boating/boater-education/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-sky text-white font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-sky-600 transition-colors"
            >
              Virginia DWR Boater Education &rarr;
            </a>
            <Link
              href="/take-action"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-white hover:text-navy transition-colors"
            >
              Take Action
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE callout */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
            Our Code of Conduct
          </p>
          <h2 className="font-display font-900 text-3xl text-navy uppercase tracking-wide mb-4">
            Follow the WAVE Program
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Beyond the rules, our WAVE principles encourage a culture of respect and responsibility on Lake Anna.
          </p>
          <Link
            href="/#wave"
            className="inline-flex items-center px-6 py-3 bg-navy text-white font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-navy-600 transition-colors"
          >
            Learn About WAVE
          </Link>
        </div>
      </section>
    </>
  );
}
