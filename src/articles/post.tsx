import React from "react";
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
    <div className="one-article-wrapper">
      <h2>{props.title}</h2>

      <p>by:</p>
      <h2>{props.author}</h2>

      <img src={props.urlToImage} />{props.urlToImage === null && <img src={'https://image.flaticon.com/icons/png/512/4441/4441676.png'} alt='Some text to describe the picture.'/>}

      <p>source name:</p>
      <h2>{props.source.name}</h2>

      <p>description:</p>
      <h2>{props.description}</h2>

      <p>content:</p>
      <h2>{props.content}</h2>

      <p>publishedAt:</p>
      <h2>{props.publishedAt}</h2>

      {/* <p>source id:</p>
        <h2>{props.source.id}</h2> */}

      <p>url:</p>
      <a href={props.url}>{props.url}</a>
    </div>
  );
}
