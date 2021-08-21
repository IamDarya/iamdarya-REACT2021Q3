import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticlePost } from "../articles/post";
import "../header/header.scss";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getArticle } from "./slice";

type ParamForLink = {
  id: string;
  date: string;
};

export function Details(): JSX.Element {

  const dispatch = useAppDispatch()
  const article = useAppSelector((state) => state.detailsComponent.article)

  const paramForLink = useParams<ParamForLink>();

  useEffect(() => {
    dispatch(getArticle(paramForLink.id, paramForLink.date))
  }, []);

  const articlesArray = article.map((article, index) => (
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
