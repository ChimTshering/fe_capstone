import logo from "../assets/logo.png";
import "./component_styles.css";
export const Nav = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav>
      <ul>
        <li className="logo">
          <a href="/#hero" onClick={handleClick("hero")}>
            <img src={logo} alt="logo" height={60} />
          </a>
        </li>
        <li>
          <a href="/#hero" onClick={handleClick("hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={ handleClick("about")}>
            About
          </a>
        </li>
        <li>
          <a href="/#menu" onClick={handleClick("highlights")}>
            Menu
          </a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
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
