import Anthropic from '@anthropic-ai/sdk';
import type { NewsArticle, NewsCache } from './types';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MODEL = 'claude-haiku-4-5';

const NEWS_PROMPT = `You are a news curator for Lake Anna Lake For All (lakeanna4all.org), a public lake access advocacy organization in Virginia.

Search for the 8 most recent and relevant news articles from the past 7 days about:
1. Public lake access rights and legislation in the United States
2. Wake surfing, wake boating, or watercraft regulations on lakes
3. Waterway preservation and environmental policy affecting recreational boating
4. Boating safety laws, education requirements, and regulations
5. Lake homeowner vs. public access disputes or legislation

For each article, provide:
- A clear, informative title
- A 2-3 sentence summary explaining the key points and why it matters to lake users
- The source publication name
- The article URL (must be a real, verifiable URL)
- Publication date (ISO 8601 format)
- Category: one of "lake-access", "regulations", "preservation", "safety", or "general"

Prioritize articles that are directly relevant to public lake access rights, fair regulations affecting all watercraft equally, and recreational boating preservation. Include national stories as well as regional stories from Virginia and neighboring states.

Return ONLY a valid JSON array with this exact structure:
[
  {
    "id": "unique-slug-from-title",
    "title": "Article title",
    "summary": "Summary text",
    "url": "https://...",
    "source": "Publication Name",
    "publishedAt": "2024-01-15T00:00:00Z",
    "category": "lake-access"
  }
]`;

export async function fetchNewsWithAI(): Promise<NewsCache> {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    tools: [
      {
        type: 'web_search_20260209',
        name: 'web_search',
        max_uses: 5,
      },
    ] as unknown as Anthropic.Messages.Tool[],
    messages: [
      {
        role: 'user',
        content: NEWS_PROMPT,
      },
    ],
  });

  let jsonText = '';
  for (const block of response.content) {
    if (block.type === 'text') {
      jsonText = block.text;
      break;
    }
  }

  const jsonMatch = jsonText.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('No valid JSON array found in AI response');
  }

  const articles: NewsArticle[] = JSON.parse(jsonMatch[0]);

  return {
    articles,
    generatedAt: new Date().toISOString(),
  };
}

export function getFallbackNews(): NewsCache {
  return {
    articles: [
      {
        id: 'placeholder-1',
        title: 'Public Lake Access Rights Continue to Be Debated Across the Country',
        summary:
          'Advocacy groups nationwide are pushing back against restrictions that limit public access to navigable waterways. Legislators in multiple states are reviewing bills that would clarify the rights of recreational boaters on public lakes.',
        url: '#',
        source: 'Lake Access News',
        publishedAt: new Date().toISOString(),
        category: 'lake-access',
      },
      {
        id: 'placeholder-2',
        title: 'Virginia DWR Updates Boater Education Requirements for 2024',
        summary:
          "The Virginia Department of Wildlife Resources has updated its boater safety course requirements. All boat operators born after January 1, 1988, must complete a DWR-approved course before operating a motorized vessel on Virginia's waters.",
        url: '#',
        source: 'Virginia DWR',
        publishedAt: new Date().toISOString(),
        category: 'safety',
      },
      {
        id: 'placeholder-3',
        title: 'Wake Surfing Regulations Under Review in Multiple States',
        summary:
          'State legislatures across the Southeast are examining whether wake-surfing vessels should face additional restrictions on inland lakes. Advocates argue that balanced, evidence-based regulations should apply equally to all watercraft rather than singling out specific activities.',
        url: '#',
        source: 'Boating Industry',
        publishedAt: new Date().toISOString(),
        category: 'regulations',
      },
      {
        id: 'placeholder-4',
        title: 'Lake Anna Hosts Record Number of Recreational Boaters This Summer',
        summary:
          "Lake Anna, Virginia's largest inland lake, saw record recreational boating activity this season. The lake's public status continues to attract visitors from across the region, highlighting the importance of preserving open access to this shared resource.",
        url: '#',
        source: 'Fredericksburg Free Lance-Star',
        publishedAt: new Date().toISOString(),
        category: 'general',
      },
    ],
    generatedAt: new Date().toISOString(),
  };
}
