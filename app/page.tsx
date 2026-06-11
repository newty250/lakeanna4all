import Link from 'next/link';
import Hero from '@/components/Hero';
import WAVESection from '@/components/WAVESection';
import NewsCard from '@/components/NewsCard';
import { getFallbackNews } from '@/lib/anthropic';

async function getNewsPreview() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/news`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed');
    return await res.json();
  } catch {
    return getFallbackNews();
  }
}

export default async function HomePage() {
  const news = await getNewsPreview();
  const previewArticles = news.articles.slice(0, 3);

  return (
    <>
      <Hero
        title="Lake Anna Lake For All"
        subtitle="Advocating for public lake access and preservation of all watersports on Lake Anna — a public lake — through education, respect, and equally applied guidelines for all watercraft."
        cta={{ label: 'Join Free', href: '/membership' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
      />

      {/* Mission strip */}
      <section className="bg-sky text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-700 text-lg md:text-xl uppercase tracking-widest">
            Lake Anna Lake for All Users &bull; Public Lake Access &bull; Equal Rights for All Watercraft
          </p>
        </div>
      </section>

      {/* WAVE Program */}
      <WAVESection />

      {/* News Preview */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-2">
                AI-Curated Daily Feed
              </p>
              <h2 className="font-display font-900 text-3xl md:text-4xl text-navy uppercase tracking-wide">
                News & Updates
              </h2>
            </div>
            <Link
              href="/news"
              className="hidden sm:inline-flex items-center px-5 py-2 border-2 border-navy text-navy font-display font-700 text-sm uppercase tracking-wider rounded hover:bg-navy hover:text-white transition-colors duration-200"
            >
              All News &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewArticles.map((article: import('@/lib/types').NewsArticle) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/news"
              className="inline-flex items-center px-5 py-2 border-2 border-navy text-navy font-display font-700 text-sm uppercase tracking-wider rounded hover:bg-navy hover:text-white transition-colors"
            >
              See All News &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Take Action CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lake Responsibly card */}
            <div className="bg-navy rounded-xl p-10 text-white">
              <div className="text-5xl mb-4">⚓</div>
              <h3 className="font-display font-800 text-2xl uppercase tracking-wide mb-3">Lake Responsibly</h3>
              <p className="text-sky-100 mb-6">
                Know the rules. Follow the guidelines. Keep Lake Anna safe and fun for every boater, swimmer, and shoreline resident.
              </p>
              <Link
                href="/lake-responsibly"
                className="inline-flex items-center px-5 py-2 bg-sky text-white font-display font-700 text-sm uppercase tracking-wider rounded hover:bg-sky-600 transition-colors"
              >
                View Rules
              </Link>
            </div>

            {/* Take Action card */}
            <div className="bg-sky rounded-xl p-10 text-white">
              <div className="text-5xl mb-4">📣</div>
              <h3 className="font-display font-800 text-2xl uppercase tracking-wide mb-3">Take Action</h3>
              <p className="text-sky-50 mb-6">
                Your voice matters. Sign petitions, contact legislators, and connect with advocacy organizations fighting for public lake access nationwide.
              </p>
              <Link
                href="/take-action"
                className="inline-flex items-center px-5 py-2 bg-navy text-white font-display font-700 text-sm uppercase tracking-wider rounded hover:bg-navy-600 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-3">
            Free to Join
          </p>
          <h2 className="font-display font-900 text-4xl md:text-5xl uppercase tracking-tight mb-6">
            Stand Up for Lake Anna
          </h2>
          <p className="text-sky-100 text-lg mb-10">
            Join thousands of boaters, families, and lake lovers who are committed to keeping Lake Anna open, safe, and accessible to everyone.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center px-10 py-4 bg-sky text-white font-display font-800 text-base uppercase tracking-widest rounded hover:bg-sky-600 transition-colors duration-200"
          >
            Become a Member &mdash; Free
          </Link>
        </div>
      </section>
    </>
  );
}
