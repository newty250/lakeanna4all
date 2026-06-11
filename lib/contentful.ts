import { createClient } from 'contentful';

const isConfigured =
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN;

export const contentfulClient = isConfigured
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    })
  : null;

export const contentfulPreviewClient =
  isConfigured && process.env.CONTENTFUL_PREVIEW_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
        host: 'preview.contentful.com',
      })
    : null;

export async function getContentfulEntries<T>(
  contentType: string,
  options: Record<string, unknown> = {}
): Promise<T[]> {
  if (!contentfulClient) {
    return [];
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const entries = await (contentfulClient as any).getEntries({
      content_type: contentType,
      ...options,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return entries.items.map((item: any) => item.fields as T);
  } catch {
    console.error(`Failed to fetch Contentful entries for ${contentType}`);
    return [];
  }
}
