import { NextResponse } from 'next/server';
import { getFallbackNews } from '@/lib/anthropic';
import { getStoredNews } from '@/lib/news';

export const runtime = 'nodejs';
export const revalidate = 604800;

export async function GET() {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json(getFallbackNews());
  }

  try {
    const news = await getStoredNews();
    return NextResponse.json(news);
  } catch (error) {
    console.error('Failed to retrieve news:', error);
    return NextResponse.json(getFallbackNews());
  }
}
