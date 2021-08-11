import React from "react";
import { Article } from "../types/types";
import "../style.scss";
import { ArticlePost } from "./post";

type Props = {
  articles: Article[];
  isLoading: boolean;
  clickSearch: boolean;
};

export function Posts(props: Props): JSX.Element {
  const articlesArray = props.articles.map((article, index) => (
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
      {(!props.clickSearch || props.isLoading) && (
        <h2 className="search-for-smth">Search for something...</h2>
      )}
      {articlesArray}
    </div>
  );
}
