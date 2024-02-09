/* eslint-disable react/prop-types */
export const Login = ({ onClick }) => {
  return (
    <div>
      <p>Login</p>
      <button onClick={() => onClick("login")}>Login</button>
      <button onClick={() => onClick("create-login")}>Create Account</button>

      <div>
        <div>
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder="youremail@example.com" />
        </div>
        <div>
          <label htmlFor="pass"></label>
          <input type="text" id="pass" placeholder="password" />
        </div>
        <button>LOGIN</button>
      </div>
    </div>
  );
};
