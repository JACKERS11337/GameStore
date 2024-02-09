import { createPortal } from "react-dom";
import { Login } from "./login";
import { CreateAccount } from "./create account";

import { useState } from "react";

export const Modal = () => {
  const [tab, setOpen] = useState("login");

  return createPortal(
    <dialog open style={{ margin: "200px 0 200px 500px ", width: "400px" }}>
      {tab === "login" && <Login onClick={setOpen} />}
      {tab === "create-login" && <CreateAccount onClick={setOpen} />}
    </dialog>,
    document.getElementById("modal")
  );
};
