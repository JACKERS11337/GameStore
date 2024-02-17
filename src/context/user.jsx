import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUsers] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
  );

  const addUser = (item) => {
    const isItemInUser = user.find((user) => user.email === item.email);
    isItemInUser ? null : setUsers([...user, { ...item }]);
    console.log(item);
    console.log(user);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsers(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
