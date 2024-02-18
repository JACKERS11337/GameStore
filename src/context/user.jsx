import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );

  const newUser = (item) => {
    item.email === "admin" && item.password === "admin"
      ? setUser({ ...item })
      : alert("admin, admin");
  };

  const exitUser = () => {
    localStorage.clear();
    setUser({});
    location.reload();
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        newUser,
        exitUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
