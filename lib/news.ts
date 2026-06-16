import type { NewsCache } from './types';
import { getFallbackNews } from './anthropic';

const KV_KEY = 'lfa_anna_news';

export async function getStoredNews(): Promise<NewsCache> {
  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const { kv } = await import('@vercel/kv');
      const stored = await kv.get<NewsCache>(KV_KEY);
      if (stored) return stored;
    }
  } catch {
    // KV not available — fall through to fallback data
  }

  return getFallbackNews();
}

export async function storeNews(news: NewsCache): Promise<void> {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return;
  }
  const { kv } = await import('@vercel/kv');
  await kv.set(KV_KEY, news);
}
