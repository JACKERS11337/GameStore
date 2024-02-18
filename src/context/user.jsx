import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const newUser = (item) => {
    const isItemInUser = users.find((user) => user.email === item.email);
    console.log(isItemInUser);
    isItemInUser ? "" : setUsers([...users, { ...item }]);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const users = localStorage.getItem("users");
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        newUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
