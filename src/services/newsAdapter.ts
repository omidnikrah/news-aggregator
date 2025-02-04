import { NewsApiResponse, GuardianApiResponse, NytApiResponse } from "./newsTypes";

const formatArticle = (article: Partial<Article>): Article => ({
  title: article.title || "No Title",
  description: article.description || "",
  url: article.url || "#",
  imageUrl: article.imageUrl || undefined,
  publishedAt: article.publishedAt || new Date().toISOString(),
  source: article.source || "Unknown",
  author: article.author || "Unknown",
  category: article.category || "General",
});

export const newsApiAdapter = (data: NewsApiResponse): Article[] =>
  data.articles.map(article =>
    formatArticle({
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
      source: article.source.name,
      author: article.author,
      category: article.category,
    }),
  );

export const guardianAdapter = (data: GuardianApiResponse): Article[] =>
  data.response.results.map(article =>
    formatArticle({
      title: article.webTitle,
      description: article.fields?.trailText,
      url: article.webUrl,
      imageUrl: article.fields?.thumbnail,
      publishedAt: article.webPublicationDate,
      source: "The Guardian",
      author: article.fields?.byline,
      category: article.sectionId,
    }),
  );

export const nytAdapter = (data: NytApiResponse): Article[] =>
  data.response.docs.map(article =>
    formatArticle({
      title: article.headline.main,
      description: article.abstract,
      url: article.web_url,
      imageUrl: article.multimedia?.length ? `https://www.nytimes.com/${article.multimedia[0].url}` : undefined,
      publishedAt: article.pub_date,
      source: "New York Times",
      author: article.byline?.original,
      category: article.news_desk,
    }),
  );
