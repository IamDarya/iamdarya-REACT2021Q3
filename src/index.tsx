import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./card/users-list";
import "./style.scss";
import { users } from "./users/users";

ReactDOM.render(<UsersList users={users} />, document.getElementById("root"));
