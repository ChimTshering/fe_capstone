import logo from "../assets/logo.png";
import "./component_styles.css";
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="logo">
          <a href="/#">
            <img src={logo} alt="logo" height={60} />
          </a>
        </li>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Menu</a>
        </li>
        <li>
          <a href="/#">Reservations</a>
        </li>
        <li>
          <a href="/#">Order Online</a>
        </li>
        <li>
          <a href="/#">Login</a>
        </li>
      </ul>
    </nav>
  );
};
