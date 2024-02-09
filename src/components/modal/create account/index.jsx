/* eslint-disable react/prop-types */
export const CreateAccount = ({ onClick }) => {
  return (
    <div>
      <p>CREATE ACCOUNT</p>
      <button onClick={() => onClick("login")}>Login</button>
      <button onClick={() => onClick("create-login")}>Create Account</button>

      <div>
        <label htmlFor="mail">Email</label>
        <input type="text" id="mail" placeholder="youremail@example.com" />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input type="text" id="pass" placeholder="password" />
      </div>
      <div>
        <label htmlFor="repeat-pass">Repeat password</label>
        <input type="text" id="repeat-pass" placeholder="repeat password" />
      </div>
      <button>CREATE ACCOUNT</button>
    </div>
  );
};
