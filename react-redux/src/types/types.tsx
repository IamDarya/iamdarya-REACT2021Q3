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
  totalResults: number;
}

export enum SortType {
  publishedAt = "publishedAt",
  popularity = "popularity",
  relevancy = "relevancy",
}

export enum AmountArtclsPerPAge {
  one = 1,
  five = 5,
  ten = 10,
  twenty = 20,
}
