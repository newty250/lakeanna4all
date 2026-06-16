import { NextRequest, NextResponse } from 'next/server';
import { fetchNewsWithAI, getFallbackNews } from '@/lib/anthropic';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({ skipped: true, reason: 'Development environment — no API calls' });
  }

  const authHeader = request.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

  if (process.env.CRON_SECRET && authHeader !== expectedAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({
      success: false,
      message: 'ANTHROPIC_API_KEY not configured',
    });
  }

  try {
    const news = await fetchNewsWithAI();
    return NextResponse.json({
      success: true,
      articleCount: news.articles.length,
      generatedAt: news.generatedAt,
    });
  } catch (error) {
    console.error('Cron news refresh failed:', error);
    const fallback = getFallbackNews();
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch live news, using fallback',
      articleCount: fallback.articles.length,
    });
  }
}
