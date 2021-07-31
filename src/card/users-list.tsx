import React from "react";
import { Card } from "../card/card";
import "../style.scss";
import { User } from "../users/user";

type MyProps = {
  users: Array<User>;
};

export class UsersList extends React.Component<MyProps> {
  render(): JSX.Element {
    const usersArray = this.props.users.map((user, index) => (
      <Card
        id={this.props.users[index].id}
        name={this.props.users[index].name}
        userName={this.props.users[index].userName}
        email={this.props.users[index].email}
        key={this.props.users[index].id}
      />
    ));

    return <div className="cards-wrapper">{usersArray}</div>;
  }
}
