import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Take Action',
  description:
    'Advocacy resources, petitions, and links to organizations fighting for public lake access rights across the United States.',
};

const actionItems = [
  {
    icon: '✉️',
    title: 'Contact Your Legislators',
    description:
      'Reach out to your Virginia state delegates and senators about public lake access issues and fair boating regulations. Your voice matters — elected officials listen to their constituents.',
    cta: { label: 'Find Your Legislators', href: 'https://whosmy.virginiageneralassembly.gov/' },
  },
  {
    icon: '📋',
    title: 'Attend DWR Public Comment Sessions',
    description:
      'The Virginia Department of Wildlife Resources holds public comment periods for new boating regulations. Attend or submit written comments to ensure recreational boaters are represented.',
    cta: { label: 'Virginia DWR', href: 'https://www.dwr.virginia.gov/' },
  },
  {
    icon: '📣',
    title: 'Spread the Word',
    description:
      'Share our mission with fellow boaters, family, and friends. Every new member strengthens our voice. Use #LakeAnnaLakeForAll on social media.',
    cta: { label: 'Join Free', href: '/membership' },
  },
  {
    icon: '📰',
    title: 'Stay Informed',
    description:
      'Follow our daily AI-curated news feed for the latest on public lake access legislation, watercraft regulations, and advocacy wins across the country.',
    cta: { label: 'Read the News', href: '/news' },
  },
];

const alliedOrgs = [
  {
    name: 'Water Sports Industry Association (WSIA)',
    description:
      'The national trade association for the wake sports industry, advocating for reasonable regulations and access to public waters.',
    url: 'https://wsia.net',
    category: 'Industry',
  },
  {
    name: 'American Boating Association',
    description:
      'A national advocacy organization dedicated to recreational boating and public water access rights.',
    url: 'https://americanboating.org',
    category: 'Advocacy',
  },
  {
    name: 'National Marine Manufacturers Association (NMMA)',
    description:
      'Advocates for the recreational boating industry and public access to America\'s waterways.',
    url: 'https://www.nmma.org',
    category: 'Industry',
  },
  {
    name: 'Surfrider Foundation',
    description:
      'A grassroots nonprofit dedicated to the protection and enjoyment of the world\'s ocean, waves, and beaches — a model for lake advocacy.',
    url: 'https://www.surfrider.org',
    category: 'Environmental',
  },
  {
    name: 'Virginia Boating Federation',
    description:
      'Virginia\'s voice for recreational boating, working with state agencies on fair regulation and public waterway access.',
    url: 'https://www.dwr.virginia.gov/boating/',
    category: 'State',
  },
  {
    name: 'BoatUS Foundation',
    description:
      'Provides boater education and advocates for safe, responsible, and accessible recreational boating nationwide.',
    url: 'https://www.boatus.org',
    category: 'Safety',
  },
];

const categoryColors: Record<string, string> = {
  Industry: 'bg-sky-100 text-sky-700',
  Advocacy: 'bg-navy-100 text-navy-700',
  Environmental: 'bg-green-100 text-green-700',
  State: 'bg-purple-100 text-purple-700',
  Safety: 'bg-yellow-100 text-yellow-700',
};

export default function TakeActionPage() {
  return (
    <>
      <Hero
        title="Take Action"
        subtitle="Public lake access is a right worth fighting for. Here's how you can make a difference for Lake Anna and waterways across Virginia and the nation."
        variant="page"
      />

      {/* Action Items */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
              Get Involved
            </p>
            <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide">
              How You Can Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actionItems.map((item, index) => (
              <div
                key={index}
                className="bg-sky-50 rounded-xl p-8 border border-sky-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-800 text-navy text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{item.description}</p>
                {item.cta.href.startsWith('http') ? (
                  <a
                    href={item.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 bg-navy text-white font-display font-700 text-sm uppercase tracking-wider rounded hover:bg-navy-600 transition-colors"
                  >
                    {item.cta.label} &rarr;
                  </a>
                ) : (
                  <Link
                    href={item.cta.href}
                    className="inline-flex items-center px-5 py-2 bg-navy text-white font-display font-700 text-sm uppercase tracking-wider rounded hover:bg-navy-600 transition-colors"
                  >
                    {item.cta.label} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allied Organizations */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
              The Broader Movement
            </p>
            <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide">
              Allied Organizations
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We&apos;re part of a national movement to protect recreational boating and public waterway access. Connect with these organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {alliedOrgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 border border-navy-100 hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-display font-700 uppercase tracking-wider px-2 py-0.5 rounded ${categoryColors[org.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {org.category}
                  </span>
                </div>
                <h3 className="font-display font-700 text-navy text-base mb-2">
                  {org.name}
                </h3>
                <p className="text-navy-400 text-sm leading-relaxed flex-1">
                  {org.description}
                </p>
                <p className="text-sky text-xs font-display font-700 uppercase tracking-wider mt-3">
                  Visit &rarr;
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-4xl uppercase tracking-tight mb-4">
            Every Member Counts
          </h2>
          <p className="text-sky-100 text-lg mb-8">
            Our numbers are our strength. Join Lake Anna Lake For All for free and add your voice to the movement.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center px-10 py-4 bg-sky text-white font-display font-800 text-sm uppercase tracking-widest rounded hover:bg-sky-600 transition-colors"
          >
            Join Free Today
          </Link>
        </div>
      </section>
    </>
  );
}
