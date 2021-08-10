export interface Article {
  author: string;
  content: string;
  description: string
  publishedAt: string;
  source: {
    id: string,
    name: string
  }
  title: string
  url: string
  urlToImage: string;
}

export interface Get200_Articles {
  articles: Article[];
}
