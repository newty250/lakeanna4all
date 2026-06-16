import { NextResponse } from 'next/server';
import { fetchNewsWithAI, getFallbackNews } from '@/lib/anthropic';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json(getFallbackNews());
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(getFallbackNews());
  }

  try {
    const news = await fetchNewsWithAI();
    return NextResponse.json(news, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('News fetch failed:', error);
    return NextResponse.json(getFallbackNews());
  }
}
