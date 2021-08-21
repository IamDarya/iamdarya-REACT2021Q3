import React from "react";
import "../style.scss";
import { ArticlePost } from "./post";
import { useAppSelector } from "../hooks";

type Props = {
  clickSearch: boolean;
};

export function Posts(props: Props): JSX.Element {

  const articles = useAppSelector((state) => state.mainComponent.articles)

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
      {articles.length === 0 && (
        <h2 className="search-for-smth">Search for something...</h2>
      )}
      {articlesArray}
    </div>
  );
}
