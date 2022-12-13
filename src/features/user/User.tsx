import { UserModel } from "./UserModel";

const User = ({ firstName }: UserModel) => {
  return <div>{firstName}</div>;
};

export default User;
