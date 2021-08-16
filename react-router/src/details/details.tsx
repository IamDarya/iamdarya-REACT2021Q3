import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "../../node_modules/axios/index";
import { ArticlePost } from "../articles/post";
import { axiosInstance } from "../services/api";
import { Article, GetArticles } from "../types/types";

type ParamForLink = {
  id: string;
}

export function Details(): JSX.Element {

  const [articles, setArticle] = useState<Array<Article>>([]);

  let paramForLink = useParams<ParamForLink>();

  useEffect(() => {
    axiosInstance.get<GetArticles>(
      `/v2/everything?q=${paramForLink.id}&apiKey=40f8ecaa00bd42db95beab4189efa260` // 329abaf799f04521818f8694ecd73318
    ) .then(response =>setArticle(response.data.articles));
  }, []);

  const articlesArray = articles.map((article, index) => (
    <ArticlePost
      author={article.author}
      content={article.content}
      description={article.description}
      publishedAt={article.publishedAt}
      source={{ id: article.source.id, name: article.source.name }}
      title={article.title}
      url={article.url}
      urlToImage={article.urlToImage}
      key={index}
    />
  ));
  return (
    <div className="cards-wrapper">
      {articlesArray}
    </div>
  );
}
