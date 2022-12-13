export const fetchUsersList = async () => {
  return await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users);
};
