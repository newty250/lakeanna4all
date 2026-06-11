export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  publishedAt: string;
  category: 'lake-access' | 'regulations' | 'preservation' | 'safety' | 'general';
  imageUrl?: string;
}

export interface NewsCache {
  articles: NewsArticle[];
  generatedAt: string;
}

export interface WAVEPrinciple {
  letter: string;
  word: string;
  description: string;
}

export interface LakeRule {
  title: string;
  description: string;
  icon: string;
}

export interface ContentfulNewsArticle {
  fields: {
    title: string;
    summary: string;
    url: string;
    source: string;
    publishedAt: string;
    category: string;
    imageUrl?: string;
  };
  sys: {
    id: string;
  };
}
