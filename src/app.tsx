import React from "react";
import { UsersList } from "./card/users-list";
import { SearchBar } from "./search-bar/search-bar";
import { users } from "./users/users-database";

export function App(): JSX.Element {
  return (
    <>
      <h1>Users</h1>
      <SearchBar />
      <UsersList users={users} />
    </>
  );
}
