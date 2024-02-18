import { useState, useContext } from "react";
import "./style.scss";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../../../context/user";

export const AuthModalBody = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");

  const [tab, setTab] = useState("sing-in");

  const { newUser } = useContext(UserContext);

  const userData = {
    email: email,
    password: password,
  };

  return (
    <div className="modal-container">
      <div className="modal-text">
        <div className="close" onClick={onClose}>
          <IoMdClose />
        </div>
        {tab === "sing-in" && <h4>Login</h4>}
        {tab === "sing-up" && <h4>Create Account</h4>}

        <div>
          <button onClick={() => setTab("sing-in")}>SING-IN</button>
          <button onClick={() => setTab("sing-up")}>SING-UP</button>
        </div>
      </div>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Youremail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="text"
            id="pass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {tab === "sing-up" && (
          <div>
            <label htmlFor="repeat-pass">Retype password</label>
            <input
              type="text"
              id="repeat-pass"
              placeholder="Retype password"
              value={retypePass}
              onChange={(e) => setRetypePass(e.target.value)}
            />
          </div>
        )}

        <button type="submit" onClick={() => newUser(userData)}>
          {tab === "sing-in" && <span>LOGIN</span>}

          {tab === "sing-up" && <span>CREATE</span>}
        </button>
      </form>
    </div>
  );
};
