export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface GetArticles {
  articles: Article[];
}

export enum SortType {
  publishedAt = "publishedAt",
  popularity = "popularity",
  relevancy = "relevancy",
}
