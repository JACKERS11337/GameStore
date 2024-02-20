import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  console.log(user);

  const newUser = (item) => {
    setUser({ ...item });
    if (item.email === "admin" && item.password === "admin") {
      setUser({
        avatar:
          "https://pagesix.com/wp-content/uploads/sites/3/2014/12/spl720225_001.jpg?resize=811",
        username: "JACKERS11337",
        name: "Kirill",
        age: "23",
        country: "Belarus",
      });
    }
  };

  const exitUser = () => {
    setUser({});
    localStorage.clear();
    window.location.assign("/");
  };

  useEffect(() => {
    user ? localStorage.setItem("user", JSON.stringify(user)) : "";
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
