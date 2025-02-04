export interface NewsApiResponse {
  articles: {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    source: {
      name: string;
    };
    author?: string;
    category?: string;
  }[];
}

export interface GuardianApiResponse {
  response: {
    results: {
      webTitle: string;
      webUrl: string;
      webPublicationDate: string;
      sectionId?: string;
      fields?: {
        trailText?: string;
        thumbnail?: string;
        byline?: string;
      };
    }[];
  };
}

export interface NytApiResponse {
  response: {
    docs: {
      headline: {
        main: string;
      };
      abstract: string;
      web_url: string;
      pub_date: string;
      news_desk?: string;
      byline?: {
        original?: string;
      };
      multimedia: { url: string }[];
    }[];
  };
}
