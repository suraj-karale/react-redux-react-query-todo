import React from "react";
import { useQuery } from "react-query";

import { fetchUsersList } from "./api";
import Spinner from "react-bootstrap/Spinner";
import ErrorPage from "../../components/ErrorPage";
import { UserModel } from "./UserModel";
import User from "./User";

type UsersProps = {
  // message: string;
};

const Users = (props: UsersProps) => {
  const { isLoading, isError, data, error } = useQuery("users", fetchUsersList);
  console.log(isLoading, isError, data, error);

  if (isLoading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <h1>Users List</h1>;
      {data.map((user: UserModel) => (
        <User user={user} />
      ))}
    </>
  );
};

export default Users;
