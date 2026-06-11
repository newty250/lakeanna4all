import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Lake Anna Lake For All — our mission, creed, and the story of Lake Anna, Virginia\'s second-largest public inland lake.',
};

const creedPoints = [
  'Lake Anna is a public lake and should remain accessible to all users equally.',
  'Recreational watersports — including wake surfing, skiing, fishing, kayaking, and swimming — all have a rightful place on a public lake.',
  'Regulations should be fair, evidence-based, and applied equally to all watercraft without singling out specific activities.',
  'Education and voluntary courtesy are more effective than restrictive regulation.',
  'Boaters, shoreline residents, swimmers, and anglers can coexist with mutual respect.',
  'We are stewards of Lake Anna and committed to preserving its health and beauty for future generations.',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title={<>About <span className="text-sky">Lake Anna</span> <span className="text-white">Lake For All</span></>}
        subtitle="We are a grassroots organization of Lake Anna users committed to preserving public lake access and equal rights for all watercraft on Virginia's second-largest inland lake."
        variant="page"
      />

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide mb-6">
                Our Mission
              </h2>
              <blockquote className="border-l-4 border-sky pl-6 py-2 mb-6">
                <p className="font-display font-700 text-navy text-lg leading-relaxed italic">
                  &ldquo;Lake Anna Lake for All Users. Preservation of all watersports on Lake Anna, a public lake, through education and respect with limitations that are equally applied to all watercraft.&rdquo;
                </p>
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lake Anna Lake For All (LFA) was founded by everyday lake users who saw a need for organized advocacy as regulatory pressure on recreational boating began to grow. We believe that public lakes belong to all — not just those who live along the shore.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach is simple: promote responsible boating, educate the public, and ensure that any regulations imposed on Lake Anna are fair, evidence-based, and applied equally across all watercraft types.
              </p>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-display font-800 text-xl uppercase tracking-wide mb-4 text-sky">
                Lake Anna by the Numbers
              </h3>
              <dl className="space-y-4">
                {[
                  { label: 'Surface Area', value: '~13,000 acres' },
                  { label: 'Shoreline', value: '~250 miles' },
                  { label: 'Location', value: 'Louisa & Spotsylvania Counties, VA' },
                  { label: 'Classification', value: 'Public Waters of Virginia' },
                  { label: 'Created', value: '1972 (North Anna Power Station)' },
                  { label: 'Status', value: 'Virginia\'s 2nd-Largest Inland Lake' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between border-b border-navy-500 pb-3">
                    <dt className="text-sky-200 text-sm">{stat.label}</dt>
                    <dd className="text-white font-display font-700 text-sm text-right">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Anna Story */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
              History
            </p>
            <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide">
              The Lake Anna Story
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-5">
            <p>
              Lake Anna was created in 1972 as a cooling reservoir for the North Anna Nuclear Power Station, operated by Dominion Energy. The lake is formed by the North Anna River in Louisa and Spotsylvania Counties, Virginia, and has grown into the second-largest inland lake in the Commonwealth.
            </p>
            <p>
              From its creation, Lake Anna has been designated as public waters of the Commonwealth of Virginia — accessible to all Virginians and visitors for recreational use. This public status is central to everything we stand for: the lake belongs to everyone, not just to those fortunate enough to own property along its shores.
            </p>
            <p>
              Over the decades, Lake Anna has become one of the most popular recreational destinations in Virginia, attracting boaters, anglers, swimmers, and water sports enthusiasts from across the Mid-Atlantic region. Wake surfing, skiing, tubing, fishing, kayaking, sailing — all have found a home on Lake Anna&apos;s broad waters.
            </p>
            <p>
              In recent years, the growth of wake boating and wake surfing has sparked debate about noise, wakes, and their effects on shorelines. LFA was founded in response — not to oppose reasonable guidelines, but to ensure that the conversation includes all lake users and that any regulations are fair, equitable, and based on evidence rather than aesthetics or preference.
            </p>
          </div>
        </div>
      </section>

      {/* Creed */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
              What We Believe
            </p>
            <h2 className="font-display font-900 text-3xl md:text-4xl uppercase tracking-wide">
              The LFA Creed
            </h2>
          </div>
          <div className="space-y-4">
            {creedPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-sky text-white flex items-center justify-center font-display font-800 text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-200 text-base leading-relaxed pt-1">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-sky text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-4xl uppercase tracking-tight mb-4">
            Join the Movement
          </h2>
          <p className="text-sky-50 text-lg mb-8">
            Membership is free. Your name on our roster sends a powerful message to legislators and regulators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-display font-800 text-sm uppercase tracking-widest rounded hover:bg-navy-600 transition-colors"
            >
              Join Free Today
            </Link>
            <Link
              href="/take-action"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-display font-700 text-sm uppercase tracking-widest rounded hover:bg-white hover:text-sky transition-colors"
            >
              Take Action
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
