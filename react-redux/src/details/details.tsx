import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticlePost } from "../articles/post";
import { axiosInstance } from "../services/api";
import { Article, GetArticles } from "../types/types";
import "../header/header.scss";

type ParamForLink = {
  id: string;
  date: string;
};

export function Details(): JSX.Element {
  const [articles, setArticle] = useState<Array<Article>>([]);

  const paramForLink = useParams<ParamForLink>();

  useEffect(() => {
    axiosInstance
      .get<GetArticles>(`/v2/everything?qInTitle=${paramForLink.id}&from=${paramForLink.date}&to=${paramForLink.date}&apiKey=40f8ecaa00bd42db95beab4189efa260`) // 329abaf799f04521818f8694ecd73318
      .then((response) => setArticle(response.data.articles));
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
    <>
      {" "}
      <h2 style={{ color: "#a8b9c2" }} className="details-go-back">
        Go back to{" "}
        <Link to="/" className="link">
          HOME
        </Link>{" "}
        page.
      </h2>
      <div className="cards-wrapper">{articlesArray}</div>
    </>
  );
}
