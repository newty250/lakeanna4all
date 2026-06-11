import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Membership',
  description:
    'Join Lake Anna Lake For All for free. Your membership adds to our numbers and strengthens the voice for public lake access.',
};

const benefits = [
  {
    icon: '📣',
    title: 'A Stronger Voice',
    description: 'Your membership adds to our count. More members means more influence with state legislators and regulatory agencies.',
  },
  {
    icon: '📰',
    title: 'News & Updates',
    description: 'Stay informed with our daily AI-curated news feed on lake access rights, regulations, and advocacy wins nationwide.',
  },
  {
    icon: '🌊',
    title: 'Community',
    description: 'Connect with thousands of Lake Anna boaters, families, and lake lovers who share your values.',
  },
  {
    icon: '🛒',
    title: 'Member Discounts',
    description: 'Members receive early access and discounts on LFA merchandise from our print-on-demand shop.',
  },
  {
    icon: '📋',
    title: 'Advocacy Resources',
    description: 'Access templates, guides, and resources for contacting legislators and participating in public comment processes.',
  },
  {
    icon: '🚤',
    title: 'Protect the Lake',
    description: 'Help ensure Lake Anna remains a public resource — open and accessible to all users for generations to come.',
  },
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        title={<>Join <span className="text-sky">Lake Anna</span> <span className="text-white">Lake For All</span></>}
        subtitle="Membership is completely free. Join thousands of boaters, families, and lake lovers fighting to keep Lake Anna open, safe, and accessible to everyone."
        variant="page"
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
              Why Join
            </p>
            <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide">
              Member Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-display font-800 text-navy text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 bg-sky-50" id="signup">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
                It&apos;s Free
              </p>
              <h2 className="font-display font-900 text-3xl text-navy uppercase">
                Sign Up Now
              </h2>
              <p className="text-navy-300 text-sm mt-2">No fees. No spam. Just advocacy.</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-display font-700 uppercase tracking-wider text-navy mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-display font-700 uppercase tracking-wider text-navy mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-display font-700 uppercase tracking-wider text-navy mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="zip" className="block text-xs font-display font-700 uppercase tracking-wider text-navy mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  pattern="[0-9]{5}"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent"
                  placeholder="22942"
                />
              </div>

              <div>
                <label htmlFor="boatType" className="block text-xs font-display font-700 uppercase tracking-wider text-navy mb-2">
                  Primary Watercraft Type
                </label>
                <select
                  id="boatType"
                  name="boatType"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky focus:border-transparent bg-white text-gray-700"
                >
                  <option value="">Select type (optional)</option>
                  <option value="wake-boat">Wake Boat / Wake Surf</option>
                  <option value="ski-boat">Ski Boat</option>
                  <option value="pontoon">Pontoon Boat</option>
                  <option value="fishing">Fishing Boat</option>
                  <option value="sailboat">Sailboat</option>
                  <option value="pwc">Personal Watercraft (Jet Ski)</option>
                  <option value="kayak">Kayak / Canoe / Paddleboard</option>
                  <option value="other">Other</option>
                  <option value="none">I don&apos;t have a boat</option>
                </select>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  defaultChecked
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-sky focus:ring-sky"
                />
                <label htmlFor="newsletter" className="text-gray-600 text-sm">
                  Send me the monthly newsletter with updates on lake access advocacy and LFA news.
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-sky focus:ring-sky"
                />
                <label htmlFor="agree" className="text-gray-600 text-sm">
                  I agree to follow the{' '}
                  <a href="/lake-responsibly" className="text-sky hover:underline">
                    Lake Responsibly guidelines
                  </a>{' '}
                  and support the{' '}
                  <a href="/#wave" className="text-sky hover:underline">
                    WAVE Program
                  </a>
                  . <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy text-white font-display font-800 text-sm uppercase tracking-widest rounded-lg hover:bg-navy-600 transition-colors duration-200 mt-2"
              >
                Join Lake Anna Lake For All — Free
              </button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-5">
              We never sell or share your information. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Counter section */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-3">
            Growing Every Day
          </p>
          <h2 className="font-display font-900 text-4xl md:text-5xl uppercase mb-4">
            Together We&apos;re Stronger
          </h2>
          <p className="text-sky-100 text-lg">
            Every member who joins sends a signal to legislators, regulators, and shoreline stakeholders that recreational boaters are organized and engaged.
          </p>
        </div>
      </section>
    </>
  );
}
