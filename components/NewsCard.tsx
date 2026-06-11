import type { NewsArticle } from '@/lib/types';

const categoryColors: Record<NewsArticle['category'], string> = {
  'lake-access': 'bg-sky-100 text-sky-700',
  'regulations': 'bg-yellow-100 text-yellow-700',
  'preservation': 'bg-green-100 text-green-700',
  'safety': 'bg-red-100 text-red-700',
  'general': 'bg-gray-100 text-gray-700',
};

const categoryLabels: Record<NewsArticle['category'], string> = {
  'lake-access': 'Lake Access',
  'regulations': 'Regulations',
  'preservation': 'Preservation',
  'safety': 'Safety',
  'general': 'General',
};

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const isPlaceholder = article.url === '#';

  const CardContent = () => (
    <div className="bg-white rounded-xl shadow-sm border border-sky-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-1">
        {/* Category + source */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-display font-700 uppercase tracking-wider px-2 py-1 rounded ${categoryColors[article.category]}`}>
            {categoryLabels[article.category]}
          </span>
          <span className="text-gray-400 text-xs">&bull;</span>
          <span className="text-gray-500 text-xs">{article.source}</span>
        </div>

        {/* Title */}
        <h3 className="font-display font-700 text-navy text-lg leading-snug mb-3 flex-1">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-sky-100">
          <time className="text-gray-400 text-xs">{date}</time>
          {!isPlaceholder && (
            <span className="text-sky text-xs font-display font-700 uppercase tracking-wider">
              Read more &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (isPlaceholder) {
    return <CardContent />;
  }

  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <CardContent />
    </a>
  );
}
