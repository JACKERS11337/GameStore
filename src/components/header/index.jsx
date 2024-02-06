import "./style.scss";
import logo from "/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <a className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="header__menu">
          <ul className="menu__list">
            <li>
              <a className="menu__link" href="#">
                SHOP
              </a>
            </li>
            <li>
              <a className="menu__link" href="#">
                COMMUNITY
              </a>
            </li>
            <li>
              <a className="menu__link" href="#">
                PROFILE
              </a>
            </li>
            <li>
              <a className="menu__link" href="#">
                CHAT
              </a>
            </li>
            <li>
              <a className="menu__link" href="#">
                SUPPORT
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button>Sing in</button>
          <button>Register</button>
        </div>
        <div className="mobile-hamb">
          <span></span>
        </div>
      </div>
    </header>
  );
};
