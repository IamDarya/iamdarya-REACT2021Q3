import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { HashRouter, Link, useParams } from "react-router-dom";
import { ArticlePost } from "../articles/post";
import "../header/header.scss";
import { useAppDispatch, useAppSelector } from "../hooks";
import { store } from "../store";
import { getArticle } from "./slice";

type ParamForLink = {
  id: string;
  date: string;
};

export function Details(): JSX.Element {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.detailsComponent.article);
  const paramForLink = useParams<ParamForLink>();

  useEffect(() => {
    dispatch(getArticle(paramForLink.id, paramForLink.date));
  }, []);

  const articlesArray = article.map((articleForDetails, index) => (
    <ArticlePost
      author={articleForDetails.author}
      content={articleForDetails.content}
      description={articleForDetails.description}
      publishedAt={articleForDetails.publishedAt}
      source={{
        id: articleForDetails.source.id,
        name: articleForDetails.source.name,
      }}
      title={articleForDetails.title}
      url={articleForDetails.url}
      urlToImage={articleForDetails.urlToImage}
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

export function FixBugDetails(): JSX.Element {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <HashRouter>
          <Details />
        </HashRouter>
      </React.StrictMode>
    </Provider>
  );
}
