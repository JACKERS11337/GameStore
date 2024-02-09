import { useState } from "react";

export const AuthModalBody = () => {
  const [tab, setTab] = useState("sing-in");
  return (
    <div>
      <div>
        {tab === "sing-in" && <h4>Login</h4>}
        {tab === "register" && <h4>Create Account</h4>}

        <button onClick={() => setTab("sing-in")}>Login</button>
        <button onClick={() => setTab("register")}>Create Account</button>

        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="youremail@example.com" />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input type="text" id="pass" placeholder="password" />
          </div>
          {tab === "sing-in" && <button>LOGIN</button>}
        </div>
      </div>

      {tab === "register" && (
        <div>
          <div>
            <label htmlFor="repeat-pass">Repeat password</label>
            <input type="text" id="repeat-pass" placeholder="repeat password" />
          </div>
          <button>CREATE ACCOUNT</button>
        </div>
      )}
    </div>
  );
};
