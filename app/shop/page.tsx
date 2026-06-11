import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Lake Anna Lake For All merchandise. Show your support with print-on-demand apparel and accessories.',
};

const placeholderProducts = [
  {
    id: 'classic-tee',
    name: 'LFA Classic Tee',
    description: 'Soft, comfortable unisex tee featuring the Lake Anna Lake For All circular badge logo.',
    price: '$28',
    colors: ['Navy', 'Sky Blue', 'White'],
    image: '👕',
    badge: 'Best Seller',
  },
  {
    id: 'wave-hoodie',
    name: 'WAVE Hoodie',
    description: 'Premium pullover hoodie with the WAVE program letters across the chest. Perfect for cool mornings on the water.',
    price: '$52',
    colors: ['Navy', 'Charcoal'],
    image: '🧥',
    badge: null,
  },
  {
    id: 'lake-cap',
    name: 'Lake Anna Cap',
    description: 'Structured snapback cap with embroidered LFA logo. UV-protective and moisture-wicking.',
    price: '$32',
    colors: ['Navy/Sky Blue', 'All Navy'],
    image: '🧢',
    badge: 'New',
  },
  {
    id: 'sticker-pack',
    name: 'Sticker Pack (5)',
    description: 'Waterproof vinyl sticker pack — logo badge, WAVE lettering, and "Lake Anna Lake For All" wordmark.',
    price: '$12',
    colors: [],
    image: '🏷️',
    badge: null,
  },
  {
    id: 'tote-bag',
    name: 'Lake Tote Bag',
    description: 'Heavy canvas tote with LFA logo — take it to the dock, the farmers market, or the grocery store.',
    price: '$24',
    colors: ['Navy', 'Natural'],
    image: '👜',
    badge: null,
  },
  {
    id: 'kozy',
    name: 'Insulated Can Koozie',
    description: 'Keep your drinks cold on the lake with this neoprene koozie featuring the circular badge logo.',
    price: '$10',
    colors: ['Navy', 'Sky Blue'],
    image: '🥤',
    badge: null,
  },
];

export default function ShopPage() {
  return (
    <>
      <Hero
        title="LFA Shop"
        subtitle="Wear your support for public lake access. All proceeds fund our advocacy mission."
        variant="page"
      />

      {/* Coming soon banner */}
      <div className="bg-sky text-white py-4 text-center">
        <p className="font-display font-700 text-sm uppercase tracking-widest">
          🚧 Shop launching soon — products below are previews. Join the waitlist!
        </p>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-1">
                Print on Demand
              </p>
              <h2 className="font-display font-900 text-3xl text-navy uppercase">
                LFA Merchandise
              </h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-display font-700 uppercase tracking-wider px-4 py-2 rounded-lg">
              Preview — Not Yet Available
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProducts.map((product) => (
              <div
                key={product.id}
                className="bg-sky-50 rounded-xl border border-sky-100 overflow-hidden opacity-80"
              >
                {/* Image placeholder */}
                <div className="bg-navy h-48 flex items-center justify-center relative">
                  <span className="text-7xl">{product.image}</span>
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-sky text-white text-xs font-display font-700 uppercase tracking-wider px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display font-800 text-navy text-lg">{product.name}</h3>
                    <span className="font-display font-700 text-navy text-lg ml-2 shrink-0">{product.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                  {product.colors.length > 0 && (
                    <p className="text-gray-400 text-xs mb-4">
                      Colors: {product.colors.join(', ')}
                    </p>
                  )}
                  <button
                    disabled
                    className="w-full py-2.5 bg-navy-100 text-navy-400 font-display font-700 text-sm uppercase tracking-wider rounded cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email waitlist */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="font-display font-900 text-3xl uppercase mb-4">
            Be First to Know
          </h2>
          <p className="text-sky-100 mb-8">
            The shop is launching soon. Join the waitlist and we&apos;ll notify you the moment it&apos;s live — plus you&apos;ll get 15% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
            />
            <button className="px-6 py-3 bg-sky text-white font-display font-700 text-sm uppercase tracking-wider rounded-lg hover:bg-sky-600 transition-colors whitespace-nowrap">
              Notify Me
            </button>
          </div>
          <p className="text-sky-200 text-xs mt-4">
            Or{' '}
            <Link href="/membership" className="text-sky hover:underline">
              join as a member
            </Link>{' '}
            for early access.
          </p>
        </div>
      </section>
    </>
  );
}
