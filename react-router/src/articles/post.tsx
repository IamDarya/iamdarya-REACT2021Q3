import React from "react";
import { NavLink } from "react-router-dom";
import "../style.scss";

type MyProps = {
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
};

export function ArticlePost(props: MyProps): JSX.Element {
  return (
    <>
      <div className="one-article-wrapper">
        <h2>
          <NavLink
            to={`/details/${props.title}`}
            activeClassName="link-active"
            className="link"
          >
            {props.title}
          </NavLink>
        </h2>

        <p>by:</p>
        <h3>{props.author}</h3>

        <p>image:</p>
        <img
          src={
            props.urlToImage !== null
              ? props.urlToImage
              : "https://image.flaticon.com/icons/png/512/4441/4441676.png"
          }
        />

        <p>source name:</p>
        <h3>{props.source.name}</h3>

        <p>description:</p>
        <h3>{props.description}</h3>

        <p>preview:</p>
        <h3>{props.content}</h3>

        <p>read more:</p>
        <a href={props.url}>{props.url}</a>

        <p>published at:</p>
        <h3>{props.publishedAt}</h3>
      </div>
    </>
  );
}
