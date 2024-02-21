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
          "https://fuzz-music.com/wp-content/uploads/2020/02/tyler-the-creator-tayler-ze-krieytor.jpg",
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
