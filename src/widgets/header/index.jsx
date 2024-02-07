import "./style.scss";
import logo from "/logo.png";
import { Button } from "../../components/button";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">COMMUNITY</a>
            </li>
            <li>
              <a href="#">PROFILE</a>
            </li>
            <li>
              <a href="#">CHAT</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
          </ul>
        </nav>
        <div>
          <Button>Sing in</Button>
          <Button>Register</Button>
        </div>
        <div className="mobile-hamb">
          <span></span>
        </div>
      </div>
    </header>
  );
};
