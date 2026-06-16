import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import NewsCard from '@/components/NewsCard';
import { getFallbackNews } from '@/lib/anthropic';
import type { NewsCache } from '@/lib/types';

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'AI-curated news on public lake access rights, watercraft regulations, waterway preservation, and boating safety across the United States.',
};

export const revalidate = 3600;

async function getNews(): Promise<NewsCache> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/news`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch news');
    return await res.json();
  } catch {
    return getFallbackNews();
  }
}

export default async function NewsPage() {
  const news = await getNews();

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'lake-access', label: 'Lake Access' },
    { key: 'regulations', label: 'Regulations' },
    { key: 'preservation', label: 'Preservation' },
    { key: 'safety', label: 'Safety' },
  ] as const;

  const generatedDate = new Date(news.generatedAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Hero
        title="News & Updates"
        subtitle="AI-curated coverage of public lake access rights, watercraft regulations, waterway preservation, and boating safety across the United States."
        variant="page"
      />

      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-gray-500 text-sm">
                Feed generated on <span className="font-600 text-navy">{generatedDate}</span>
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Powered by Claude AI &bull; Refreshes weekly, Mondays at 7:00 AM UTC
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-navy bg-white border border-sky-200 px-3 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              {news.articles.length} articles found
            </div>
          </div>

          {/* Category filter (visual only) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat.key}
                className="px-4 py-1.5 rounded-full border border-sky-200 bg-white text-xs font-display font-700 uppercase tracking-wider text-navy cursor-default"
              >
                {cat.label}
              </span>
            ))}
          </div>

          {/* News grid */}
          {news.articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">📰</p>
              <h3 className="font-display font-700 text-navy text-xl mb-2">No articles yet</h3>
              <p className="text-gray-500">Check back soon — the feed refreshes weekly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-14 p-5 bg-white border border-sky-100 rounded-lg">
            <p className="text-navy-300 text-xs leading-relaxed">
              <strong className="text-navy">About this feed:</strong> Articles are curated by an AI model that searches the web for relevant news about public lake access, boating regulations, and waterway preservation. Lake Anna Lake For All does not endorse specific publications or articles. Always verify information with primary sources.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
