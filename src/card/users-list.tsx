import React from "react";
import { Card } from "../card/card";
import "../style.scss";
import { User } from "../users/user";

type MyProps = {
  users: Array<User>;
};

export function UsersList(props: MyProps): JSX.Element {
  const usersArray = props.users.map((user, index) => (
    <Card
      id={props.users[index].id}
      name={props.users[index].name}
      userName={props.users[index].userName}
      email={props.users[index].email}
      key={props.users[index].id}
    />
  ));

  return <div className="cards-wrapper">{usersArray}</div>;
}
