import React from "react";
import ReactDOM from "react-dom";
import Card from "./card/card";
import "./style.scss";
import { users } from "./users/users";

ReactDOM.render(
  <div className="cards-wrapper">
    <Card
      id={users[0].id}
      name={users[0].name}
      userName={users[0].username}
      email={users[0].email}
    />
    <Card
      id={users[1].id}
      name={users[1].name}
      userName={users[1].username}
      email={users[1].email}
    />
    <Card
      id={users[2].id}
      name={users[2].name}
      userName={users[2].username}
      email={users[2].email}
    />
    <Card
      id={users[3].id}
      name={users[3].name}
      userName={users[3].username}
      email={users[3].email}
    />
    <Card
      id={users[4].id}
      name={users[4].name}
      userName={users[4].username}
      email={users[4].email}
    />
    <Card
      id={users[5].id}
      name={users[5].name}
      userName={users[5].username}
      email={users[5].email}
    />
    <Card
      id={users[6].id}
      name={users[6].name}
      userName={users[6].username}
      email={users[6].email}
    />
    <Card
      id={users[7].id}
      name={users[7].name}
      userName={users[7].username}
      email={users[7].email}
    />
    <Card
      id={users[8].id}
      name={users[8].name}
      userName={users[8].username}
      email={users[8].email}
    />
    <Card
      id={users[9].id}
      name={users[9].name}
      userName={users[9].username}
      email={users[9].email}
    />
  </div>,
  document.getElementById("root")
);
